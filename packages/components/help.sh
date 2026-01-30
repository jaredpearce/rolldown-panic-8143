#!/bin/bash

# Build Storybook with version selector for component library releases
# Usage: ./help.sh build
# 
# This script:
# 1. Auto-generates buildVersions.json from git tags
# 2. Builds current Storybook
# 3. Builds historical versions from git tags
# 4. Creates a version selector in the Storybook sidebar

set -e

if [[ $1 == build ]]; then
  echo "🚀 Building Storybook with version selector..."
  echo ""
  
  # Step 1: Generate buildVersions.json from git tags
  echo "📋 Step 1: Generating buildVersions.json from git tags..."
  ./scripts/generateBuildVersions.sh
  echo ""
  
  # Step 2: Read versions from buildVersions.json
  FILE_CONTAIN=$(cat ./buildVersions.json)
  FILE_CONTAIN=$(echo $FILE_CONTAIN | tr -d '\n|[|]| |"')
  IFS=', ' read -r -a VERSIONS <<< "$FILE_CONTAIN"
  
  # Save current branch
  BRANCH_NAME=$(git symbolic-ref -q HEAD)
  BRANCH_NAME=${BRANCH_NAME##refs/heads/}
  BRANCH_NAME=${BRANCH_NAME:-HEAD}
  
  echo "💾 Current branch: $BRANCH_NAME"
  echo "📦 Building ${#VERSIONS[@]} versions: ${VERSIONS[@]}"
  echo ""
  
  # Step 3: Build current Storybook
  echo "🔨 Step 2: Building current Storybook..."
  rm -rf storybook-static
  yarn storybook:build
  
  # Copy buildVersions.json to output for version selector
  cp ./buildVersions.json ./storybook-static/
  echo "✅ Current version built"
  echo ""
  
  # Step 4: Build historical versions
  echo "📚 Step 3: Building historical versions..."
  mkdir -p ./storybook-static/builds/
  
  for version in "${VERSIONS[@]}"
  do
    # Extract version without 'v' prefix for tag lookup
    version_clean=${version#v}
    
    # Try both tag formats: components/vX.Y.Z and components/X.Y.Z
    tag_name=""
    if git rev-parse "components/v${version_clean}" >/dev/null 2>&1; then
      tag_name="components/v${version_clean}"
    elif git rev-parse "components/${version_clean}" >/dev/null 2>&1; then
      tag_name="components/${version_clean}"
    else
      echo "⚠️  Warning: Tag not found for version $version, skipping..."
      continue
    fi
    
    echo "  📦 Building $version from tag $tag_name..."
    
    # Check if build branch exists for this version
    build_branch="build_${version}"
    if git rev-parse --verify "$build_branch" >/dev/null 2>&1; then
      git checkout "$build_branch"
      rsync -av --progress ../../ "./storybook-static/builds/$version" \
        --exclude packages \
        --exclude node_modules \
        --exclude storybook-static \
        --exclude .git \
        --exclude .yarn
      echo "  ✅ Built from branch $build_branch"
    else
      echo "  ℹ️  No build branch found for $version, skipping historical build"
    fi
  done
  
  echo ""
  echo "🔄 Step 4: Returning to original branch..."
  git checkout "$BRANCH_NAME"
  
  echo ""
  echo "✨ Storybook build complete!"
  echo "📊 Output: ./storybook-static"
  echo "🎯 Versions included: ${#VERSIONS[@]}"
  for version in "${VERSIONS[@]}"; do
    echo "   • $version"
  done
fi
