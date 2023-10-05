import { Instagram, Linkedin, Mail, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="flex justify-between bg-azulEscuro text-white h-16 w-screen items-center">
      <Link
        to="/"
        className="justify-items-start ml-8 cursor-pointer hover:opacity-70"
      >
        NewArmStrong
      </Link>
      <div className="hidden xl:flex xl:z-10 justify-between mr-8">
        <div className="flex justify-between gap-6">
          <nav>
            <Link to="/" className="cursor-pointer hover:opacity-70">
              Quem somos nós
            </Link>
          </nav>

          <Link to="/membros" className="cursor-pointer hover:opacity-70">
            Membros
          </Link>
          <Link to="/contato" className="cursor-pointer hover:opacity-70">
            Contato
          </Link>
          <Link to="/ps" className="cursor-pointer hover:opacity-70">
            Processo Seletivo 2023.2
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
          <DropdownMenuContent className="bg-azulEscuro text-white border-none w-screen rounded-none flex flex-col items-center">
            <DropdownMenuItem>Quem somos nós</DropdownMenuItem>
            <DropdownMenuItem>Membros</DropdownMenuItem>
            <DropdownMenuItem>Contato</DropdownMenuItem>
            <DropdownMenuItem>Processo Seletivo 2023.2</DropdownMenuItem>
            <div className="flex gap-2">
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
