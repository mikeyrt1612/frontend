import 'jest-enzyme'
import { JSDOM } from 'jsdom'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

const jsdom = new JSDOM('<!doctype html><html><body></body></html>')
const { window } = jsdom

const copyProps = (src: any, target: any) => {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce(
      (result, prop) => ({
        ...result,
        [prop]: Object.getOwnPropertyDescriptor(src, prop),
      }),
      {},
    )
  Object.defineProperties(target, props)
}

const g: any = global
g.window = window
g.document = window.document
g.navigator = {
  userAgent: 'node.js',
}
g.requestAnimationFrame = function (callback: any) {
  return setTimeout(callback, 0)
}
g.cancelAnimationFrame = function (id: any) {
  clearTimeout(id)
}
copyProps(window, g)

configure({ adapter: new Adapter() })
