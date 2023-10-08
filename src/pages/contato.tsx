import { Instagram, Linkedin, Mail } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export function Contato() {
  useEffect(() => {
    document.title = "Contato";
  }, []);
  return (
    <div className="flex flex-col w-11/12 xl:w-3/4 text-center m-auto ">
      <h1 className="text-4xl lg:text-6xl text-azulEscuro mt-10">
        Fale conosco:
      </h1>
      <div className="flex mx-auto my-10 gap-5">
        <a
          href="https://www.instagram.com/equipenewarmstrong/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-pink-500 rounded-full w-14 h-14 justify-center items-center"
        >
          <Instagram
            color="white"
            className="cursor-pointer hover:opacity-70 w-10 h-10"
          />
        </a>
        <a
          href="https://www.linkedin.com/company/newarmstrong-unifei/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-blue-500 rounded-full w-14 h-14 justify-center items-center"
        >
          <Linkedin
            color="white"
            className="cursor-pointer hover:opacity-70 w-10 h-10"
          />
        </a>
        <a
          href="mailto:newarmstrong@unifei.edu.br"
          target="_blank"
          rel="noopener noreferrer"
          className="flex bg-[#9146ff] rounded-full w-14 h-14 justify-center items-center"
        >
          <Mail
            fill="white"
            color="#9333ea"
            className="cursor-pointer hover:opacity-70 w-10 h-10"
          />
        </a>
      </div>

      <div>
        <p className="text-justify text-lg">
          Para obter mais informações sobre o projeto, entre em contato conosco
          pelos meios disponibilizados. Se você deseja entrar em contato com um
          setor específico, pode encontrar o LinkedIn e o e-mail dos diretores
          responsáveis por cada setor na aba{" "}
          <Link
            to="/membros"
            className="cursor-pointer hover:opacity-70 text-azulClaro"
          >
            Membros
          </Link>
          .
        </p>
      </div>
    </div>
  );
}
