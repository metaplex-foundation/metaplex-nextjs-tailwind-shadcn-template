import MetaplexLogo from "@/assets/logos/metaplex-logo.png";
import Header from "@/components/header";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Header />

      <div
        className="relative z-[-1] flex place-items-center"
        style={{ filter: "invert(var(--invert-value))" }}
      >
        <img
          className="relative"
          src={MetaplexLogo.src}
          alt="<Metaplex Logo"
          width={500}
        />
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:w-full lg:max-w-5xl lg:grid-cols-4 lg:text-left gap-4">
        <a
          href="https://developers.metaplex.com"
          className="group rounded-lg border px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Docs{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Learn about Solana and the Metaplex programs from the developer hub.
          </p>
        </a>

        <a
          href="https://github.com/metaplex-foundation"
          className="group rounded-lg border px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Github{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            The Metaplex Foundation&apos;s Github projects.
          </p>
        </a>

        <a
          href="https://discord.com/invite/metaplex"
          className="group rounded-lg border px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Discord{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Come chat and find support in the Metaplex Discord server.
          </p>
        </a>

        <a
          href="https://x.com/metaplex"
          className="group rounded-lg border px-5 py-4 transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className="mb-3 text-2xl font-semibold">
            Twitter{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-balance text-sm opacity-50">
            The Metaplex Twitter/X account for news and updates.
          </p>
        </a>
      </div>
    </main>
  );
}
