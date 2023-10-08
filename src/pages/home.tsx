import { useEffect } from "react";
import logo from "../assets/logo-unifei-newarmstrong-1419x710.png";
export function Home() {
  useEffect(() => {
    document.title = "Home";
  }, []);
  return (
    <div className="flex flex-col w-full h-[calc(100vh_-_16rem)] gap-12">
      <section className="flex flex-col xl:flex-row w-full xl:max-w-5xl text-justify items-center gap-10 mx-auto">
        <img src={logo} width={630} alt="Logo Unifei e NewArmStrong" />
        <div className="flex flex-col items-center">
          <p className="text-azulClaro p-4 text-center text-xl">
            O mistério gera curiosidade e a curiosidade é a base do desejo
            humano para compreender.
          </p>
          <h4 className="text-xl">Armstrong, Neil</h4>
        </div>
      </section>

      <section className="bg-azulEscuro text-white flex justify-center xl:h-96 py-10 ">
        <div className="bg-azulClaro w-11/12 p-4 xl:p-12 max-w-5xl rounded-md flex flex-col justify-center gap-3">
          <strong className="text-xl xl:text-2xl">Sobre o projeto</strong>
          <p className="mt-4 text-justify text-base xl:text-lg">
            A equipe NewArmStrong foi criada como um projeto de extensão da
            Universidade Federal de Itajubá - Campus Itabira no final de 2019.
            Seu principal objetivo é estudar, desenvolver, aprimorar e fornecer
            próteses de membros superiores para aqueles que necessitam, sem
            custo algum para os beneficiários.
          </p>
        </div>
      </section>
    </div>
  );
}
