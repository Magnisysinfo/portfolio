import Head from "next/head";
import CustomComponents from "../components/custom/Custom-components";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Magnisys Technologies</title>
        <meta
          name="description"
          content="Mobile Application Comapny"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CustomComponents />
    </div>
  );
}
