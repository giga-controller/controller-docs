import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'
import Link from 'next/link'

const config: DocsThemeConfig = {
  logo: (
    <span>Controller</span>
  ),
  logoLink: 'https://controller-docs.vercel.app/',
  project: {
    link: 'https://github.com/giga-controller/controller',
  },
  chat: {
    link: 'https://discord.gg/apUKj5zS',
  },
  docsRepositoryBase: 'https://github.com/giga-controller/controller-docs',
  footer: {
    text: 'Controller',
  },
}

export default config
