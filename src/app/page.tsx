import Link from 'next/link'

export default function Home() {
  return (
    <div className="font-sans w-4xl mx-auto">
      <header className="flex h-16 justify-center items-center border-b border-gray-200 px-4">
        <h1 className="text-lg font-semibold mr-10 cursor-pointer" style={{ fontFamily: 'Stardom-Regular' }}>
          <Link href="/">HolyFata</Link>
        </h1>
        <ul className="flex-1 grid grid-cols-6 justify-items-center">
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">Blog</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">Work</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">Video</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">Probe</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">About</Link>
          </li>
          <li className="cursor-pointer">
            <Link href="/" className="hover:underline">Contact</Link>
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
      <main>
        <p>Hi! I&apos;m a Junior Frontend Developer from China, and I’m currently building frontend solutions as part of the team at JD.COM.</p> 
      </main>
    </div>
  );
}
