/**
 * 格式化打印变量
 * @param {String} info 自定义输出的变量标识
 * @param {*} value 打印的变量
 */
module.exports = function Log(info, ...values) {
  console.log(`=====${info}=====`, ...values)
}