import { ArquivoParaDownload } from "@/components/arquivoParaDownload";
import { EtapaPs } from "@/components/etapaPs";
import { FileEdit, Files } from "lucide-react";
import { useEffect } from "react";

export function PS() {
  useEffect(() => {
    document.title = "Processo seletivo";
  }, []);
  const data = {
    etapas: [
      {
        title: "Período de inscrição",
        number: "1",
        description: "Data: 30/08/2023 - 10/09/2023 (12h)",
        hasArrowDown: true,
      },
      {
        title:
          "E-mail de confirmação de inscrição e informações sobre a entrevista (Local e horário)",
        number: "2",
        description: "Data: 10/09/2023",
        hasArrowDown: true,
      },
      {
        title: "Entrevistas",
        number: "3",
        description: "Data: 30/08/2023 - 10/09/2023 (12h)",
        hasArrowDown: true,
      },
      {
        title: "Divulgação dos aprovados",
        number: "4",
        description: "Data: 30/08/2023 - 10/09/2023 (12h)",
        hasArrowDown: true,
      },
      {
        title: "Reunião Com os Aprovados",
        number: "5",
        description: "Data: 30/08/2023 - 10/09/2023 (12h)",
        hasArrowDown: true,
      },
      {
        title: "Fase Trainee",
        number: "6",
        description: "Data: 30/08/2023 - 10/09/2023 (12h)",
        hasArrowDown: true,
      },
      {
        title: "Resultado ",
        number: "7",
        description: "Data: 30/08/2023 - 10/09/2023 (12h)",
        hasArrowDown: false,
      },
    ],
    downloads: [
      {
        title: "Manual do processo seletivo 2023",
        buttonName: "Download",
        downloadLink: "Lulu",
      },
      {
        title: "Formulário de inscrição Processo seletivo 2023",
        buttonName: "Formulário",
        downloadLink:
          "https://docs.google.com/forms/d/e/1FAIpQLScGO96Ow_GvfbSuLvpeUua3nMUm3L43-JXBkRebtPdukDpeJw/closedform",
      },
    ],
  };

  return (
    <div>
      <div className="m-auto text-center mt-10">
        <h1 className="text-5xl font-bold text-azulEscuro pt-5">
          Processo Seletivo NewArmStrong:
        </h1>
        <h2 className="text-4xl font-bold text-azulEscuro py-16">Etapas:</h2>
      </div>

      <div className="w-11/12 m-auto xl:max-w-5xl">
        {data.etapas.map((etapa) => (
          <EtapaPs data={etapa} />
        ))}
      </div>

      <section
        id="downloads"
        className="flex flex-col xl:flex-row gap-10 justify-center items-center my-16 "
      >
        <ArquivoParaDownload
          title={data.downloads[0].title}
          icon={Files}
          buttonName={data.downloads[0].buttonName}
          downloadRef={data.downloads[0].downloadLink}
        />
        <ArquivoParaDownload
          title={data.downloads[1].title}
          icon={FileEdit}
          buttonName={data.downloads[1].buttonName}
          downloadRef={data.downloads[1].downloadLink}
        />
      </section>
    </div>
  );
}
