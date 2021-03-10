module.exports = function check(str, bracketsConfig) {
  const brackets = bracketsConfig.reduce(
    (stack, config) => {
      stack.push(config.join(""))
      return stack;
    }, []);

  let stack = "";
  for (const char of str) {
    const lastCharInStack = stack[stack.length-1];
    const twoChars = lastCharInStack + char;
    if (brackets.includes(twoChars))
      stack = stack.slice(0, -1);
    else
      stack = stack + char;
  }
  return !stack;
}
