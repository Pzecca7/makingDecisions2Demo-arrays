let backpack = []

backpack.push('snacks')
backpack.push('sunblock')
backpack.push('water')
backpack.push('sunglasses' , 'hat')

// console.log(backpack)

backpack.splice(1,1)

// console.log(backpack)

backpack.unshift('shiny rock')

// console.log(backpack)

let fannyPack = backpack.splice(0,3)

// console.log(backpack)
// console.log(fannyPack)

// console.log(fannyPack[0])

for(let x = 0; x < backpack.length; x++){
    // console.log(backpack[x])
}

for(let x = 0; x < fannyPack.length; x++){
    // console.log(fannyPack[x])
}

for(let x = 0; x < fannyPack.length;){
   let item = fannyPack.shift()
   console.log(fannyPack)
   backpack.push(item)
}

// console.log(backpack)
// console.log(fannyPack)

let arr = []

arr.unshift('arg1', 'arg2', 'etc') // attatches items to the front of an array and takes any number of arguments 
arr.push('arg1', 'arg2', 'etc') // attatches items to the end of an array and takes any number of arguments
shift() // removes the first item form an array and takes no arguments
Pop() // removes the last item from an array and takes no arguments

arr.slice(0,2) // creates a copy of a part of an array, takes a starting index and an ending index, ending index not included in copy. if left empty will copy entire array
            // does not change orginal data
arr.splice(1,1,'new value') // removes/inserts values into an array, takes up to three arguments. a starting index, the number of items removed, and any new values to be inserted.

