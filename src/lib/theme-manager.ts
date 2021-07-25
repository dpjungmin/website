import { Theme } from '../styles'
import { storage } from './storage'

const themeManager = {
  init() {
    let theme = storage.get(storage.keys.theme)

    if (!theme) {
      theme = Theme.LIGHT
    }

    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)
  },

  // remove this function when there are more than 2 themes
  toggle() {
    const htmlElement = document.documentElement
    const currentTheme = htmlElement.getAttribute('data-theme')
    let nextTheme = currentTheme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    htmlElement.setAttribute('data-theme', nextTheme)
    storage.set(storage.keys.theme, nextTheme)
  },

  set(theme: Theme) {
    const htmlElement = document.documentElement
    htmlElement.setAttribute('data-theme', theme)
    storage.set(storage.keys.theme, theme)
  },
}

export { themeManager }
