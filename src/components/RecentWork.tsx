import Image from "next/image";
import Link from "next/link";
import WorkJSONData from "@/store/work.json";

const RencentWork = () => {
  const work = WorkJSONData;
  return (
    <ul className="grid grid-cols-2 gap-2">
      {work.map((item, index) => {
        const { logoUrl, name, jumpLink, description } = item;
        return (
          <li
            key={index}
            className="flex items-center border border-gray-200 rounded-lg py-4 px-6 cursor-pointer hover:border-gray-400 transition-colors duration-200"
          >
            <Link
              href={jumpLink}
              target="_blank"
              className="flex items-center w-full"
            >
              <Image src={logoUrl} width={120} height={60} alt={name} />
              <p className="text-gray-400 flex-1 text-base ml-4 flex flex-row-reverse break-all">
                {description}
              </p>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default RencentWork;
