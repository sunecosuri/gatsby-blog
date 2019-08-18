module.exports = {
  templates: `${__dirname}/_templates`,
  helpers: {
    split: tags => `${tags.split(',').map(tags => tags.trim())}`
  }
}