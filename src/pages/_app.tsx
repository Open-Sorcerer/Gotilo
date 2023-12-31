import Navbar from "@components/Layout/Navbar";
import WalletContextProvider from "@components/WalletProvider";
import "@styles/globals.css";
import type { AppProps } from "next/app";
import NextProgress from "next-progress";
import { HuddleProvider, HuddleClient } from "@huddle01/react";

export default function App({ Component, pageProps }: AppProps) {
  const huddleClient = new HuddleClient({
    projectId: "6xdVfs_44LxFtpdscvCIV5O-AaXBEWSS",
  });

  return (
    <div className="relative">
      <NextProgress
        delay={300}
        height="6px"
        options={{
          showSpinner: false,
        }}
        color="#800080"
      />
      <WalletContextProvider>
        <HuddleProvider client={huddleClient}>
          <Navbar />
          <Component {...pageProps} />
        </HuddleProvider>
      </WalletContextProvider>
    </div>
  );
}
