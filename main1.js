/*alert('hello from mohadeseh');
console.log("hello again");
console.warn("warring");
console.error("this is an error");

document.write("this is text from doc")*/


let fname = 'mohadeseh';
fname = "shoaei";
console.log(fname);

const version = 0.1;
console.log(version);

const age =15;
console.log(typeof age)

const firstname ="mohadeseh";
console.log(typeof firstname);

const isdone = false;
console.log(typeof isdone);

let x = null;
console.log(typeof x);

let c = undefined;
console.log(typeof c);

var Age = 20;
x= Age * 2
console.log (x);
x++
console.log(x);
 x +=5
 console.log(x); 

 let Fname = 'mohadeseh';
 let Lname = 'shoaei';
 let fullName= Fname+" "+ Lname;
 console.log(fullName);
 console.log(fullName.length);
 console.log(fullName.toUpperCase());
 console.log(fullName.substring(9,16).toLowerCase());
 
 var classname ="c++, c, java, html";
 console.log(classname.split(", "));

 let classname2 = ['c#' , 'java' , 'html' , true , 100];
console.log(classname2);
classname2[1]='css'
console.log(classname2[1]);
classname2[3]="bootstrap";
classname2.push('phyton');
classname2.unshift("c++");
classname2.pop();
console.log(classname2);
console.log(classname2.length);
console.log(classname.indexOf('html'));

const student= {
    name : 'mohadeseh',
    lastname : 'shoaei',
    id : 1111,
    courses :[ 'jacascript' , 'html' , 'css'],
    adress : { country : 'iran' , city : 'tabriz'}
}
console.log(student);
console.log(student.name)
console.log(student.adress.city)
console.log(student.courses[1]);
console.log(student["name"])

let key = "lastname";
console.log(student[key])

student.courses = "java,html";
console.log(student);

student.email = "mohadeseh@shoaei.com"
console.log(student);


function log(name , lname){
    console.log("hello " + name + " " + lname);
}
log('mohadeseh' , 'shoaei');


function math (x, y){
    return x*y
}

let result = math(100, 4);
console.log(result)




 



  
