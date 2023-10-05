import React from "react";
import { Route, Routes } from "react-router-dom";
import { Membros } from "./pages/membros";
import { QuemSomosNos } from "./pages/quemSomosNos";
import { Contato } from "./pages/contato";
import { PS } from "./pages/ps";

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
