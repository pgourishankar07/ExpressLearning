import users from "./constants/users.js"
let data = users.filter(i => i.name.startsWith("a"))
// let data = users.filter(i => {
//     console.log(i.name);

// })


data.sort((a, b) => b.marks - a.marks)
console.log(data);


// (i.name).startsWith(search)