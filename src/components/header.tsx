import { Instagram, Linkedin, Mail, Menu } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <div className="flex justify-between bg-azulEscuro text-white h-16 w-screen items-center">
      <a className="justify-items-start ml-8 cursor-pointer hover:opacity-70">
        NewArmStrong
      </a>
      <div className="hidden xl:flex justify-between mr-8">
        <div className="flex justify-between gap-6">
          <a className="cursor-pointer hover:opacity-70">Quem somos nós</a>
          <a className="cursor-pointer hover:opacity-70">Membros</a>
          <a className="cursor-pointer hover:opacity-70">Contato</a>
          <a className="cursor-pointer hover:opacity-70">
            Processo Seletivo 2023.2
          </a>
          <Instagram className="cursor-pointer hover:opacity-70" />
          <Mail className="cursor-pointer hover:opacity-70" />
          <Linkedin className="cursor-pointer hover:opacity-70" />
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
              <Instagram className="cursor-pointer hover:opacity-70" />
              <Mail className="cursor-pointer hover:opacity-70" />
              <Linkedin className="cursor-pointer hover:opacity-70" />
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
