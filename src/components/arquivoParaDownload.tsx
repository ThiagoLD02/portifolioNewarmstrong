import { LucideIcon } from "lucide-react";
import { Button } from "./ui/button";

interface FilesToDownloadProps {
  icon: LucideIcon;
  title: string;
  buttonName: string;
  downloadRef?: string;
}

export function ArquivoParaDownload(props: FilesToDownloadProps) {
  const { icon: Icon, title, buttonName, downloadRef } = props;
  return (
    <div className="flex flex-col xl:flex-row-reverse justify-center items-center">
      <div className="bg-azulEscuro w-96 xl:w-60 h-72 flex justify-center items-center">
        <Icon color="white" size={128} />
      </div>

      <div className="bg-slate-200 w-96 xl:w-80 h-36 xl:h-72 flex flex-col justify-between">
        <h4 className="pt-5 pl-3 text-lg ">{title}</h4>
        <a
          href={downloadRef}
          download={"Lulu"}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            variant={"outline"}
            className="text-slate-500 w-20 text-center mb-5 ml-3"
          >
            {buttonName}
          </Button>
        </a>
      </div>
    </div>
  );
}
