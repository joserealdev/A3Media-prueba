import { useAppDispatch, useAppSelector } from "@core/store/hooks";
import "./App.css";
import reactLogo from "./assets/react.svg";
import { addToCount } from "./core/store/globalSlice";
import viteLogo from "/vite.svg";

function App() {
  const count = useAppSelector((state) => state.global.counter);
  const dispatch = useAppDispatch();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => dispatch(addToCount())}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
