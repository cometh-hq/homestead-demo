import { useWriteContract } from "wagmi";
import abi from "../abis/COUNTER_ABI.json";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Alert } from "./ui/Alert";

export function SendTransactionContent() {
  const {
    writeContract,
    isPending,
    isError,
    error,
    isSuccess,
    data: hash,
  } = useWriteContract();

  return (
    <Card
      title="Send Transaction"
      description="This button will send a transaction to the Counter contract to increase the count."
      button={
        <Button
          onClick={() => {
            writeContract({
              address: "0x4FbF9EE4B2AF774D4617eAb027ac2901a41a7b5F",
              abi: abi,
              functionName: "count",
            });
          }}
        >
          {isPending ? "Pending..." : "Send transaction"}
        </Button>
      }
    >
      {isError && (
        <Alert title="Error">
          {(error as any)?.message || "Unknown error"}
        </Alert>
      )}
      {isSuccess && (
        <Alert title="Transaction hash">
          <a href={`https://sepolia.arbiscan.io/tx/${hash}`} target="_blank">
            {hash}
          </a>
        </Alert>
      )}
    </Card>
  );
}
