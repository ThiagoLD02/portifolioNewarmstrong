import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./components/header";
import { MyRoutes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col">
        <Header />
        <MyRoutes />
      </div>
    </BrowserRouter>
  );
}

export default App;
