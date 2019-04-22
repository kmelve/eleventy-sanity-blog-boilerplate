const sanityClient = require("@sanity/client");

/**
 * May break in certain build tools
 * if ../studio is not accessible
 */
const { api } = require('../../studio/sanity.json')

/**
 * Set manually. Find configuration in
 * studio/sanity.json or on manage.sanity.io
 */

/*
const config = {
  projectId: 'anokeucs',
  dataset: 'eleventy',
  useCdn: true
}
*/

module.exports = sanityClient({...api, useCdn: true});
