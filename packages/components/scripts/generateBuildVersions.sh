#!/bin/bash
# Auto-generate buildVersions.json from git tags
# Finds the latest patch version for each minor version of components

set -e

# Navigate to repository root
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/../../.." && pwd)"
cd "$REPO_ROOT"

# Output file location
OUTPUT_FILE="packages/components/buildVersions.json"

echo "🔍 Scanning component library tags..."

# Get all component tags and extract version numbers
# Remove 'components/' prefix and 'v' prefix, then sort
VERSIONS=$(git tag -l "components/*" | \
  sed 's/^components\///' | \
  sed 's/^v//' | \
  grep -E '^(0\.(1[1-5])|1\.0)\.' | \
  sort -V)

# Function to get latest patch for a minor version
get_latest_minor() {
  local minor_version=$1
  echo "$VERSIONS" | grep "^${minor_version}\." | tail -1
}

# Find latest versions for each minor
declare -a LATEST_VERSIONS

for minor in "0.11" "0.12" "0.13" "0.14" "0.15" "1.0"; do
  latest=$(get_latest_minor "$minor")
  if [ -n "$latest" ]; then
    LATEST_VERSIONS+=("$latest")
  fi
done

# Generate JSON array
echo "📝 Generating buildVersions.json..."
printf '[\n' > "$OUTPUT_FILE"

for i in "${!LATEST_VERSIONS[@]}"; do
  version="${LATEST_VERSIONS[$i]}"
  if [ $i -eq $((${#LATEST_VERSIONS[@]} - 1)) ]; then
    printf '  "v%s"\n' "$version" >> "$OUTPUT_FILE"
  else
    printf '  "v%s",\n' "$version" >> "$OUTPUT_FILE"
  fi
done

printf ']\n' >> "$OUTPUT_FILE"

echo "✅ Generated buildVersions.json with ${#LATEST_VERSIONS[@]} versions:"
cat "$OUTPUT_FILE"

echo ""
echo "Latest versions per minor release:"
for version in "${LATEST_VERSIONS[@]}"; do
  minor=$(echo "$version" | cut -d. -f1-2)
  echo "  • ${minor}.x → v${version}"
done
