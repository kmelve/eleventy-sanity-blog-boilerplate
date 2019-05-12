const groq = require('groq')
const client = require('./sanityClient.js')
const BlocksToMarkdown = require('@sanity/block-content-to-markdown')
const serializers = require('./serializers')

function generateAuthor (author) {
  return {
    ...author,
    bio: BlocksToMarkdown(author.bio, { serializers, ...client.config() })
  }
}

async function getAuthors () {
  const filter = groq`*[_type == "author"]`
  const docs = await client.fetch(filter).catch(err => console.error(err))
  const authors = docs.map(generateAuthor)
  return authors
}

module.exports = getAuthors
