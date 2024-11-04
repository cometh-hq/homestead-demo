import { ConnectKitButton } from "@cometh/homestead";
import { WalletActions } from "./components/WalletActions";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        flexDirection: "column",
        padding: "0 30px",
      }}
    >
      <div
        style={{
          marginTop: 30,
        }}
      >
        <ConnectKitButton />
      </div>
      <WalletActions />
      <a
        href="https://github.com/cometh-hq/homestead-demo"
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          cursor: "pointer",
        }}
      >
        <img
          src="/github-mark.svg"
          alt="GitHub"
          style={{ width: 24, height: 24 }}
        />
      </a>
    </div>
  );
}

export default App;
