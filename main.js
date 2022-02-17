const buyChocolate = () => {
  const candyObject = {
    type: "milk chocolate"
  }
  return candyObject
}

const addFlavoring = (candyObject) => {
  candyObject.flavor = "mint"
  return candyObject
} 

const makeBarkMixture = (candyObject) => {
  if (candyObject.flavor === "mint") {
    candyObject.mixed = true
    return candyObject
  }
  else {
    candyObject.mixed = false
    return candyObject
  }
}

const bakeCandy = (candyObject) => {
  if (candyObject.mixed === true) {
    candyObject.baked = true
    return candyObject
  }
  else {
    candyObject.baked = false
    return candyObject
  }
}

const breakBark = (candyObject) => {
  if (candyObject.baked === true) {
    return [
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",
      "Mint Chocolate Bark Piece",]
  }
  else if (candyObject.baked === false) {
    return []
  }
}

const chocolateBar = buyChocolate()
const chocolateMint = addFlavoring(chocolateBar)
const chocolateMix = makeBarkMixture(chocolateMint)
const bakedMix = bakeCandy(chocolateMix)
const candyTime = breakBark(bakedMix)
console.log (candyTime)

// const chocolateBar = buyChocolate()
// addFlavoring(chocolateBar)
// makeBarkMixture(chocolateBar)
// bakeCandy(chocolateBar)
// breakBark(chocolateBar)
// console.log(chocolateBar)