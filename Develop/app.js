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

const theTeam = [];

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
    else console.log("No Team Creation")

});

function buildTeam() {

    function createManager() {
        inquirer.prompt([
            {
                type: "prompt",
                name: "managerName",
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
                name: "managerId",
                message: "Please enter the Manager's numeric ID.",
                validate: answer => {
                    //regex number validation
                    if (answer.match(/^[1-9]\d*$/)) {
                        return true;
                    }
                    return "Entry must be a numeric entry."
                }
            },
            {
                type: "prompt",
                name: "managerEmail",
                message: "Please enter the Manager's email.",
                validate: answer => {
                    if (answer === "") {
                        return "Please enter an email.";
                    }
                    return true;
                }
            },
            {
                type: "prompt",
                name: "managerPhone",
                message: "Please enter the Manager's phone number.",
                validate: answer => {
                    //regex number validation
                    if (answer.match(/^[1-9]\d*$/)) {
                        return true;
                    }
                    return "Entry must be a numeric entry."
                }
            },
        ])
            .then((answers) => {
                // console.log(answers);
                const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerPhone)
                theTeam.push(manager);
                console.log(theTeam)
                buildMember();
            });
    };

    createManager();

    function buildMember() {

        const teamStat = [
            {
                type: "prompt",
                name: "name",
                message: "Please enter team members name.",
                validate: answer => {
                    if (answer === "") {
                        return "Please enter an answer.";
                    }
                    return true;
                }
            },
            {
                type: "prompt",
                name: "id",
                message: "Please enter the team members's numeric ID.",
                validate: answer => {
                    //regex number validation
                    if (answer.match(/^[1-9]\d*$/)) {
                        return true;
                    }
                    return "Entry must be a numeric entry."
                }
            },
            {
                type: "prompt",
                name: "email",
                message: "Please enter team members email.",
                validate: answer => {
                    if (answer === "") {
                        return "Please enter an answer.";
                    }
                    return true;
                }
            }
        ];

        inquirer.prompt([
            {
                type: "list",
                name: "member",
                message: "Please select the type of team member.",
                choices: [
                    "Engineer",
                    "Intern",
                    "No more team members needed",
                ]
            },
        ])
            .then((memberType) => {
                console.log(memberType);
                inquirer.prompt(teamStat)
                    .then((stat) => {
                        console.log(memberType, stat)
                        inquirer.prompt([
                            {
                                type: "confirm",
                                name: "more",
                                message: "Add more members?"
                            }
                        ]).then((answer) => {
                            if (answer.more !== false) {
                                buildMember();
                            }
                            else {

                                console.log(theTeam)
                            }
                        })
                    })
            });
    }

}

function renderTeam() {

}


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
