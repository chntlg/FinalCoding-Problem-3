// Prompt user for input and split the strings into arrays
const names = prompt("Enter names separated by commas:", "Genevieve, Juan, Luna, Gabriel, Elise").split(',');
const ages = prompt("Enter ages separated by commas:", "24, 65, 21, 5, 9").split(',').map(Number);

// Function to restructure the multi-dimensional array
function restructureArray(namesArray, agesArray) {
const restructuredArray = [];
for (let i = 0; i < namesArray.length; i++) {
if (namesArray[i] && typeof agesArray[i] !== 'undefined') { // Check for valid pairs
restructuredArray.push([namesArray[i].trim(), agesArray[i]]);
}
}
return restructuredArray;
}

// Restructure the arrays into a multi-dimensional array
const restructuredArray = restructureArray(names, ages);

// Log the restructured multi-dimensional array
console.log("Restructured Multi-Dimensional Array:");
restructuredArray.forEach(subArray => {
console.log(`Name: ${subArray[0]}, Age: ${subArray[1]}`);
alert(`Name: ${subArray[0]}, Age: ${subArray[1]}`);
});