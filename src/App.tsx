import { ConnectKitButton } from "@cometh/homestead";

function App() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <ConnectKitButton />
      <a
        href="https://github.com/cometh-hq/homestead-demo"
        style={{
          position: "absolute",
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
