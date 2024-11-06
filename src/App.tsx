import "./App.css";
import { Drawer } from "vaul";

function App() {
  return (
    <>
      <h1>Vaul demo</h1>
      <VaulDrawer trigger="Open good example" />
      <p>Scroll down to see the bug</p>
      <div style={{ height: "200vh" }} />
      <VaulDrawer trigger="Open buggy example" />
    </>
  );
}

function VaulDrawer(props: { trigger: string }) {
  return (
    <Drawer.Root>
      <Drawer.Trigger>{props.trigger}</Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <Drawer.Content
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "fit-content",
            backgroundColor: "#f3f4f6",
            outline: "none",
          }}
        >
          <div
            style={{
              padding: "1rem",
              backgroundColor: "white",
              display: "flex",
              flexDirection: "column",
              gap: "16px",
            }}
          >
            <h1 style={{ color: "black" }}>Example sheet</h1>
            <button
              onClick={() => {
                alert("Clicked");
              }}
              type="button"
              style={{
                padding: "24px 16px",
                maxWidth: "max-content",
                fontSize: "2em",
              }}
            >
              Click me
            </button>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}

export default App;
