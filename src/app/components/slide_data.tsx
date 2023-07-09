import Image from "next/image";

export type SlideData = {
  name: string;
  description: string;
  imgUrl: string;
};

const SlideData = (props: SlideData) => {
  return (
    <div className=" md:flex gap-5 lg:gap-20">
      <div className="top">
        <h2 className=" font-semibold text-3xl">{props.name}</h2>
        <p className=" my-10">&quot;{props.description}&quot;</p>
        <button className="bg-maroon text-white py-3 px-6 my-4 rounded-full font-medium">
          Organograma
        </button>
      </div>
      <Image
        alt="Luisa Matumona"
        src={props.imgUrl}
        width={400}
        height={496}
        className="mt-10 md:w-72"
      />
    </div>
  );
};

export default SlideData;
