import yargs from 'yargs'

const args = yargs
  .command('* <Text>', 'intersperse text with emoji', yargs => {
    yargs.positional('Text', {
      describe: 'Text that will be interspersed with emoji',
      type: 'string',
    })
  })
  /*.option('s', {
    alias: 'seperator',
    default: ' ',
    describe: 'token that will be replaced by emoji',
    type: 'string',
  })*/
  .option('e', {
    alias: 'emoji',
    default: '👏',
    describe: 'Emoji to be inserted',
    type: 'string',
  }).argv

export const parse = () => {
  const tokens = args.text.split(args.seperator || ' ')

  return tokens.reduce((text, token, index) => {
    if (!index) {
      return `${args.emoji} ${token} ${args.emoji}`
    } else {
      return `${text} ${token} ${args.emoji}`
    }
  }, '')
}

console.log(parse())
