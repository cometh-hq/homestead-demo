import { useSignMessage } from "wagmi";
import { Button } from "./ui/Button";
import { Card } from "./ui/Card";
import { Alert } from "./ui/Alert";

export function SignMessageContent() {
  const {
    signMessage,
    isPending,
    isError,
    error,
    isSuccess,
    data: signature,
  } = useSignMessage();

  return (
    <Card
      title="Sign Message"
      description="This button will sign the message 'Hello, world!' with the connected account."
      button={
        <Button
          onClick={() => {
            signMessage({
              message: "Hello, world!",
            });
          }}
        >
          {isPending ? "Pending..." : "Sign message"}
        </Button>
      }
    >
      {isError && (
        <Alert title="Error">
          {(error as any)?.message || "Unknown error"}
        </Alert>
      )}
      {isSuccess && <Alert title="Signature">{signature}</Alert>}
    </Card>
  );
}
