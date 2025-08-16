"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

const RencentWork = () => {
  const [work, setWork] = useState<
    Array<{
      title: string;
      description: string;
      logoUrl: string;
    }>
  >([]);
  useEffect(() => {
    const fetchWork = async () => {
      try {
        const response = await fetch("/api/work");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setWork(data.data);
      } catch (error) {
        console.error("Failed to fetch work data:", error);
      }
    };
    fetchWork();
  }, []);

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
              alt={item.title}
            />
            <p className="text-gray-400 text-base ml-4">{item.description}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default RencentWork;
