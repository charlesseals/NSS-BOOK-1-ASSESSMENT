
const flowers = [
    {
        id: 1,
        type: "Rose",
        colors: ["White", "Red", "Violet", "Pink", "Black", "Yellow"],
        price: 2.59,
        usdaZones: [3, 4, 5, 6, 7, 8, 9, 10]
    },
    {
        id: 2,
        type: "Tulip",
        colors: ["Orange", "White", "Yellow", "Violet", "Red"],
        price: 1.04,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 3,
        type: "Daisy",
        colors: ["Gold", "White", "Orange", "Crimson"],
        price: 0.89,
        usdaZones: [3, 4, 5, 6, 7, 8]
    },
    {
        id: 4,
        type: "Carnation",
        colors: ["Peach", "Yellow", "Magenta", "Pink", "Coral"],
        price: 1.59,
        usdaZones: [5, 6, 7, 8, 9]
    },
    {
        id: 5,
        type: "Bird of Paradise",
        colors: ["Orange", "White"],
        price: 2.33,
        usdaZones: [9, 10, 11]
    },
    {
        id: 6,
        type: "Delphinium",
        colors: ["Blue", "Violet", "White", "Pink"],
        price: 1.67,
        usdaZones: [3, 4, 5, 6, 7]
    },
    {
        id: 7,
        type: "Gladiolus",
        colors: ["White", "Cream", "Yellow", "Red", "Pink", "Green", "Lavender", "Voilet"],
        price: 1.85,
        usdaZones: [6, 7, 8, 9, 10]
    },
    {
        id: 8,
        type: "Lilly",
        colors: ["White", "Yellow", "Orange", "Red", "Pink", "Lavender"],
        price: 1.52,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    },
    {
        id: 9,
        type: "Chinese Lantern",
        colors: ["Orange"],
        price: 2.33,
        usdaZones: [3, 4, 5, 6, 7, 8, 9]
    }
]

/*
    Below are some functions, in which you will write ALL of your
    code. Do not modify the code that defines the functions, and
    do not write any code outside of the functions.
*/


/*
    This function should return inexpensive flowers - ones that cost
    less than 2.00 per flower.
*/



// In the situation below we used the "flower" for/of loop to iterate through the "flowers" array.
//
// Next we used a conditional "if" statement 
// that states the following: 
//
// If a flower has a price less than 2 we will ".push" that flower
// to the filtered flowers array.
//
// After the for loop finishes iterating through the "flowers" array 
// we call "filteredFlowers" to the console

const inexpensiveFlowers = () => {
    const filteredFlowers = []
        for (const flower of flowers){
            if (flower.price < 2){
                filteredFlowers.push(flower)
            }
         }



// Do not modify
    
// Write your algorithm first, and then your code. Feel free to remove this comment



    return filteredFlowers  // Do not modify

}

/*
    This function should return flowers that grow in
    USDA zones of 3 and 8.
*/








const zoneFlowers = () => {
    const filteredFlowers = []
      for (const zone of flowers){
        if (zone.usdaZones.includes(3) && zone.usdaZones.includes(8)){
            filteredFlowers.push(zone)
        }
      }  // Do not modify


    // Write your algorithm first, and then your code. Feel free to remove this comment




    return filteredFlowers  // Do not modify
}



/*
    This function should return flowers that come in the color Orange
*/
const orangeFlowers = () => {
    const filteredFlowers = [] 
    for (const color of flowers){
        if (color.colors.includes("Orange")){
            filteredFlowers.push(color)
        }
      } // Do not modify



    // Write your algorithm first, and then your code. Feel free to remove this comment




    return filteredFlowers  // Do not modify
}



/*
    This function should return an HTML representation of each flower.

    Expected string format:
        <article>
            <h1>Bird of Paradise</h1>

            <h2>Colors</h2>
            <section>White</section>
            <section>Orange</section>

            <h2>USDA Zones</h2>
            <div>9</div>
            <div>10</div>
            <div>11</div>
        </article>
*/




// Below is a variable by the name of "flowersHTMLString" whos value is an empty string.
//
// The second line (line 202) is a function that converts some of the 
// parts of the "flowers" array to a string using "String Concatenation"
//
// We use 
//
//
//
//
//


let flowersHTMLString = ""
const flowersAsHTML = () => {
    for (const flower of flowers){
        flowersHTMLString += "<article>"
        flowersHTMLString += `<h1>${flower.type}</h1>`
        flowersHTMLString += "<h2>Colors</h2>"
        for (const color of flower.colors){
            flowersHTMLString += `<section>${color}</section>`
        
        }
        flowersHTMLString += "<h2>USDA Zones</h2>"
        for (const zone of flower.usdaZones){
            flowersHTMLString += `<div>${zone}</div>`
        }
        flowersHTMLString += "</article>"
    }
    

    
//     flowersAsHTML()
// console.log(flowersHTMLString)
    // Do not modify
        //id: 6,
        // type: "Delphinium",
        // colors: ["Blue", "Violet", "White", "Pink"],
        // price: 1.67,
        // usdaZones: [3, 4, 5, 6, 7]

    /*
        Algorithmic thinking is most important on this one.
        We would rather see the correct algorithm than the
        correct code. If you have code that works, but no
        algorithm, then you failed the exercise.
    */


    return flowersHTMLString  // Do not modify

}














































































/*  DO NOT TOUCH THIS CODE  */
const getFlowers = () => flowers
module.exports = {
    inexpensiveFlowers, orangeFlowers, zoneFlowers, flowersAsHTML
}
/*  DO NOT TOUCH THIS CODE  */

