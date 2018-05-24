// object {
	// property: value,
	// property: function, 
	// property: object1, 

// }

// property === variable

// object1 = {
	// property: value, 
	// property: function, 
	// property: object2

// }

// object2 = object.property.property;

let object1 = {
	property1: "value",
	property2: "function",
	property3: "object2"
}

let object = {
	property1: "value",
	property2: "function",
	property3: object1
}

console.log(typeof object.property3.property3);