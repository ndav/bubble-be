// Fail tests on any warning
const { error } = console
console.error = function wrappedError(...args) {
  error.apply(console, args)
  throw new Error('Tests produced errors, see console log')
}
