# react-mini-store
A Simple React Mini Store

## Usage

```javascript
import {createMiniStore} from "@asefa96/react-mini-store";

const myStore = createMiniStore((get: any, set: any) => ({
  count: 0,
  increment: () => set((store: any) => ({ ...store, count: store.count + 1 })),
  decrement: () => set((store: any) => ({ ...store, count: store.count - 1 })),
}));

function App() {
  const { count, increment } = myStore();
  return (
    <div className="App">
      <header className="App-header">
        <p>{count}</p>
        <button onClick={increment}>inc</button>
      </header>
    </div>
  );
}

export default App;
```
