import { Instagram, Linkedin, Mail, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  const links = (
    <>
      <a className="cursor-pointer hover:opacity-70">Quem somos nós</a>
      <a className="cursor-pointer hover:opacity-70">Membros</a>
      <a className="cursor-pointer hover:opacity-70">Contato</a>
      <a className="cursor-pointer hover:opacity-70">
        Processo Seletivo 2023.2
      </a>
      <Instagram className="cursor-pointer hover:opacity-70" />
      <Mail className="cursor-pointer hover:opacity-70" />
      <Linkedin className="cursor-pointer hover:opacity-70" />
    </>
  );
  const dropdown = (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Menu />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-azulEscuro text-white border-none w-screen rounded-none flex flex-col items-center">
        <DropdownMenuItem>Quem somos nós</DropdownMenuItem>
        <DropdownMenuItem>Membros</DropdownMenuItem>
        <DropdownMenuItem>Contato</DropdownMenuItem>
        <DropdownMenuItem>Processo Seletivo 2023.2</DropdownMenuItem>
        <DropdownMenuItem className="gap-3">
          <Instagram className="cursor-pointer hover:opacity-70" />
          <Mail className="cursor-pointer hover:opacity-70" />
          <Linkedin className="cursor-pointer hover:opacity-70" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );

  return (
    <div className="flex justify-between bg-azulEscuro text-white h-16 w-screen items-center">
      <a className="justify-items-start ml-8 cursor-pointer hover:opacity-70">
        NewArmStrong
      </a>
      <div className="flex justify-between mr-8">
        {window.innerWidth < 1280 ? dropdown : links}
      </div>
    </div>
  );
}
