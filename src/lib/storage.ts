/**
 * @todo is there a better way to handle local storage errors?
 */
const storage = {
  get(key: string) {
    const value = localStorage.getItem(key)
    try {
      return value ? JSON.parse(value) : null
    } catch (e) {
      localStorage.removeItem(key)
      return null
    }
  },

  set(key: string, value: any) {
    try {
      localStorage.setItem(key, JSON.stringify(value))
    } catch (_) {}
  },

  remove(key: string) {
    try {
      localStorage.removeItem(key)
    } catch (_) {}
  },

  keys: {},
}

export { storage }
