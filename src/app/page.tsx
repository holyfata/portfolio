import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="font-sans w-4xl mx-auto flex flex-col text-xl">
      <header className="flex h-16 justify-center items-center border-b border-gray-200 px-4 shrink-0">
        <h1
          className="text-2xl font-semibold mr-10 cursor-pointer"
          style={{ fontFamily: "Stardom-Regular" }}
        >
          <Link href="/">HolyFata</Link>
        </h1>
        <ul className="flex-1 grid grid-cols-6 justify-items-center">
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">
              Blog
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">
              Work
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">
              Video
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">
              Probe
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">
              About
            </Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">
              Contact
            </Link>
          </li>
        </ul>
        {/* <ul className="flex gap-2 ml-8">
          <li>
            <Image
              aria-hidden
              src="/icons/github.svg"
              alt="WeChat icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              aria-hidden
              src="/icons/lark.svg"
              alt="WeChat icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              aria-hidden
              src="/icons/twitter.svg"
              alt="WeChat icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              aria-hidden
              src="/icons/tiktok.svg"
              alt="WeChat icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              aria-hidden
              src="/icons/qq.svg"
              alt="WeChat icon"
              width={20}
              height={20}
            />
          </li>
          <li>
            <Image
              aria-hidden
              src="/icons/wechat.svg"
              alt="WeChat icon"
              width={20}
              height={20}
            />
          </li>
        </ul> */}
      </header>
      <main className="flex flex-col pt-10 flex-1 px-4">
        <section className="flex flex-row">
          <section
            className="pr-4 leading-8 text-gray-500 flex-1 break-words"
            style={{ fontFamily: "Chubbo-Regular" }}
          >
            <p style={{ fontFamily: "Comico-Regular" }}>
              Hey! I&apos;m HolyFata
            </p>{" "}
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
              I love coding and enjoy the feeling of creation. What&apos;s more,
              I embrace open source. Apart from work, I spend my office hours
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
      </main>
      <footer className="flex h-16 justify-center items-center border-t border-gray-200 px-4">
        <p className="text-sm text-gray-500">
          Made with ❤️ using Next.js and Tailwind CSS.
        </p>
      </footer>
    </div>
  );
}
