import useUmiStore from "@/store/useUmiStore";
import { Signer, signerIdentity } from "@metaplex-foundation/umi";

const umiWithSigner = (signer: Signer) => {

  // Fetches the Umi instance from the store and uses the signer arg to set the signer identity.
  
  const umi = useUmiStore.getState().umi;
  if (!signer) throw new Error("No Signer selected");
  return umi.use(signerIdentity(signer));
};

export default umiWithSigner;