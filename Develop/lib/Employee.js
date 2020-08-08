// TODO: Write code to define and export the Employee class

class Employee {

    // sets up object
    constructor(name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    // just returns
    getName() {
        return this.name;
    };

    getId() {
        return this.id;
    };

    getEmail() {
        return this.email;
    };

    getRole() {
        return this.employee
    };

}

module.exports = Employee