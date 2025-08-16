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
      ),
      new URL(
        "https://camo.githubusercontent.com/7636b7eaaed54ab1258cb4d70148b1b591d257c20df51d5fc73c282c147eaffc/68747470733a2f2f736b696c6c69636f6e732e6465762f69636f6e733f7065726c696e653d313526693d7673636f64652c68746d6c2c6373732c74732c7675652c72656163742c766974652c62756e2c646f636b65722c656c656374726f6e2c65787072657373"
      ),
      new URL(
        "https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white"
      ),
      {
        protocol: "https",
        hostname: "img.icons8.com"
      }
    ],
  },
};

export default nextConfig;
