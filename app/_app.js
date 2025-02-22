import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "@/seo/next-seo.config";

export default function App({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
