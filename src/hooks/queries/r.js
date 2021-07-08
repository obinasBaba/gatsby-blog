let one = [ 'one', 'two', 'three']
let t = ['f', 's', 'nine'];

one.some(e => {
  console.log('loop');
  return t.includes(e)
})