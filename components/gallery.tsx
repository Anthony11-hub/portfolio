import Image from "next/image";
import { Pointer } from "./ui/pointer";

export default function Gallery({ image }: { image: string }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative w-full h-[350px] md:h-[400px] overflow-hidden rounded-xl border">
        <Image
          src={image}
          alt="programmer"
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/*<button className="opacity-0 group-hover:opacity-100 transition-all duration-300 bg-accent rounded-full p-2 absolute top-4 right-4">
          <ExpandIcon />
        </button>*/}
        <Pointer className="fill-blue-500" />
      </div>
    </div>
  );
}
