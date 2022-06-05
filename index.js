const express = require('express')
const app = express()
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const getgemStoneCount = require("./germstone")

rl.question('Please Enter any Integer number: ', function (number) {
  number = parseInt(number)
  if(isNaN(number) || number > 100 || number<=0 ){
    console.log("Please enter valid number betwen 1 to 100.");
    process.exit(0);
  }
  let arr=[]
  let regex = /^[a-z]+$/;

  var getInputString = async function () {
    rl.question(`String ${arr.length+1}: `, async function (str) {
        if(regex.test(str)){
          arr.push(str)
      }else{
        console.log("Please enter valid string with lower-case Latin letters ('a'-'z').");
        process.exit(0);
      }     
      if (arr.length === number) {
        let count = await getgemStoneCount(arr)
        console.log("No of Gemstones: ", count);
        return rl.close();
      }
      getInputString(); //Calling this function again to ask new string
    });
  };

  console.log(`Please Enter ${number} mineral composition : `);
  getInputString();
});

rl.on('close', function () {
  process.exit(0);
});

app.listen(4000)