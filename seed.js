const School = require('./models/index').School
const Student = require('./models/index').Student

const Seed = () => {
  School.bulkCreate([
    {name:'James Madison HighSchool', district: 22, size:3400},
    {name:'Edward R Murrow', district:21 , size:3855},
    {name:'Midwood', district:22, size:3989},
    {name:'Brooklyn Tech' ,district:13, size:5659}
  ])
  .then(data => {
    Student.bulkCreate([
    {name:"Chanice" , age: 24, grade:12, SchoolId:1 },
    {name:"Mel" , age: 26, grade: 12, SchoolId:2},
    {name:"Bryan" , age:26 , grade:12, SchoolId:1}
    ])
  })
  .catch(error => console.log(error))
}
module.exports = Seed
