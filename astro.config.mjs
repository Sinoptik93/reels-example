import {defineConfig} from 'astro/config';
import react from '@astrojs/react';
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import image from "@astrojs/image";
// import basicSsl , {getCertificate} from '@vitejs/plugin-basic-ssl'


// https://astro.build/config
export default defineConfig({
    integrations: [
        react(),
        tailwind(),
        mdx(),
        image({
            serviceEntryPoint: "@astrojs/image/sharp"
        }),
    ],
});
