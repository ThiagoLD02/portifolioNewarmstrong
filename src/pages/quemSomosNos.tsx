import { useEffect } from "react";
import backgroundImg from "../assets/background1.jpg";
import equipe from "../assets/equipe-new-2023-1036x691.jpeg";
import newarmstrongLogo from "../assets/newarmstrong-logo-1076x605.png";

export function QuemSomosNos() {
  useEffect(() => {
    document.title = "Quem somos nós?";
  }, []);
  return (
    <div className="mx-auto h-full w-full max-w-sm lg:max-w-7xl flex flex-col text-center">
      <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center mb-10 xl:mb-0">
        <img src={newarmstrongLogo} width={500} alt="Logo da newarmstrong" />
        <h1 className="text-center font-bold size text-5xl text-azulEscuro">
          Projeto de Extensão NewArmStrong
        </h1>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 justify-items-center items-center text-justify">
        <img src={equipe} width={500} alt="Logo da newarmstrong" />
        <p className="text-base mt-10 xl:mt-0 p-3">
          A Equipe NewArmStrong foi criada ao final do ano de 2019, com o
          objetivo de viabilizar conforto e acessibilidade às pessoas que
          possuem amputação ou má formação de membros superiores, ofertando a
          estas o desenvolvimento e a produção de próteses de baixo custo feitas
          por impressão 3D ou soluções tecnológicas que possibilitam maior
          inclusão. Além de possibilitar, aos membros da equipe, angariar
          experiências técnicas e práticas em diversas áreas que contemplam o
          conhecimento adquirido dentro dos cursos de engenharia da UNIFEI. O
          nome da equipe, NewArmStrong, foi inspirado em duas fontes distintas.
          A primeira homenageia Neil Armstrong, o primeiro homem a pisar na Lua,
          cuja conquista simboliza a superação de limites humanos por meio da
          tecnologia. A segunda inspiração vem da expressão "New Arm Strong",
          que, em tradução literal, significa "novo braço forte". Esse
          significado reflete o objetivo principal da equipe: fornecer por meio
          da tecnologia um "novo braço forte" para aqueles que desejam superar
          suas limitações. Em resumo, a equipe NewArmStrong trabalha em conjunto
          com estudantes de diversas áreas da engenharia, professores e empresas
          parceiras para desenvolver próteses de membros superiores de alta
          qualidade e eficiência. Utilizando tecnologia de impressão 3D, o
          objetivo é transformar sonhos em realidade e fornecer aos
          beneficiários a oportunidade de melhorar sua qualidade de vida.
        </p>
      </div>
      <div
        style={{
          backgroundImage: `url(${backgroundImg})`,
        }}
        className="w-full mt-6 text-white h-[500px] mb-48 bg-cover bg-no-repeat"
      >
        <div className="flex flex-col w-full text-center items-center opacity-90 bg-azulEscuro justify-center text-white h-full ">
          <h1 className="text-center font-bold size text-5xl text-white">
            Onde estamos
          </h1>
          <iframe
            className="w-11/12 h-3/4 pt-10"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyB7QWkvlxV39ZsyKvhZRjPGVqlJFvxxNkw&amp;q=UNIFEI Itabira Brazil"
            allowFullScreen={true}
          ></iframe>
        </div>
      </div>
    </div>
  );
}
