class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }

}
class Support extends TeamMember {
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        //console.log(this.name, 'start a support session');

    }
};


class StudentCare {
    name;
    designation = "student Care Wb developer";
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    buildARutine(student) {
        //console.log(this.name, 'Buuild A rutine for', student)
    }
}



class NeptuneDev {

    breleaseApp(virson) {
        //console.log(this.name, 'relese virson app', virson)
    }
}

const alia = new StudentCare('alia Bhatt', "mumbai");
// console.log(alia);

const aamir = new Support('Amir khan', 11);
const salman = new Support('solaiman khan');
//console.log(aamir);
aamir.startSession();
//console.log(aamir, salman);



/* ----------------MCQ------------------ */
function min(nums) {
    return Math.min(nums)
};
//console.log(min([1, 3, 2])); 

// 2

const cube = x => x * x * x;
//console.log(cube(2));
//3
const [a, b] = [1, 2, 3, 4, 45, 5];
//console.log(a + b);

//4

const { x, y, z } = { x: 1, y1: 2, z: 3 };
//const { y } = myObject;

//console.log(b);

//console.log(y);

/* --------------7---------------- */
const nums = [1, 2, 3, 4, 5];
let output = nums.filter(n => n % 2);

//console.log(output);


/* -------------------8----------------- */
const friends = ["Moushumi", "Misha", "Manna", "mimi", "mahiya"];
//friends.find(friends.length == 5);

friends.filter(friend => friend.length == 5);
/* friends.find(friend => friend.length == 5);

friends.find(friend => friend == 5); */
console.log(friends.length);