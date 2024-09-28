import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Controller</span>,
  logoLink: "https://controller-docs.vercel.app/",
  project: {
    link: "https://github.com/giga-controller/controller",
  },
  chat: {
    link: "https://discord.gg/tK7xu3n22e",
  },
  docsRepositoryBase: "https://github.com/giga-controller/controller-docs",
  footer: {
    text: "Controller",
  },
  head: (
    <>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      {/* You can add additional sizes/formats if needed */}
      <link rel="icon" href="/icon.svg" type="image/svg+xml" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
    </>
  )
};

export default config;
