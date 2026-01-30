# rolldown-panic-8143

Mono-repo component library built with Vite 8 (Rolldown), React, TypeScript, and Ant Design.

## Project Structure

```
rolldown-panic-8143/
├── packages/
│   └── components/          # React component library
│       ├── src/
│       │   ├── CustomButton.tsx
│       │   ├── CustomButton.stories.tsx
│       │   └── index.ts
│       ├── package.json
│       ├── vite.config.ts
│       └── tsconfig.json
├── .storybook/              # Storybook configuration
├── package.json             # Root workspace configuration
└── README.md
```

## Technology Stack

- **Package Manager**: Yarn Berry (v4.12.0)
- **Build Tool**: Vite v8.0.0-beta.11 (using Rolldown)
- **UI Framework**: React 19 + TypeScript
- **Component Library**: Ant Design (antd)
- **Documentation**: Storybook v8.6.14
- **Linter**: oxlint (oxc)
- **Formatter**: oxc

## Getting Started

### Prerequisites

- Node.js >= 22.21.0
- Yarn >= 4.12.0

### Installation

```bash
# Install dependencies
yarn install
```

### Development

```bash
# Build all packages
yarn build

# Run Storybook
yarn storybook

# Lint code
yarn lint
```

### Building the Component Library

```bash
# Build the components package
cd packages/components
yarn build
```

The build output will be in `packages/components/dist/`:
- `index.js` - ES module build
- `index.cjs` - CommonJS build
- `*.d.ts` - TypeScript declaration files

## Component Library

The component library (`@rolldown-panic-8143/components`) is built in library mode using Vite. Components are created with:
- React + TypeScript
- Ant Design framework
- Side-by-side Storybook stories

### Example Component

```typescript
import { CustomButton } from '@rolldown-panic-8143/components';

<CustomButton label="Click me" type="primary" />
```

## Storybook

Storybook is configured to find stories in all packages:

```bash
yarn storybook
```

Visit http://localhost:6006 to view the component documentation.

## Package Structure

The project follows a mono-repo structure with Yarn workspaces:

- **Root**: Contains shared development dependencies and scripts
- **packages/components**: The component library package with React components

## Scripts

- `yarn build` - Build all workspace packages
- `yarn lint` - Lint all packages with oxlint
- `yarn storybook` - Run Storybook development server
- `yarn build-storybook` - Build static Storybook

## License

MIT