import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://avatars.githubusercontent.com/u/206218794?v=4"),
      new URL(
        "https://img11.360buyimg.com/img/jfs/t1/275721/2/1900/17609/67d15ec5Fbfdce671/4f23c5ca45c211c7.png",
      ),
      new URL(
        "https://img20.360buyimg.com/ling/jfs/t1/20876/36/12835/3043/5c9c2929Ed18cfb11/15b1c03ec830ab8e.png"
      ),
      new URL(
        "https://assets.rspack.rs/rslint/rslint-logo.svg"
      )
    ],
  },
};

export default nextConfig;
