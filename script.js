
//     Recreate Object.entries method

//   Given an object,
//   return an array of arrays of the object's key value pairs, where each key value pair is a 2 item array

//   Do not include key value pairs from the given objects prototype(these are included by default when looping over an object's keys)
//         

const obj1 = {
    name: "Pizza",
    calories: 9001,
};



const expected1 = [
    ["name", "Pizza"],
    ["calories", 9001],
];

const proto = { inheritance: "inherited key", keyOnProto: "val from proto" };

// This object contains inherited key value pairs from the above proto obj.
const obj2 = Object.assign(Object.create(proto), {
    firstName: "Foo",
    lastName: "Bar",
    age: 13,
});

const expected2 = [
    ["firstName", "Foo"],
    ["lastName", "Bar"],
    ["age", 13],
];

/**
 * Returns a 2d array of key value pairs from the given obj.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Object} obj
 * @typedef {Array<Array<string, any>>} output The nested array should look
 *    like [key, val]
 * @returns {output}
 */
function entries(obj) {
    //convert given object so it can be returned in an array
    let newObject = [];

    // loop through the object
    for (const key in obj) {
        // define new inner arary
        let innerArray = [];
        // if object has own = true, then...
        if (obj.hasOwnProperty(key)) {
            //push key into inner array
            innerArray.push(key);
            //push object into inner array
            innerArray.push(obj[key]);
            //push above result into newObject
            newObject.push(innerArray);
        }
    }
    return newObject;
}

console.log(entries(obj1));
console.log("============\n");

console.log(entries(obj2));
console.log("============\n");
function entries2(obj) {
    let newObject = [];

    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObject.push([key, obj[key]]);
        }
    }
    return newObject;
}

console.log(entries2(obj1));
console.log("============\n");

console.log(entries2(obj2));
console.log("============\n");

/*****************************************************************************/
