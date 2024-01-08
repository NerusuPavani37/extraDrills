let got = require("./data");

/* 1. Write a function called `countAllPeople` which counts the total number of
 people in `got` variable defined in `data.js` file.*/

function countAllPeople(got) {
  try {
    let count = got.houses.reduce(function (acc, curr) {
      return acc + curr.people.length;
    }, 0);

    return count;
  } catch (error) {
    console.log("error occured");
    return null;
  }
}

let totalPeople = countAllPeople(got);
if (totalPeople !== null) {
  console.log(totalPeople);
} else {
  console.log("Encountered an error while processing data.");
}

/*2. Write a function called `peopleByHouses` which counts the total number of people
 in different houses in the `got` variable defined in `data.js` file. */
function peopleByHouses(got) {
  let count = {};

  try {
    got.houses.forEach(function (house) {
      let houseName = house.name;

      if (!count[houseName]) {
        count[houseName] = house.people.length;
      }
    });
  } catch (error) {
    console.log("error occured");
    return null;
  }

  return count;
}

let count = peopleByHouses(got);
if (count != null) {
  console.log(count);
} else {
  console.log("Encountered an error while processing data.");
}

/* 3.Write a function called `everyone` which returns a array of names of all the people 
in `got` variable.
*/
function everyOne(got) {
  try {
    let arr = got.houses.map((element) => {
      return element.people;
    });
    return arr;
  } catch (error) {
    console.log("error occured");
    return null;
  }
}

let allPeople = everyOne(got);
if (allPeople !== null) {
  console.log(allPeople);
} else {
  console.log("Encountered an error while processing data.");
}

/* 4. Write a function called `nameWithS` which returns a array of names of all the people in 
`got` variable whose name includes `s` or `S`. */

function nameWithS(got) {
  try {
    let arrayOfPeople = got.houses
      .map((house) => {
        return house.people;
      })
      .flat();

    let arrayOfNamesWiths = arrayOfPeople.filter((people) => {
      return people.name.toLowerCase().includes("s");
    });

    let res = arrayOfNamesWiths.map((person) => {
      return person.name;
    });

    return res;
  } catch (error) {
    console.log("error occured");
    return null;
  }
}
let namesIncludesS = nameWithS(got);
if (namesIncludesS !== null) {
  console.log(namesIncludesS);
} else {
  console.log("Encountered an error while processing data.");
}

/*5. Write a function called `nameWithA` which returns a array of names of all the people in 
`got` variable whose name includes `a` or `A`. */

function nameWithA(got) {
  try {
    let arrayOfPeople = got.houses
      .map((house) => {
        return house.people;
      })
      .flat();

    let arrayOfnameWithA = arrayOfPeople.filter((person) => {
      return person.name.toLowerCase().includes("a");
    });

    let res = arrayOfnameWithA.map((persons) => {
      return persons.name;
    });

    return res;
  } catch (error) {
    console.log("error occured");
    return null;
  }
}

let namesIncludesA = nameWithA(got);
if (namesIncludesA !== null) {
  console.log(namesIncludesA);
} else {
  console.log("Encountered an error while processing data.");
}

/*6. Write a function called `surnameWithS` which returns a array of names of all the people 
in `got` variable whoes surname is starting with `S`(capital s). */
function surnameWithS(got) {
  try {
    let arrayOfPeople = got.houses
      .map((house) => {
        return house.people;
      })
      .flat();

    let arrayOfSurnameS = arrayOfPeople.filter((person) => {
      return person.name.split(" ")[1].charAt(0).includes("S");
    });

    let res = arrayOfSurnameS.map((person) => {
      return person.name;
    });

    return res;
  } catch (error) {
    console.log("error occured");
    return null;
  }
}

let surnameStratingWithS = surnameWithS(got);

if (surnameStratingWithS !== null) {
  console.log(surnameStratingWithS);
} else {
  console.log("Encountered an error while processing data.");
}

/*7. Write a function called `surnameWithA` which returns a array of names of all the 
people in `got` variable whoes surname is starting with `A`(capital a).*/
function surnameWithA(got) {
  try {
    let arrayOfPeople = got.houses
      .map((house) => {
        return house.people;
      })
      .flat();

    let arrayOfSurnameA = arrayOfPeople.filter((person) => {
      return person.name.split(" ")[1].charAt(0).includes("A");
    });

    let res = arrayOfSurnameA.map((person) => {
      return person.name;
    });

    return res;
  } catch (error) {
    console.log("error occured");
    return null;
  }
}

let surnameStratingWithA = surnameWithA(got);
if (surnameStratingWithA !== null) {
  console.log(surnameStratingWithA);
} else {
  console.log("Encountered an error while processing data.");
}

/*8.Write a function called `peopleNameOfAllHouses` which returns an object with the 
key of the name of house and value will be all the people in the house in an array. */
function peopleNameOfAllHouses(got) {
  let obj = {};

  try {
    got.houses.forEach((element) => {
      if (
        element &&
        element.name &&
        element.people &&
        Array.isArray(element.people)
      ) {
        obj[element.name] = element.people.map((person) => person.name);
      } else {
        throw new Error("Invalid data structure for a house.");
      }
    });
  } catch (error) {
    console.log("Error occured", error.message);
    return null;
  }
  return obj;
}

let objectOfNames = peopleNameOfAllHouses(got);
if (objectOfNames !== null) {
  console.log(objectOfNames);
} else {
  console.log("Encountered an error while processing data.");
}
