const input = process.argv.slice(2)
let number = Number(input)
if (!input.length) {

} else if (input.length > 1) {
  for (let num of input) {
    num = Number(num)
    num = num * 1000
    if (num > 0) {
      setTimeout(() => {
        process.stdout.write('*')
      }, num)
    }
  }
} else {
  num = Number(input)
  num = num * 1000
  if (num > 0) {
    setTimeout(() => {
      process.stdout.write('*')
    }, num)
  }
}
