import { Linkedin, Mail } from "lucide-react";

export interface cardProps {
  id: string;
  picture: string;
  name: string;
  positon: string;
  linkedin: string;
  email: string;
}

export function Card(props: cardProps) {
  return (
    <div className="flex flex-col justify-center text-center gap-2">
      <img
        src={props.picture}
        alt="Foto do membro"
        className="w-auto h-auto max-w-sm aspect-square"
      />
      <h2 className="font-bold text-2xl">{props.name}</h2>
      <h3 className="font-bold text-lg">{props.positon}</h3>
      <div className="flex justify-center gap-4">
        <a href={props.linkedin}>
          <Linkedin className="border-2 border-azulClaro text-azulClaro w-11 h-11 p-2 rounded-xl" />
        </a>
        <a href={props.email}>
          <Mail className="border-2 border-azulClaro text-azulClaro w-11 h-11 p-2 rounded-xl" />
        </a>
      </div>
    </div>
  );
}
