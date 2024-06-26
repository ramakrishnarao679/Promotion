let employee = {
    firstName:'Rama',
    lastName:'Krishna',
    designation:'Asst-Manager',
    salary:20000,
    workExperience:6,

    getFullName: function () {
        return `${this.firstName} - ${this.lastName}`;
    },

    promote: function () {
        let isEligibleForPromotion;

        if(this.designation == 'Clerk'){
            if(this.workExperience >=3 ){
                isEligibleForPromotion = true;
                this.designation = 'Asst-Manager';
                this.salary += (this.salary *20)/100;

            }else {
                isEligibleForPromotion = false;
            }
        }else if(this.designation == 'Asst-Manager'){
            if(this.workExperience>=6){
                isEligibleForPromotion = true;
                this.designation = 'Manager';
                this.salary += (this.salary *40)/100;

            }else {
                isEligibleForPromotion = false;
            }
        }
        return isEligibleForPromotion;
    },
};

console.log(employee.getFullName());
console.log(employee.workExperience);

if(employee.promote ()=== true){
    console.log(`Welcome To New Position`);
    console.log(`New Designation: ${employee.designation}`);
    console.log(`Updated salary: ${employee.salary}`);
}else {
    console.log(`Employee is not eligible for promotion`);
}