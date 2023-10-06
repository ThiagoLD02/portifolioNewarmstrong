import { Route, Routes } from "react-router-dom";
import { Contato } from "./pages/contato";
import { Membros } from "./pages/membros";
import { PS } from "./pages/ps";
import { QuemSomosNos } from "./pages/quemSomosNos";

export function MyRoutes() {
  return (
    <Routes>
      <Route path="/" Component={QuemSomosNos} />
      <Route path="/membros" Component={Membros} />
      <Route path="/contato" Component={Contato} />
      <Route path="/ps" Component={PS} />
    </Routes>
  );
}
