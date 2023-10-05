import { Card, cardProps } from "./card";

interface membersAreaProps {
  title: string;
  style: string;
  data: cardProps[];
}
export function AreaDosMembros({ title, style, data }: membersAreaProps) {
  return (
    <div className={"flex flex-col gap-16 p-10 " + style}>
      <h1 className="text-4xl font-bold text-center mt-2"> {title}</h1>
      <div className="flex flex-wrap justify-center gap-16">
        {data.map((card) => (
          <Card
            id={card.id}
            name={card.name}
            email={card.email}
            linkedin={card.linkedin}
            picture={card.picture}
            positon={card.positon}
            key={card.id}
          />
        ))}
      </div>
    </div>
  );
}
