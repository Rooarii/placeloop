
var openingHours = { 
  "monday": [ 
  { "begin": "10:00", "end": "12:00" }, 
  { "begin": "09:00", "end": "18:00" },
  ], 
  "tuesday": [ 
  { "begin": "10:00", "end": "12:00" }, 
  { "begin": "13:00", "end": "18:00" }, 
  ], 
  "wednesday": [ 
  { "begin": "10:00", "end": "12:00" }, 
  { "begin": "13:00", "end": "18:00" }, 
  ], 
  "thursday": [ 
  { "begin": "10:00", "end": "12:00" }, 
  { "begin": "13:00", "end": "18:00" }, 
  ], 
  "friday": [], 
  "saturaday": [], 
  "sunday": []
} 

// days to which we want to add opening hours
const daysSelected = { 
  "monday": true, 
  "tuesday": true, 
  "wednesday": true, 
  "thursday": true, 
  "friday": false, 
  "saturday": false, 
  "sunday": true 
  } 

//hours to add to days previously selected
const hoursToAdd = { "begin": "19:00", "end": "23:00" }   

/** 
 * addOpeningHours method:
 * ¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
 * it allows to add the hours from (object: hoursToAdd) to the selected days (object: daysSelected) in openingHours 
 * 
 * Step 1: 
 *   - check which days have been selected to add new opening hours
 * Step 2: 
 * 
 *   - for each days selected (truthy) we add the new opening hours
 * Step 3:
 * 
 * We return the final result openingHours object.
 */

const addOpeningHours = (daysSelected,hoursToAdd )=>{
  
  for (const day in daysSelected){
    if(daysSelected[day]){
      openingHours[day].push(hoursToAdd);
      openingHours[day].sort(dynamicSort("begin"))
    }
  }
  // console.log(openingHours)
  return openingHours

  }

// function that allows to sort the hours per choosen instance
function dynamicSort(property) {
  var sortOrder = 1;
  if(property[0] === "-") {
      sortOrder = -1;
      property = property.substr(1);
  }
  return function (a,b) {
      /* next line works with strings and numbers, 
       * and you may want to customize it to your needs
       */
      var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
      return result * sortOrder;
  }
}

//_____________________________________________________//
// Display returned result from addOpeningHours method

console.log(addOpeningHours(daysSelected, hoursToAdd));
// console.log(addOpeningHours());

/**
 * Enhancements:
 *  - Enhancement 1: Done ✅
 *  - Enhancement 2: to be done 🚧
 */ 