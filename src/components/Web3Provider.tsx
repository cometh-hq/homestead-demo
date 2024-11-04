import React from "react";

import { WagmiProvider, createConfig } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ConnectKitProvider, getDefaultConfig } from "@cometh/homestead";
import { arbitrumSepolia } from "viem/chains";

const config = createConfig(
  getDefaultConfig({
    appName: "Homestead CRA demo",
    walletConnectProjectId: process.env.REACT_APP_WALLETCONNECT_PROJECT_ID!,
    chains: [arbitrumSepolia],
  })
);

const queryClient = new QueryClient();

export const Web3Provider = ({ children }: { children: React.ReactNode }) => {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <ConnectKitProvider debugMode>{children}</ConnectKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};
