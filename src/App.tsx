import "./App.css";
import { Header } from "./components/header";
import { QuemSomosNos } from "./components/quemSomosNos";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <QuemSomosNos />
    </div>
  );
}

export default App;
