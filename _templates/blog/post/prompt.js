
// see types of prompts:
// https://github.com/enquirer/enquirer/tree/master/examples
//
const dayjs = require('dayjs')

module.exports = [
  {
    type: 'input',
    name: 'date',
    message: 'what is date?',
    default: dayjs().format('YYYY-MM-DD'),
  },
  {
    type: 'input',
    name: 'title',
    message: 'what is title?',
  },
  {
    type: 'input',
    name: 'tags',
    message: 'what is tag?',
  },
  { 
    type: 'confirm' ,
    message: 'are you ok？',
  },
]
