module.exports = {

  /**
   * 最大长度80个字符
   */
  printWidth: 80,

  /**
   * 使用2个空格缩进
   */
  tabWidth: 2,

  /**
   * 使用tab缩进还是空格，默认false
   */
  useTabs: false,

  /**
   * 行末分号, 默认true
   */
  semi: false,

  /**
   * 使用单引号, 默认false(在jsx中配置无效, 默认都是双引号)
   */
  singleQuote: true,

  /**
   * 对象的key，仅在必要时使用引号
   */
  quoteProps: "as-needed",

  /**
   * JSX双引号
   * jsxSingleQuote: false,
   * 尽可能使用尾随逗号（包括函数参数）,默认 none,可选 none|es5|all
   * es5 包括es5中的数组、对象
   * all 包括函数对象等所有可选
   */
  trailingComma: 'none',

  /**
   * 在对象文字中打印括号之间的空格。 默认true
   */
  bracketSpacing: true,

  /**
   * 箭头函数参数括号 默认avoid 可选 avoid| always
   * avoid 能省略括号的时候就省略 例如x => x
   * always 总是有括号
   */
  arrowParens: 'always',

  /**
   * 每个文件格式化的范围是文件的全部内容
   */
  rangeStart: 0,
  rangeEnd: Infinity,

  /**
   * 不需要写文件开头的@prettier
   */
  requirePragma: false,

  /**
   * 在文件顶部插入一个特殊的 @format 标记，指定文件格式需要被格式化。
   */
  insertPragma: false,

  /**
   * 使用默认的换行标准
   */
  proseWrap: "always",

  /**
   * 行尾换行格式
   * auto | lf |
   */
  endOfLine: 'lf',

  /**
   * html空格敏感度
   * 根据显示样式，决定html要不要换行
   */
  htmlWhitespaceSensitivity: 'ignore',

  /**
   * vue缩进脚本和样式
   * > 标签放在最后一行的末尾，而不是单独放在下一行 默认false
   * jsxBracketSameLine: true,
   */
  vueIndentScriptAndStyle: false
}