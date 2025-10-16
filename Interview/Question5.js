//Q5: How do you deep clone an object in JavaSctipt?
import _ from "lodash"
const user = {
  name: "Shadin",
  address: {
    city: "Dhaka",
    country: "Bangladesh"
  }
};


const copy ={...user};
copy.address.city = "Chittagong"

// console.log(copy.address.city)

//Deep clone
// const deepCopy = structuredClone(user);

// console.log(deepCopy.address)
// console.log(deepCopy.address.city)

//json.parse(json.stringify())
// const deepcopy =JSON.parse(JSONa.stringify(user))
// console.log(deepcopy)

//Lodash deepCopy

const deepCopy = _.cloneDeep(user);
console.log(deepCopy)
