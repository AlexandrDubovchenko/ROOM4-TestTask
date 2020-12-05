export function debounce(callback: Function, wait: number, immediate = false) {
  let timeout: NodeJS.Timeout | null = null
  return function (...args: any[]) {
    const callNow = immediate && !timeout

    const next = function () {
      callback.apply(undefined, args)
    }
    if (timeout) {
      clearTimeout(timeout)
    }
    timeout = setTimeout(next, wait)

    if (callNow) {
      next()
    }
  }
}
