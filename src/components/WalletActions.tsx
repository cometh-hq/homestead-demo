import { useAccount } from "wagmi";
import { SendTransactionContent } from "./SendTransactionContent";
import { SignMessageContent } from "./SignMessageContent";

export function WalletActions() {
  const { isConnected } = useAccount();

  if (!isConnected) {
    return <></>;
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 30,
        marginTop: 30,
        padding: " 20px",
        maxWidth: 600,
        width: "100%",
      }}
    >
      <SendTransactionContent />
      <SignMessageContent />
    </div>
  );
}
