const arr = [
    "Jazz",
    "Blues",
];
console.log(arr);

arr.push("Rock-n-Roll");
console.log(arr);

arr[1] = "Classics";
console.log(arr);

let removedElement = arr.shift();
console.log(removedElement);
console.log(arr);

arr.unshift("Rap", "Reggae");
console.log(arr);


// Sukurkite masyvą (Array) styles su elementais „Jazz“ ir „Blues“.
	
// Masyvo (Array) pabaigoje pridėkite „Rock-n-Roll“.
	
// Viduryje esančią reikšmę pakeiskite „Classics“.
	
// Panaikinkite pirmą masyvo (Array) elementą ir parodykite jį.
	
// Pridėkite į masyvo pradžią „Rap“ ir „Reggae“ į masyvą.


// Rezultatai:

// Jazz, Blues

// Jazz, Blues, Rock-n-Roll

// Jazz, Classics, Rock-n-Roll

// Jazz

// Classics, Rock-n-Roll

// Rap, Reggae, Classics, Rock-n-Roll