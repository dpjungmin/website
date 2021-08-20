import React from "react"

import { IconAppStore } from "./appstore"
import { IconBookmark } from "./bookmark"
import { IconExternal } from "./external"
import { IconFolder } from "./folder"
import { IconFork } from "./fork"
import { IconGitHub } from "./github"
import { IconInstagram } from "./instagram"
import { IconLinkedIn } from "./linkedin"
import { IconLoader } from "./loader"
import { IconPlayStore } from "./playstore"
import { IconStar } from "./star"
import { IconTwitter } from "./twitter"

import { Logo } from "./logo"
import { JellyPpi } from "./jellyppi"
import { JellyPpi2 } from "./jellyppi2"
import { JellyPpi3 } from "./jellyppi3"

import { MdCopyright, MdRssFeed } from "react-icons/md"
import { IoRocketOutline } from "react-icons/io5"
import { FiDownload } from "react-icons/fi"
import { GiPlainCircle } from "react-icons/gi"

interface IconProps {
  name: string
  style?: any
}

const Icon: React.FC<IconProps> = ({ name, style = {} }) => {
  const icons = {
    appstore: <IconAppStore />,
    bookmark: <IconBookmark />,
    external: <IconExternal />,
    folder: <IconFolder />,
    fork: <IconFork />,
    github: <IconGitHub />,
    instagram: <IconInstagram />,
    linkedin: <IconLinkedIn />,
    loader: <IconLoader />,
    playstore: <IconPlayStore />,
    star: <IconStar />,
    twitter: <IconTwitter />,
    logo: <Logo />,
    jellyppi: <JellyPpi />,
    jellyppi2: <JellyPpi2 />,
    jellyppi3: <JellyPpi3 />,
    copyright: <MdCopyright />,
    rocket: <IoRocketOutline />,
    download: <FiDownload />,
    circle: <GiPlainCircle style={style} />,
    rss: <MdRssFeed />,
  }

  return icons[name.toLowerCase()] ?? new Error(`Invalid icon name: ${name}`)
}

export { Icon }
