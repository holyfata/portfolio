import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL('https://avatars.githubusercontent.com/u/206218794?v=4'),
      new URL('https://img11.360buyimg.com/img/jfs/t1/275721/2/1900/17609/67d15ec5Fbfdce671/4f23c5ca45c211c7.png')
    ],
  },
};

export default nextConfig;
