/*
    In this file, we'll be continuing our story
    with Jon being allowed to flee his fight with Jamie.
*/

let backpack = [];

backpack.push('Lightsaber', 'Food', 'Robe');

// console.log(backpack)

let belt = backpack.shift();

backpack.splice(1, 0, 'Coat')

let smellyBag = []
smellyBag.unshift(`Flint`, `Blanket`, `Toothbrush`)

backpack.push(smellyBag.slice(0, 3))

// console.log(backpack)
// console.log(belt)
// console.log(smellyBag)

// for (let i = 0; i < smellyBag.length; i++) {
//     console.log(smellyBag[i]);
// }

// for (let i = 0; i < 3; i++) {
//     console.log(backpack[i]);
// }

for (let i = 'string'; i < 'string111'; i++) {
    console.log(i)
    
}