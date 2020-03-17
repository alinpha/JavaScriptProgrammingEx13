/**
 * Author:Aline Vetrov
 * Date: Mar.17 2020
 * Title: Objtcst and Classes
 */

let myFirstObject = {
    myFirstStringProp:'My prop vvalue',
    myFirstFloatProp:45.59,
    myFunc:function() {
        return this.myFirstFloatProp/2;
    },
    add:(a,b) => a + b
}

console.log(myFirstObject);
console.log(myFirstObject.myFirstStringProp);
console.log(myFirstObject.myFirstFloatProp);
console.log(myFirstObject.myFunc());
console.log(myFirstObject.add(1,2));

let Person = function(fName,lName,dob) {
    this.fName = fName;
    this.lName = lName;
    this.dob = dob;
    this.age = function() {
        let currDate = new Date();
        let years = currDate.getFullYear() - this.dob.getFullYear();
        if (currDate.getMonth() < this.dob.getMonth()) {
            years-=1;
        } else if (currDate.getDay() < this.dob.getDay()) {
            years-=1;
        }
        return years;
    }

    this.toString = function() {
        return `Name: ${this.fName} ${this.lName} Age: ${this.age()}`;
    }
}

let person = new Person('Aline', 'Vetrov', new Date(2000,2,29));
console.log(person);
console.log(person.toString());

let p1 = new Person('Izes', 'Souto', new Date(1994,2,1));
let p2 = new Person('Jessie', 'Barrette', new Date(1990,6,23));
let p3 = new Person('Daria', 'Vetrov', new Date(2015,1,6));

let people = [];
people.push(person);
people.push(p1);
people.push(p2);
people.push(p3);
console.log('\nprint all people\n');

people.forEach(p => console.log(p.toString()));
//people.forEach(p => console.log(p.fName,p.lName,p.age()));

//use filter method to query collection of people based off conditions
console.log('\nprint vetrovs \n');
let query = people.filter(function(p) {return p.lName == 'Vetrov'});
query.forEach(q => console.log(q.toString()));

console.log('\nfind aline');

let findAline = people.filter(function(p) { return p.fName == 'Aline' && p.lName == 'Vetrov'});

if (findAline.length > 0) {
    console.log('\nrecords found:');
    console.log(findAline[0].toString());
    
    
} else {
    console.log('\nrecord not found');
    
}