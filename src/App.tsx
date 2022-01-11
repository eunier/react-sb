import "./App.css";
import { Comp } from "./Comp";

function App() {
  const handleOnClick = () => {
    console.log("clicked");
  };

  return (
    <div className="App">
      <Comp name="click me" onClick={handleOnClick} />
    </div>
  );
}

export default App;
