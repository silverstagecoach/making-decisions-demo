/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let obiWanAttack = 20, obiWanHealth = 100, obiWanDefense = 0, anakinAttack = 30, anakinHealth = 100,
anakinDefense = 15;

if (anakinAttack > obiWanAttack) {
    console.log("Anakin has a better attack than Obi-Wan. Darth Vader will win")
} else if (obiWanAttack > anakinAttack) {
    console.log("Obi-Wan has a better attack than Anakin. Jedi prevail, but Darth Vader does not perish.")
} else {
    console.log("There is no clear victor. Please try again. \n DO OR DO NOT, THERE IS NO TRY!")
};

if (obiWanHealth > anakinAttack) {
    obiWanHealth -= anakinAttack;
    console.log(`Obi-Wan has taken damage, and now has ${obiWanHealth} health left.`);
} else {
    console.log(`Obi-Wan was slain.`)
}

obiWanDefense += 25;

for (let i = 0; i < 5; i++) {
    obiWanHealth += (obiWanDefense - anakinAttack);
    if (i === 0) {
        console.log(`Obi-Wan is under assault! Anakin gets in ${i + 1} hit! \n He now has ${obiWanHealth} health left!`)
    } else {
        console.log(`Obi-Wan is under assault! Anakin gets in ${i + 1} hits! \n He now has ${obiWanHealth} health left!`)
    }
}

while (obiWanHealth > 0) {
    obiWanHealth += (obiWanDefense - anakinAttack);
    if (obiWanHealth > 0) {
        console.log(`Anakin strikes relentlessly! Obi-Wan has ${obiWanHealth} health left!`)
    } else {
        console.log(`Obi-Wan Kenobi has fallen. The Republic, and galatic peace, are doomed.`)
    }
}