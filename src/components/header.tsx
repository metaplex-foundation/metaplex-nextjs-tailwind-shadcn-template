"use client";

import dynamic from "next/dynamic";
import ThemeSwitcher from "./themeSwitcher";

const WalletMultiButtonDynamic = dynamic(
  async () =>
    (await import("@solana/wallet-adapter-react-ui")).WalletMultiButton,
  { ssr: false }
);

const Header = () => {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <p className="flex w-full justify-center border-b bg-background  pb-6 pt-8 backdrop-blur-2xl lg:static lg:w-auto  lg:rounded-xl lg:border lg:p-4">
        Get started by editing&nbsp;
        <code className="font-mono font-bold">src/app/page.tsx</code>
      </p>
      <div className="flex pt-4 lg:pt-0 w-full items-end justify-center gap-4 lg:static lg:size-auto lg:bg-none">
        <WalletMultiButtonDynamic />
        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Header;
