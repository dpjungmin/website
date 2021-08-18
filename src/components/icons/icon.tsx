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

import { MdCopyright, MdRssFeed } from "react-icons/md"
import { IoRocketOutline } from "react-icons/io5"
import { FiDownload } from "react-icons/fi"
import { GiPlainCircle } from "react-icons/gi"

interface IconProps {
  name: string
  style?: any
}

const Icon: React.FC<IconProps> = ({ name, style = {} }) => {
  switch (name.toLowerCase()) {
    case "appstore":
      return <IconAppStore />
    case "bookmark":
      return <IconBookmark />
    case "external":
      return <IconExternal />
    case "folder":
      return <IconFolder />
    case "fork":
      return <IconFork />
    case "github":
      return <IconGitHub />
    case "instagram":
      return <IconInstagram />
    case "linkedin":
      return <IconLinkedIn />
    case "loader":
      return <IconLoader />
    case "playstore":
      return <IconPlayStore />
    case "star":
      return <IconStar />
    case "twitter":
      return <IconTwitter />
    case "copyright":
      return <MdCopyright />
    case "rocket":
      return <IoRocketOutline />
    case "download":
      return <FiDownload />
    case "circle":
      return <GiPlainCircle style={style} />
    case "rss":
      return <MdRssFeed />
    default:
      throw new Error(`Invalid icon name: ${name}`)
  }
}

export { Icon }
