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
          <p style={{ fontFamily: "Comico-Regular" }}>Hey! I&apos;m HolyFata</p>{" "}
          <br />
          <p className="leading-10">
            Graduated from NJUPT with a major in Biomedical Engineering, and
            entered &nbsp;
            <a
              className="cursor-pointer hover:underline text-[#CC0000]"
              href="https://www.jd.com"
            >
              JD.COM
            </a>
            &nbsp; through the 2024 campus recruitment to engage in front-end
            development work.
          </p>{" "}
          <br />
          <p className="leading-10">
            I love coding and enjoy the feeling of creation. What&apos;s more, I
            embrace open source. Apart from work, I spend my office hours
            slacking off and browsing GitHub every day.
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

      <HomeSection title="Recently Working on:">
        <RencentWork />
      </HomeSection>

      <HomeSection title="Skills:">
        <Skills />
      </HomeSection>
    </section>
  );
}
