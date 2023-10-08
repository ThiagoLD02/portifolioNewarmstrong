import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Instagram, Linkedin, Mail, Menu } from "lucide-react";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex justify-between bg-azulEscuro text-white h-16 w-screen items-center">
      <Link
        to="/"
        className="justify-items-start ml-8 cursor-pointer hover:opacity-70"
      >
        <strong>NewArmStrong</strong>
      </Link>
      <div className="hidden xl:flex xl:z-10 justify-between mr-8">
        <div className="flex justify-between gap-6">
          <Link to="/quemSomosNos" className="cursor-pointer hover:opacity-70">
            <strong>Quem somos nós</strong>
          </Link>

          <Link to="/membros" className="cursor-pointer hover:opacity-70">
            <strong>Membros</strong>
          </Link>
          <Link to="/contato" className="cursor-pointer hover:opacity-70">
            <strong>Contato</strong>
          </Link>
          <Link to="/ps" className="cursor-pointer hover:opacity-70">
            <strong>Processo Seletivo 2023.2</strong>
          </Link>
          <a
            href="https://www.instagram.com/equipenewarmstrong/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="cursor-pointer hover:opacity-70" />
          </a>
          <a
            href="mailto:newarmstrong@unifei.edu.br"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Mail className="cursor-pointer hover:opacity-70" />
          </a>
          <a
            href="https://www.linkedin.com/company/newarmstrong-unifei/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="cursor-pointer hover:opacity-70" />
          </a>
        </div>
      </div>
      <div className="xl:hidden mr-8">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Menu />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-azulEscuro text-white border-none w-screen rounded-none flex flex-col items-center gap-3 mt-3">
            <Link to="/">Quem somos nós</Link>
            <Link to="/membros">Membros</Link>
            <Link to="/contato">Contato</Link>
            <Link to="/ps">Processo Seletivo 2023.2</Link>
            <div className="flex gap-5">
              <a
                href="https://www.instagram.com/equipenewarmstrong/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="hover:opacity-70" />
              </a>
              <a
                href="mailto:newarmstrong@unifei.edu.br"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Mail className="cursor-pointer hover:opacity-70" />
              </a>
              <a
                href="https://www.linkedin.com/company/newarmstrong-unifei/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="cursor-pointer hover:opacity-70" />
              </a>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
