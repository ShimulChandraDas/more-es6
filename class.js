class Support {
    name;
    designation = 'support web dev';
    address = 'BD';
    constructor(name) {
        this.name = name;
    }
    startSession() {
        console.log(this.name, 'start a support session');

    }
};

const aamir = new Support('Amir khan');
const salman = new Support('solaiman khan');
aamir.startSession();
//console.log(aamir, salman);