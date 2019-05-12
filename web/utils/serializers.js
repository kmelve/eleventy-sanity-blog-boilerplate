module.exports = {
  types: {
    authorReference: (props) => `[${props.node.name}](/authors/${props.node.slug.current})`, // JSON.stringify(props, null, 2)
    code: props =>
      '```' + props.node.language + '\n' + props.node.code + '\n```'
  }
}
