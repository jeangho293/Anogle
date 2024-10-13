/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
