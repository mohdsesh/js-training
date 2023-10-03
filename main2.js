const courses =[
    {
        id : 1,
        name : 'html',
        time : 10,
        iscompleted : false
    },
    {
        id : 2,
        name : 'css',
        time : 15,
        iscompleted : false
    }
]
console.log(courses[1].name);
const result = JSON.stringify(courses);
console.log(result)


for(let i=0 ; i<=10 ; i++ ){
    console.log(i)
}

for(let c of courses){
    console.log(c)
}


let j=0;
while (j<10){
    console.log('while loop')
    j+=1
}

courses.forEach(function(c) {
console.log(c)
})

const newcourses = courses.map(function(cc){
    return { name : cc.name , id : cc.id}
})
console.log(newcourses)


const newcourses2 = courses.filter(function(cc){
    return cc.iscompleted === true
}).map(function(c){
    return c.name
})
console.log(newcourses2)



let x =5;
if(x<10){
    console.log("x is less than 10")
}
else if(x>10){
    console.log("x greater yhan 10")
}
else{
    console.log("x is 10")
}



let c=10;
let y=5;
if(c<10 || y===5){
    console.log("true")
}


let p=0;
let o=5;
if(p<10 && o===5){
    console.log("true")
}


const z=10;
const r = z>10 ? 'red' : 'blue';
console.log(r);



const color2 = 'red'
switch (color2){
case 'red' :
console.log("it is red");
break;
case 'blue' :
cosole.log("it is blue");
break;
default:
console.log('color is not blue and red' )
}



function addnumber(num1 , num2=0){
    console.log(num1 + num2)
}
addnumber(10,10)


const add =(num1 , num2) => num1 +num2
console.log(add(10))



class person{
    constructor(firstname , lastname , birthdate){
       this.firstname = firstname;
       this.lastname = lastname;
       this.birthdate = birthdate;
    }
    getfullname (){
        return '{this.firstname} {this.lastname}'
    }
}

const student1 = new person('mohadeseh' , 'shoaei' , 2004-8-5)
console.log(student1)

console.log(student1.getfullname())

const student2 = new person('john' , 'deo' , '1980')
console.log(student2)