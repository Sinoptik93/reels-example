/// <reference path="../.astro/types.d.ts" />
/// <reference types="@astrojs/image/client" />


interface ImportMetaEnv {
    readonly SERVER_KEY_PATH: string;
    readonly SERVER_CERT_PATH: string;
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
