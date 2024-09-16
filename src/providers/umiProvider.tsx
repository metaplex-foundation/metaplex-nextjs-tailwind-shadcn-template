"use client";


import useUmiStore from "@/store/useUmiStore";
import { WalletAdapter } from "@solana/wallet-adapter-base";
import { useWallet } from "@solana/wallet-adapter-react";

import { createContext, useContext, useEffect } from "react";

// interface context {
//   // umi: Umi;
// }

// const defaultContext: context = {
//   // umi: createUmi(EndPoints.MAINNET).use(mplTokenMetadata()),
// };

// const UmiContext = createContext<context>(defaultContext);

function UmiProvider({ children }: { children: any }) {
  const wallet = useWallet();
  const umiStore = useUmiStore();

  useEffect(() => {
    if (!wallet.publicKey) return;
    // When wallet.publicKey changes, update the signer in umiStore with the new wallet adapter.
    umiStore.updateSigner(wallet as unknown as WalletAdapter);
  }, [wallet.publicKey]);

  return <>{children}</>;
}

// function useUmi() {
//   const context = useContext(UmiContext);
//   if (context === undefined) {
//     throw new Error("useUmi must be used within a UmiProvider");
//   }
//   return context;
// }

export { UmiProvider };