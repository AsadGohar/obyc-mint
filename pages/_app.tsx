import type { AppProps } from "next/app";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import Head from "next/head";
import ThirdwebGuideFooter from "../components/GitHubLink";
import { Header } from '../components/common'
import "../styles/globals.css";
import { rpcMainnet,rpcPolygon, rpcGoreli } from "../components/utils/consts";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }: AppProps) {
  const AnyComponent = Component as any;
  return (
    <ThirdwebProvider 
      desiredChainId={activeChainId}
      chainRpc={{ [ChainId.Goerli]: rpcGoreli }} >
      <Header />
      <Head>
        <title>OBYC Labs™</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta
          name="description"
          content="The OBYC Hazmat Division consists of 10,000 Lab Items with 7,777 L1 🧪 🐟 items being airdropped to all Okay Bear Yacht Club Bears. Choose your path wisely with L2 🧪🐟 items mint. The official snapshot was taken on 9/19/2022 at 9:19 PM EST. Instructions to follow..."
        />
        <meta
          name="keywords"
          content="OBYC Labs, Hazmat Division Edition drop"
        />
      </Head>
      <AnyComponent {...pageProps} />
      <ThirdwebGuideFooter />
    </ThirdwebProvider>
  );
}

export default MyApp;
