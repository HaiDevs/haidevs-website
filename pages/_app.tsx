import "@fontsource/manrope/variable.css";

import type { AppProps } from "next/app";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { DefaultSeo } from "next-seo";
import { SEO } from "../next-seo.config";
import { useRouter } from "next/router";

export const theme = extendTheme({
  fonts: {
    body: "ManropeVariable, sans-serif",
    heading: "ManropeVariable, sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: "#000",
        color: "#fff",
      },

      // We'll credit fullPage.js via the Readme
      // This is an open-source project
      ".fp-watermark": {
        display: "none",
      },

      // To hide the default focus outline on elements that are keyboard focusable
      // We'll figure out a better way to support accessibility
      "*:focus": {
        shadow: "none !important",
      },
    },
  },
});

function MyApp({ Component, pageProps }: AppProps) {
  const { route } = useRouter();
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        {...SEO}
        title="&copy;"
        titleTemplate="%s | Haitian Developer "
        canonical={`https://haidevs.alawonn.com${route}`}
        additionalMetaTags={[
          {
            name: "application-name",
            content: "IFY Media",
          },
          {
              name: "apple-mobile-web-app-status-bar-style",
              content: 'black-translucent"',
          },
          {
              name: "apple-mobile-web-app-title",
              content: "IFY Media",
          },
          {
              name: "msapplication-config",
              content: "browserconfig.xml",
          },
          {
              name: "msapplication-tap-highlight",
              content: "no",
          },
          {
              name: "msapplication-square70x70logo",
              content: "/icons/mstile-icon-128.png",
          },
          {
              name: "msapplication-square144x144logo",
              content: "/icons/mstile-icon-270.png",
          },
          {
              name: "msapplication-square150x150logo",
              content: "/icons/mstile-icon-558.png",
          },
          {
              name: "msapplication-square310x150logo",
              content: "/icons/mstile-icon-558-270.png",
          },
          {
              name: "msapplication-TileColor",
              content: "#000",
          },
          {
            name: "apple-mobile-web-app-capable",
            content: "yes",
          },
          {
            name: "description",
            content: "HaiDevs - Haitian Developers",
          },
          {
            name: "google",
            content: "notranslate", // To avoid google suggesting translation
          },
        ]}
        additionalLinkTags={[
          {
            rel: "shortcut icon",
            href: "/favicon.ico?v1",
            type: "image/x-icon",
          },
          {
              rel: "icon",
              href: "/icons/manifest-icon-192.maskable.png",
              sizes: "192x192",
              type: "image/png",
          },
          {
              rel: "icon",
              href: "/icons/manifest-icon-512.maskable.png",
              sizes: "512x512",
              type: "image/png",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-2048-2732.jpg",
              media:
                  "(device-width: 1024px) and (device-height: 1366px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-1668-2388.jpg",
              media:
                  "(device-width: 834px) and (device-height: 1194px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-1536-2048.jpg",
              media:
                  "(device-width: 768px) and (device-height: 1024px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-1668-2224.jpg",
              media:
                  "(device-width: 834px) and (device-height: 1111px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-1620-2160.jpg",
              media:
                  "(device-width: 810px) and (device-height: 1080px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-1284-2778.jpg",
              media:
                  "(device-width: 428px) and (device-height: 926px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-1170-2532.jpg",
              media:
                  "(device-width: 390px) and (device-height: 844px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-1125-2436.jpg",
              media:
                  "(device-width: 375px) and (device-height: 811px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-1242-2688.jpg",
              media:
                  "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-828-1792.jpg",
              media:
                  "(device-width: 414px) and (device-height: 896px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-1242-2208.jpg",
              media:
                  "(device-width: 414px) and (device-height: 736px) and (-webkit-device-pixel-ratio: 3) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-750-1334.jpg",
              media:
                  "(device-width: 375px) and (device-height: 667px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          },
          {
              rel: "apple-touch-startup-image",
              href: "/apple-splash-640-1136.jpg",
              media:
                  "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
          },
          {
              rel: "manifest",
              href: "/manifest.json",
          },
          {
              rel: "manifest",
              href: "/site.webmanifest", // duplicate of manifest.json for modern broswer support
          },
        ]}
        languageAlternates={[
          // Option in between <head></head> tags
          {
            hrefLang: "en-US",
            href: "https://haidevs.alawonn.com/en-US",
          },
          {
            hrefLang: "ht",
            href: "https://haidevs.alawonn.com/ht",
          },
          {
            hrefLang: "es",
            href: "https://haidevs.alawonn.com/es",
          },
        ]}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
