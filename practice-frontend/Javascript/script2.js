const score = [2,3,4,6,8,4,3,5,7,6,7,3,4];

const  newScore = score.map((value) => value > 2);
console.log("New Score:", newScore); // New Score: [ 4, 6, 8, 12, 16, 8, 6, 10, 14, 12, 14, 6, 8 ]

// score.forEach((value, index) => {
//     console.log(`Index: ${index}, Value: ${value}`); // Index: 0, Value: 2
    
// });

