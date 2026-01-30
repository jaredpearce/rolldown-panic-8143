/// <reference types="vite/client" />

/**
 * Inserted here to provide intellisense for `import.meta.env` in TypeScript files.
 * @see https://vite.dev/guide/env-and-mode.html#intellisense-for-typescript
 */
interface ViteTypeOptions {
  // By adding this line, you can make the type of ImportMetaEnv strict
  // to disallow unknown keys.
  strictImportMetaEnv: unknown;
}

interface ImportMetaEnv {
  DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
