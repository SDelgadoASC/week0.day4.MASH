function mash() {
  return 'house'

  // const result = mash()

  // console.log(result);
}
console.log(mash());

function getHome() {
  const x = Math.random()

  const array = ["Mansion", "Apartment", "Shack", "House"]
  const mention = array[Math.floor(Math.random() * 4)]
  return mention
}
console.log(getHome())