import * as React from "react"
import { Link } from "gatsby"
import { Icon } from "@components/icons"
import { useScrollDirection } from "@lib/hooks"
import { Menu } from "./menu"
import { navLinks } from "@config"
import * as $ from "./nav.styles"

interface NavProps {
  isHome: boolean
}

const Nav: React.FC<NavProps> = ({ isHome }) => {
  const scrollDirection = useScrollDirection()
  const [scrolledToTop, setScrolledToTop] = React.useState(true)

  const handleScroll = () => {
    setScrolledToTop(window.pageYOffset < 50)
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const Logo = (
    <div className="logo" tabIndex={-1}>
      {isHome ? (
        <a href="/" aria-label="home">
          <Icon name="logo" />
        </a>
      ) : (
        <Link to="/" aria-label="home">
          <Icon name="logo" />
        </Link>
      )}
    </div>
  )

  const NavLinks = (
    <$.Links>
      <ol>
        {navLinks &&
          navLinks.map(({ name, url }, idx: number) => (
            <li key={idx}>
              <Link className="focus-outline" to={url}>
                {name}
              </Link>
            </li>
          ))}
      </ol>
      <Link className="blog-button" to="/blog/" aria-label="blog">
        Blog
      </Link>
    </$.Links>
  )

  return (
    <$.Header
      scrollDirection={scrollDirection}
      scrolledToTop={scrolledToTop}
      isHome={isHome}
    >
      <$.Nav>
        {Logo}
        {isHome ? (
          <>
            {NavLinks}
            <Menu />
          </>
        ) : null}
      </$.Nav>
    </$.Header>
  )
}

export { Nav }
