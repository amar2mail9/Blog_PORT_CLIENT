import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import SEO from "@/seo/next-seo.config";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="bpuEyUGmP9l/DeDO56VmEA"
          async
        ></script>
      </Head>
      <DefaultSeo {...SEO} />
      <Component {...pageProps} />
    </>
  );
}
