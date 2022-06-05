
module.exports = async function getNumberOfGemstones(arr = [])
{  
    let length = arr.length;
    // For sigle string there is no intersection so returning zero
    if (length < 2) {
      return 0
    }

    // Get the intersection between first two string
    let firstArr = arr[0].split("");
    let secondArr = arr[1].split("");
    let incersectedArr = secondArr.filter(function(n) {
      return firstArr.indexOf(n) !== -1;
    });
    
    // Verify string intersection
    for (let index = 2; index < length; index++) {
      let currentArr = arr[index].split("");
      incersectedArr = currentArr.filter(function(n) {
        return incersectedArr.indexOf(n) !== -1;
      });    
    }

    return incersectedArr.length
}
 

  