var obj = {
   "students" : [
     {
       "name":"virat",
       "marks": 15
     },
     {
       "name":"rohit",
       "marks":17
     },
     {
     "name":"shikhar",
     "marks":19
     },
     {
    "name":"k1 rahul",
      "marks":21
},
  {
 "name":"Ms dhoni",
  "marks": 0
},
  {
  "name":"jasprit",
    "marks":27
  },
     {
       "name":"hardik pandya",
       "marks":24
     },
     {
      "name":"aheteshwar pujara",
       "marks":19
     },
     {
       "name":"ajinkya",
       "marks":23
     },
     ],
};
var yourNumber = prompt("enter the score")
var studentsLength = obj.students.length
for(var i=0;i<studentsLength;i=i+1){
  if (yourNumber < obj.students[i].marks ){
    console.log(obj.students[i].name)
  }
