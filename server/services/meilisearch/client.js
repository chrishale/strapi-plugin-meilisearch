'use strict'
const { MeiliSearch: Meilisearch } = require('meilisearch')
const packageJson = require('../../../package.json')

/**
 * Create a Meilisearch client instance.
 *
 * @param  {object} config - Information to pass to the constructor.
 *
 * @returns { object } - Meilisearch client instance.
 */
module.exports = ({ globalIndex, ...config}) => {
  const client = new Meilisearch({
    ...config,
    clientAgents: [`Meilisearch Strapi (v${packageJson.version})`],
  })

  if (globalIndex) {
    console.log("*********** Meilisearch: CREATED GLOBAL INDEX", globalIndex)
    client.createIndex(globalIndex, { primaryKey: '_meilisearch_id'})
  }

  return client

}
