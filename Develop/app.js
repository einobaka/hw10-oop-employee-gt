const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

inquirer.prompt(
    [{
        type: "confirm",
        name: "teambuild",
        message: "Would you like to create a new team?",
    }]
).then((answer) => {

    if (answer.teambuild !== false) {
        buildTeam()
    }
    else {
        console.log("no")
    };

});

function buildTeam() {

    function createManager() {
        // console.log("manager");
        inquirer.prompt([
            {
                type: "prompt",
                name: "managername",
                message: "Please enter the Manager's name.",
                validate: answer => {
                    if (answer === "") {
                        return "Please enter a name.";
                    }
                    return true;
                }


            },
            {
                type: "prompt",
                name: "managernameid",
                message: "Please enter the Manager's numeric ID.",
                validate: answer => {
                    //regex number validation

                    if (answer.match(/^[1-9]\d*$/)) {
                        return true;
                    }
                    else {
                        return "Entry must be a numeric entry."
                    }
                }
            },
            {
                type: "prompt",
                name: "managernameemail",
                message: "Please enter the Manager's email.",
                validate: answer => {
                    if (answer === "") {
                        return "Please enter an email.";
                    }
                    return true;
                }
            },
        ])
            .then((answers) => console.log(answers));
    };
    createManager();



}

function renderTeam() {

}

// const employeeData = [
//     {
//         type: "prompt",
//         name: "name",
//         message: "Please enter the team member name."
//     },
//     {
//         type: "prompt",
//         name: "id",
//         message: "Please enter the team member ID."
//     },
//     {
//         type: "prompt",
//         name: "email",
//         message: "Please enter the team member email."
//     },
//     {
//         type: "list",
//         name: "member",
//         message: "Please select the type of team member.",
//         choices: [
//             "Engineer",
//             "Intern",
//             "No more team members needed",
//         ]
//     },
// ];


// module.exports = employeeData

// inquirer.prompt(employee)
//     .then((employeeData) => {

//         let newData = employeeData;

//         console.log(newData);




//         // console.log(type.member);
//         // let memberStats
//         // function postAnswer() {
//         //     if (type.member === "Manager") {
//         //         // console.log("Manager")
//         //         // memberType = "Manager"
//         //     };
//         //     if (type.member === "Engineer") {
//         //         // console.log("Engineer")
//         //         // memberType = "Engineer"
//         //     };
//         //     if (type.member === "Intern") {
//         //         // console.log("Intern")
//         //         // memberType = "Intern"
//         //     };
//         // }       
//         // postAnswer();
//         // console.log(teamStats)


//     });



// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
