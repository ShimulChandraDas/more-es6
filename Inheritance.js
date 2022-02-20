class TeamMember {
    name;
    designation = "student Care Wb developer";
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
        console.log(this.name, 'start a support session');

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
        console.log(this.name, 'Buuild A rutine for', student)
    }
}



class NeptuneDev {

    breleaseApp(virson) {
        console.log(this.name, 'relese virson app', virson)
    }
}

const alia = new StudentCare('alia Bhatt', "mumbai");
// console.log(alia);

const aamir = new Support('Amir khan', 11);
const salman = new Support('solaiman khan');
console.log(aamir);
aamir.startSession();
//console.log(aamir, salman);