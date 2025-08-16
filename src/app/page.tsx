import Image from "next/image";
import Skills from "@/components/Skills";
import HomeSection from "@/components/HomeSection";
import RencentWork from "@/components/RecentWork";
import IconNJUPT from "@/components/IconNJUPT";
import IconJD from "@/components/IconJD";
import IconOpenSource from "@/components/IconOpenSource";
import IconGitHub from "@/components/IconGitHub";

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
            <IconNJUPT /> &nbsp; with a major in Biomedical Engineering, and
            entered &nbsp;
            <IconJD />
            &nbsp; through the 2024 campus recruitment to engage in front-end
            development work.
          </p>{" "}
          <br />
          <p className="leading-10">
            I love coding and enjoy the feeling of creation. What&apos;s more, I
            embrace &nbsp;
            <IconOpenSource />
            . Apart from work, I spend my office hours slacking off and browsing
            &nbsp;
            <IconGitHub /> &nbsp; every day.
          </p>
        </section>
        <section className="flex flex-col shrink-0 w-[240]">
          <div className="w-[240] h-[240] relative">
            <Image
              aria-hidden
              src="https://avatars.githubusercontent.com/u/206218794?v=4"
              alt="Github Avatar"
              width={240}
              height={240}
              className="rounded-full"
            />
            <div
              className="absolute w-[45] h-[45] rounded-full overflow-hidden"
              style={{ bottom: 0, right: 0 }}
            >
              <Image
                src="/images/chrome.gif"
                width={45}
                height={45}
                alt="Chrome Icon"
              />
            </div>
          </div>
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
