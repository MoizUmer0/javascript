// const tinderuser = new Object() //singleton
const tinderuser = {} //non singleton

tinderuser.id = "123abc";
tinderuser.name = "Moiz";
tinderuser.isloggedin = false;  

// console.log(tinderuser);

const regularuser = {
    email:"some@gmail.com",
    fullname:{
        userfullname:{
            fisrtname: "Moiz",
            lastname: "Umer"
        }

    }
}
// console.log(regularuser.fullname.userfullname)

const obj1={1: "a" , 2: "b"}
const obj2={3: "a" , 4: "b"}

// const obj3= {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2) 

const obj3 ={...obj1,...obj2}
console.log(obj3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

// json api
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]