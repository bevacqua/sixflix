var detection = 'class ಠ extends Array{constructor(j=`a`,...c){const q=(({u: e})=>{return {[`${c}`]:Symbol(j)};})({});super(j,q,...c)}}new Promise(f=>{const a=function*(){return "\u{20BB7}".match(/./u)[0].length===2||!0};for (let z of a()){const [x,y,w,k]=[new Set(),new WeakSet(),new Map(), new WeakMap()];break}f(new Proxy({},{get:(h,i) =>i in h ?h[i]:"j".repeat(0o2)}))}).then(t => new ಠ(t.d))'

var result

module.exports = function () {
  if (result === void 0) {
    try {
      eval(detection)
      result = true
    } catch (e) {
      result = false
    }
  }
  return result instanceof Error
}
