let firstName = "Nischal";
let lastName = "Shakya";
let greet = "Namaste";
let activeStatus = true;
let age = 22;//Declaration
age=23;//re-initialization
let num1=1;
let num2 =2 ;
const pi =3.14;

// let colors = ["red","blue","Yellow"]

// colors[0]="black";

let oddNumbers=[1,3,5,"seven",9];
oddNumbers[3]= 7;


console.log(`${greet} ${firstName} ${lastName} \n how are you?`)
console.log(activeStatus)
console.log(age)
console.log(`Sum  of Two numbers is ${num1+num2}`)
console.log(`the value of pi is ${pi}`)

// for(color of colors){
//     console.log(color)
// }
for(OddNumber of oddNumbers){
    console.log(OddNumber)
}
let courseDetails =[
    ["Mern","3months"],
    ['QA','2months']
    ];


let courseDetailss = {
    courseName : "Mern",
    courseDuration : "3 months"
}

let colors ={
    name:"red",
    hex:"FF000",
    rgb : "(255,0,0)"
}

console.log(colors)


console.log(courseDetails)
console.log(courseDetailss)


let user1 = {
    name:"Nischal",
    temporaryAddress:{
        district:"Jhapa",
        street:"xys"
    },
    permanentAddress:{
        district:"Jhapa",
        street:"xyz"
    }
}



let user = [
    {
        name:"user1",
        post:"manager"
    },
    {
        name:'user2',
        post:'teller'
    }
]
user[0].name="user3";
console.log(user)

let courses =[
    {
        title:"MERN",
        teacher:"xyz",
        syllabus:[
            {
                topic:"js",
                duration:"20days"
            },
            {
                topic:"react",
                duration:"20days"
            }
        ]
    },
    {
        title:"Django",
        teacher:"abc",
        syllabus:[
            {
                topic:"python",
                duration:"20days"
            },
            {
                topic:"django",
                duration:"10days"
            }
        ]
    },
]
courses[0].syllabus[0].topic="javascript";
console.log(courses)

console.log(`Ram is from ${user1.temporaryAddress.district}`);



let users = [
    {
        name:"user1",
        address:"Natole",
        contact:[
            {
                phone:9861770872,
                simType : "NTC"
            },
            {
                phone:9803988722,
                simType : "Ncell"
            },
        ]
    },
    {
        name:"user2",
        address:"kamalbinayak",
        contact:[
            {
                phone:9840151590,
                "simType" : "NTC"
            },
            {
                phone:9801194990,
                "simType" : "ncell"
            },
        ]
    }
]

console.log(users[1].contact[0].s)



let classes=[
    {
        class:"one",
        section:[
            {
            sectionGrp:"A",
            numberOfStudents:20,
            shift:"morning",
            },
            {
            sectionGrp:"B",
            numberOfStudents:10,
            shift:"Evening",
            }
        ]
    },
    {
        class:"two",
        section:[
            {
            sectionGrp:"A",
            numberOfStudents:30,
            shift:"morning",
            },
            {
            sectionGrp:"B",
            numberOfStudents:20,
            shift:"Evening",
            }
        ]
    },
   
]



let todos = [
    {
        title:"variable",
        statusOfTodo: "completed",
        createdAt : "2024-01-01"
    },
    {
        title:"array",
        statusOfTodo: "completed",
        createdAt : "2024-01-02"
    },
    {
        title:"object",
        statusOfTodo: "completed",
        createdAt : "2024-01-04"
    },
]


//Template literal
for(todo of todos){
   console.log(`${todo.title} is ${todo.statusOfTodo}`)
   console.log(`${todo.title} is created at ${todo.createdAt} is ${todo.statusOfTodo}`)
}





//function 
const double = (num1) =>{
    console.log(`2*${num1}=${2*num1}`);
}

double(2);
double(6);


const sum = (a,b)=>{
    console.log(`${a}+${b}=${a+b}`);
    
}

sum(4,5)


function addNumbers() {
    let sum_args = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            sum_args += arguments[i];
        }
    }

    return sum_args;
}


let result = addNumbers(1, 2, 3, 4, 5);
console.log(`The sum is ${result}`);


function diffNumbers() {
    let diff_args = 0;
    for (let i = 1; i < arguments.length; i++) {
        if (typeof arguments[i] === 'number') {
            diff_args = arguments[0];
            diff_args -= arguments[i];
        }
    }

    return diff_args;
}


let diffOfNumbers = diffNumbers(10, 2, 3);
console.log(`The diff is ${diffOfNumbers}`);



let arr = "Exploring tomorrow : 2024-01-02";

console.log(arr.substring(20,31))



let blogs = [
    {
      title:
        "Exploring Tomorrow",
      created_at: "2024-01-19T13:01:03.486205+05:45",
    },
    {
      title:
        "Career in Web ",
      created_at: "2024-01-18T15:02:21.353832+05:45",
    },
    {
      title:
        "Degrees Dying",
      created_at: "2024-01-16T14:06:24.457394+05:45",
    },
    {
      title:
        "Career in Digital Marketing",
      created_at: "2024-01-17T11:02:40.936608+05:45",
    },
  ];

function getCreatedDate(index){
    console.log(`${blogs[index].title} : ${blogs[index].created_at.substring(0,10)}`)
}
getCreatedDate(0)
getCreatedDate(1)
getCreatedDate(2)
getCreatedDate(3)

const getDate = (date) =>{
    return date.substring(0,10)
}



let members = [
    {
      name: "Ram",
      joined_at: "2024-01-19T13:01:03.486205+05:45",
    },
    {
      name: "Hari",
      joined_at: "2024-01-18T15:02:21.353832+05:45",
    },
    {
      name: "Sita",
      joined_at: "2024-01-17T14:06:24.457394+05:45",
    }
  ];

  function getMemberJoinDate(memberIndex){
    console.log(`${members[memberIndex].name} joined at : ${getDate(members[memberIndex].joined_at)}`)
}

getMemberJoinDate(0)
getMemberJoinDate(1)
getMemberJoinDate(2)

members.map((memberDetails)=>{
    let {name, joined_at} = memberDetails
    console.log(`${name} joined at : ${getDate(joined_at)}`)
})
