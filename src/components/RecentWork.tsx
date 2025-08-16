import Image from "next/image";
import WorkJSONData from "@/store/work.json";

const RencentWork = () => {
  const work = WorkJSONData;
  return (
    <ul className="grid grid-cols-2 gap-2">
      {work.map((item, index) => {
        return (
          <li
            key={index}
            className="flex items-center border border-gray-200 rounded-lg py-4 px-6"
          >
            <Image
              src={item.logoUrl}
              width={120}
              height={120}
              alt={item.name}
            />
            <p className="text-gray-400 text-base ml-4">{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default RencentWork;
