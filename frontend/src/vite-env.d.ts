/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string;
  // add any other custom env vars you use
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
