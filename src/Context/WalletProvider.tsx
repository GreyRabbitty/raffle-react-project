import React, { useEffect, useState } from "react";
import {
  EthereumClient,
  w3mConnectors,
  w3mProvider,
} from "@web3modal/ethereum";
import { Web3Modal } from "@web3modal/react";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { polygon, polygonMumbai } from "wagmi/chains";
// import { alchemyProvider } from "wagmi/providers/alchemy";
import { infuraProvider } from "wagmi/providers/infura";
import { PROJECTID } from "../Const";

interface Props {
  children: React.ReactNode;
}

const chains = [polygon, polygonMumbai];
const projectId: string = PROJECTID;

const { publicClient } = configureChains(chains, [
  infuraProvider({
    apiKey: "02bb38ad565849858346137bb1dfb70a"
  }),
  w3mProvider({ projectId }),
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors: w3mConnectors({ projectId, chains }),
  publicClient,
});

const ethereumClient = new EthereumClient(wagmiConfig, chains);

const WalletProvider: React.FC<Props> = ({ children }) => {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);
  return (
    <>
      {ready ? (
        <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig>
      ) : null}

      <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
    </>
  );
};

export default WalletProvider;
