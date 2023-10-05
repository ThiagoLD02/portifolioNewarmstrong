import "./App.css";
import { Header } from "./components/header";
import { Membros } from "./pages/membros";
import { QuemSomosNos } from "./pages/quemSomosNos";

function App() {
  return (
    <div className="flex flex-col">
      <Header />
      <Membros />
      {/* <QuemSomosNos /> */}
    </div>
  );
}

export default App;
