"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.parse = void 0;

var _yargs = _interopRequireDefault(require("yargs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var args = _yargs["default"].command('* <Text>', 'intersperse text with emoji', function (yargs) {
  yargs.positional('Text', {
    describe: 'Text that will be interspersed with emoji',
    type: 'string'
  });
}).option('s', {
  alias: 'seperator',
  "default": ' ',
  describe: 'token that will be replaced by emoji',
  type: 'string'
}).option('e', {
  alias: 'emoji',
  "default": '👏',
  describe: 'Emoji to be inserted',
  type: 'string'
}).argv;

var parse = function parse() {
  var tokens = args.text.split(args.seperator);
  return tokens.reduce(function (text, token, index) {
    if (!index) {
      return "".concat(args.emoji, " ").concat(token, " ").concat(args.emoji);
    } else {
      return "".concat(text, " ").concat(token, " ").concat(args.emoji);
    }
  }, '');
};

exports.parse = parse;
console.log(parse());