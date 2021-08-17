import * as React from "react"
import { Icon } from "@components/icons"
import { socialMedia } from "@config"
import * as $ from "./footer.styles"

const Footer: React.FC = () => {
  return (
    <$.Footer>
      <$.SocialLinks>
        <ul>
          {socialMedia &&
            socialMedia.map(({ name, url }, idx: number) => (
              <li key={idx}>
                <a href={url} aria-label={name}>
                  <Icon name={name} />
                </a>
              </li>
            ))}
        </ul>
      </$.SocialLinks>

      <$.Credit tabIndex={-1}>
        <Icon name="copyright" /> {new Date().getFullYear()} David Park
      </$.Credit>
      <$.Rss>
        Subscribe to blog{" "}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.feedspot.com/infiniterss.php?q=site:https://dpjungmin.gatsbyjs.io/rss.xml"
        >
          via RSS
        </a>
      </$.Rss>
    </$.Footer>
  )
}

export { Footer }
