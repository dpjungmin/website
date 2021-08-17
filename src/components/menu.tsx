import * as React from "react"
import { Helmet } from "react-helmet"
import { KEY_CODES } from "@lib"
import { useOnClickOutside } from "@lib/hooks"
import { navLinks } from "@config"
import * as $ from "./menu.styles"
import { Link } from "gatsby"

const Menu: React.FC = () => {
  const [menuOpen, setMenuOpen] = React.useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)

  const buttonRef = React.useRef(null)
  const navRef = React.useRef(null)

  let menuFocusables
  let firstFocusableEl
  let lastFocusableEl

  const setFocusables = () => {
    menuFocusables = [
      buttonRef.current,
      ...Array.from((navRef.current as any).querySelectorAll("a")),
    ]
    firstFocusableEl = menuFocusables[0]
    lastFocusableEl = menuFocusables[menuFocusables.length - 1]
  }

  const handleBackwardTab = (e) => {
    if (document.activeElement === firstFocusableEl) {
      e.preventDefault()
      lastFocusableEl.focus()
    }
  }

  const handleForwardTab = (e) => {
    if (document.activeElement === lastFocusableEl) {
      e.preventDefault()
      firstFocusableEl.focus()
    }
  }

  const onKeyDown = (e) => {
    switch (e.key) {
      case KEY_CODES.ESCAPE:
      case KEY_CODES.ESCAPE_IE11: {
        setMenuOpen(false)
        break
      }

      case KEY_CODES.TAB: {
        if (menuFocusables && menuFocusables.length === 1) {
          e.preventDefault()
          break
        }
        if (e.shiftKey) {
          handleBackwardTab(e)
        } else {
          handleForwardTab(e)
        }
        break
      }

      default: {
        break
      }
    }
  }

  const onResize = (e) => {
    if (e.currentTarget.innerWidth > 768) {
      setMenuOpen(false)
    }
  }

  React.useEffect(() => {
    document.addEventListener("keydown", onKeyDown)
    window.addEventListener("resize", onResize)

    setFocusables()

    return () => {
      document.removeEventListener("keydown", onKeyDown)
      window.removeEventListener("resize", onResize)
    }
  }, [])

  const wrapperRef = React.useRef(null)
  useOnClickOutside(wrapperRef, () => setMenuOpen(false))

  const HamburgerButton = (
    <$.HamburgerButton
      className="focus-outline"
      onClick={toggleMenu}
      menuOpen={menuOpen}
      ref={buttonRef}
      aria-label="Menu"
    >
      <div className="ham-box">
        <div className="ham-box-inner" />
      </div>
    </$.HamburgerButton>
  )

  const Sidebar = (
    <$.Sidebar
      menuOpen={menuOpen}
      aria-hidden={!menuOpen}
      tabIndex={menuOpen ? 1 : -1}
    >
      <nav ref={navRef}>
        {navLinks && (
          <ol>
            {navLinks.map(({ name, url }, idx: number) => (
              <li key={idx}>
                <Link to={url} onClick={() => setMenuOpen(false)}>
                  {name}
                </Link>
              </li>
            ))}
          </ol>
        )}
        <Link className="blog-button" to="/blog" aria-label="blog">
          Blog
        </Link>
      </nav>
    </$.Sidebar>
  )

  return (
    <$.Menu>
      <Helmet>
        <body className={menuOpen ? "blur" : ""} />
      </Helmet>
      <div ref={wrapperRef}>
        {HamburgerButton}
        {Sidebar}
      </div>
    </$.Menu>
  )
}

export { Menu }
