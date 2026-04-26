import parse, {
  attributesToProps,
  domToReact,
  type DOMNode,
  type HTMLReactParserOptions,
} from 'html-react-parser'
import DOMPurify from 'isomorphic-dompurify'

const parserOptions: HTMLReactParserOptions = {
  replace(node) {
    if (node.type !== 'tag' || node.name !== 'a') {
      return
    }

    const props = attributesToProps(node.attribs)
    const isExternal = props.target === '_blank'
    const rel = isExternal
      ? 'noopener noreferrer'
      : typeof props.rel === 'string'
        ? props.rel
        : undefined

    return (
      <a {...props} rel={rel}>
        {domToReact(node.children as DOMNode[], parserOptions)}
      </a>
    )
  },
}

export function renderSanitizedHtml(html: string) {
  return parse(DOMPurify.sanitize(html), parserOptions)
}
