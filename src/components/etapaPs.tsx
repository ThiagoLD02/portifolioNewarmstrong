import { MoveDown } from "lucide-react";

interface EtapaPsProps {
  data: {
    title: string;
    number: string;
    description: string;
    hasArrowDown: boolean;
  };
}

export function EtapaPs({ data }: EtapaPsProps) {
  const { title, number, description, hasArrowDown } = data;
  return (
    <div className="flex gap-6">
      <div className="w-16 justify-start">
        <div className="bg-azulEscuro rounded-full w-16 h-16 text-white flex justify-center items-center">
          <p className="text-5xl">{number}</p>
        </div>
        <div className="flex justify-center items-center my-5">
          {hasArrowDown ? <MoveDown size={32} color="#002D62" /> : ""}
          {/* Cor azulEscuro */}
        </div>
      </div>

      <div className="flex flex-col justify-start items-start ">
        <h3 className="text-xl font-bold text-azulEscuro">{title}</h3>
        <p className="pt-2 text-lg">{description}</p>
      </div>
    </div>
  );
}
