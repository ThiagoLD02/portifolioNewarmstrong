import { useEffect } from "react";
import pictureLuan from "../assets/luan fozza-883x1104.jpg";
import pictureMichael from "../assets/michael -883x1104.jpg";
import pictureDean from "../assets/dean karolak-883x1104.png";
import pictureEmanuel from "../assets/emanuel alves-883x1104.jpg";
import pictureLivia from "../assets/livia ferreira-883x1104.jpg";
import pictureHugo from "../assets/hugo rocha-883x1324.jpg";
import pictureMatheus from "../assets/matheus woll-883x1324.jpg";
import pictureBeatriz from "../assets/beatriz theodoro-883x1104.jpg";
import { AreaDosMembros } from "../components/areaDosMembros";
import { cardProps } from "../components/card";

interface membersData {
  positionTitle: string;
  data: cardProps[];
}

export function Membros() {
  useEffect(() => {
    document.title = "Membros";
  }, []);
  const data: membersData[] = [
    {
      positionTitle: "Fundadores",
      data: [
        {
          id: "edewell1",
          name: "Michael Teixeira",
          email: "n",
          linkedin: "n",
          picture: pictureMichael,
          positon: "Diretor",
        },
        {
          id: "edewell2",
          name: "Dean Karolak",
          email: "n",
          linkedin: "n",
          picture: pictureDean,
          positon: "Coordenador",
        },
        {
          id: "edewell3",
          name: "Emanuel Alves",
          email: "n",
          linkedin: "n",
          picture: pictureEmanuel,
          positon: "Vice-diretor",
        },
      ],
    },
    {
      positionTitle: "Eletrônica",
      data: [
        {
          id: "edewell4",
          name: "Luan Fozza",
          email: "n",
          linkedin: "n",
          picture: pictureLuan,
          positon: "Diretor de Eletrômca",
        },
      ],
    },
    {
      positionTitle: "Gestão",
      data: [
        {
          id: "edewell5",
          name: "Livia Ferreira",
          email: "n",
          linkedin: "n",
          picture: pictureLivia,
          positon: "Diretora de Gestão",
        },
      ],
    },
    {
      positionTitle: "Marketing",
      data: [
        {
          id: "6",
          name: "Hugo Rocha",
          email: "n",
          linkedin: "n",
          picture: pictureHugo,
          positon: "Diretor de Marketing",
        },
      ],
    },
    {
      positionTitle: "Modelagem e Impressão 3D",
      data: [
        {
          id: "7",
          name: "Matheus Woll",
          email: "n",
          linkedin: "n",
          picture: pictureMatheus,
          positon: "Diretor de Modelagem e Impressão 3D",
        },
      ],
    },
    {
      positionTitle: "Pesquia",
      data: [
        {
          id: "8",
          name: "Beatriz Theodoro",
          email: "n",
          linkedin: "n",
          picture: pictureBeatriz,
          positon: "Diretora de pesquias",
        },
      ],
    },
  ];
  return (
    <div className="flex flex-col gap-16 pb-16">
      {data.map((diretoria, index) => {
        if (index % 2 == 0)
          return (
            <AreaDosMembros
              title={diretoria.positionTitle}
              style=""
              data={diretoria.data}
            />
          );
        else
          return (
            <AreaDosMembros
              title={diretoria.positionTitle}
              style="bg-azulEscuro text-white"
              data={diretoria.data}
            />
          );
      })}
    </div>
  );
}
