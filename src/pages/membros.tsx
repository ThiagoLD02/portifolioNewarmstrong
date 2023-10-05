import { AreaDosMembros } from "../components/areaDosMembros";
import pictureLuan from "../assets/Luan Fozza.jpg";
import { cardProps } from "../components/card";

export function Membros() {
  const data: cardProps[] = [
    {
      id: "edewell1",
      name: "Lulu",
      email: "n",
      linkedin: "n",
      picture: pictureLuan,
      positon: "Diretor de Eletrônica",
    },
    {
      id: "edewell2",
      name: "Lulu",
      email: "n",
      linkedin: "n",
      picture: pictureLuan,
      positon: "Diretor de Eletrônica",
    },
    {
      id: "edewell3",
      name: "Lulu",
      email: "n",
      linkedin: "n",
      picture: pictureLuan,
      positon: "Diretor de Eletrônica",
    },
  ];
  return (
    <div className="flex flex-col gap-16 pb-16">
      <AreaDosMembros title="Fundadores" style="" data={data} />
      <AreaDosMembros
        title="Eletrônica"
        style="bg-azulEscuro text-white"
        data={data}
      />
      <AreaDosMembros title="Gestão" style="" data={data} />
      <AreaDosMembros
        title="Marketing"
        style="bg-azulEscuro text-white"
        data={data}
      />
      <AreaDosMembros title="Modelagem e Impressão 3D" style="" data={data} />
      <AreaDosMembros
        title="Pesquisa"
        style="bg-azulEscuro text-white"
        data={data}
      />
    </div>
  );
}
