import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    i18n: {
        defaultLocale: "en",
        locales: ["de", "en", "no"],
        routing: {
            prefixDefaultLocale: false
        },
        fallback: {
            no: "en"
        }
    }
});
