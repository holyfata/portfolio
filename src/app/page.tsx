import Image from "next/image";
import Skills from "@/components/Skills";
import HomeSection from "@/components/HomeSection";
import RencentWork from "@/components/RecentWork";

export default function Home() {
  return (
    <section className="flex flex-col">
      <section className="flex flex-row">
        <section
          className="pr-4 leading-8 text-gray-500 flex-1 break-words"
          style={{ fontFamily: "Chubbo-Regular" }}
        >
          <p style={{ fontFamily: "Comico-Regular" }}>
            Hey! I&apos;m HolyFata 😘
          </p>{" "}
          <br />
          <p className="leading-10">
            Graduated from &nbsp;
            <a
              className="cursor-pointer hover:underline text-[#007aff]"
              href="https://www.njupt.edu.cn/"
              target="_blank"
            >
              <span
                className="inline-block bg-cover size-[20] mr-1"
                style={{
                  backgroundImage: `url(https://www.njupt.edu.cn/_upload/tpl/0d/78/3448/template3448/image/favicon.ico)`,
                }}
              ></span>
              NJUPT
            </a>{" "}
            &nbsp; with a major in Biomedical Engineering, and entered &nbsp;
            <a
              className="cursor-pointer hover:underline text-[#CC0000]"
              href="https://www.jd.com"
              target="_blank"
            >
              <span
                className="inline-block bg-cover size-[20] mr-1"
                style={{
                  backgroundImage: `url(https://img11.360buyimg.com/img/jfs/t1/275721/2/1900/17609/67d15ec5Fbfdce671/4f23c5ca45c211c7.png)`,
                }}
              ></span>
              JD.COM
            </a>
            &nbsp; through the 2024 campus recruitment to engage in front-end
            development work.
          </p>{" "}
          <br />
          <p className="leading-10">
            I love coding and enjoy the feeling of creation. What&apos;s more, I
            embrace &nbsp;
            <a
              className="cursor-pointer hover:underline text-[#3Ea638]"
              href="https://opensource.org/"
              target="_blank"
            >
              <span
                className="inline-block bg-cover size-[20] mr-1"
                style={{
                  backgroundImage: `url(https://th.bing.com/th/id/ODF.89jlCB_iVlzKm_08deitXA?w=32&h=32&qlt=93&pcl=fffffa&o=6&pid=1.2)`,
                }}
              ></span>
              Open Source
            </a>
            . Apart from work, I spend my office hours slacking off and browsing
            &nbsp;
            <a
              className="cursor-pointer hover:underline text-[#1f2328]"
              href="https://github.com/"
              target="_blank"
            >
              <span
                className="inline-block bg-cover size-[20] mr-1"
                style={{
                  backgroundImage: `url(https://img.icons8.com/?size=100&id=HW77LO6vM3AB&format=png&color=000000)`,
                }}
              ></span>
              GitHub
            </a>{" "}
            &nbsp; every day.
          </p>
        </section>
        <section className="flex flex-col shrink-0 w-[240]">
          <Image
            aria-hidden
            src="https://avatars.githubusercontent.com/u/206218794?v=4"
            alt="Github Avatar"
            width={240}
            height={240}
            className="rounded-full"
          />
          <ul
            className="flex flex-row gap-2 mt-4"
            style={{ fontFamily: "Telma-Light" }}
          >
            <li className="flex">
              <span className="text-base">
                Set out first, and make up for whatever is missing along the
                way.
              </span>
            </li>
          </ul>
        </section>
      </section>

      <HomeSection title="Recently Work:">
        <RencentWork />
      </HomeSection>

      <HomeSection title="Skills Depend:">
        <Skills />
      </HomeSection>
    </section>
  );
}
