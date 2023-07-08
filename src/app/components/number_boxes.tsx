import Image from "next/image";

type NumberBoxesProps = {
  title: string;
  imagaUrl: string;
  description: string;
};
const NumberBoxes = (props: NumberBoxesProps) => {
  return (
    <div className=" shadow-lg p-4">
      <div className="bg-fixed bg-cover h-8">
        <Image src={`${props.imagaUrl}`} alt="number" width={65} height={96} />
        <h2 className=" font-semibold text-2xl lg:text-xl mb-4 -mt-8 leading-[.45rem]">
          {props.title}
        </h2>
        <hr className="h-1 border-gold w-16 border-b-4" />
      </div>
      <p className="mt-8 text-sm">{props.description}</p>
    </div>
  );
};

export default NumberBoxes;
