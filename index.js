import inquirer from "inquirer";
let data = await inquirer.prompt([
    {
        name: "firstNumber",
        message: "type a number",
        type: "number",
    },
    {
        name: "secondNumber",
        message: "type a number",
        type: "number"
    },
    {
        name: "operator",
        message: "select operator",
        type: "list",
        choices: ["Addition", "Substraction", "Multiplication", "Division", "Modules", "m"]
    }
]);
if (data.operator === "Addition") {
    console.log(`Your answer is : ${data.firstNumber + data.secondNumber}`);
}
else if (data.operator === "Substraction") {
    console.log(`Your answer is ${data.firstNumber - data.secondNumber}`);
}
else if (data.operator === "Multiplication") {
    console.log(`your answer is ${data.firstNumber * data.secondNumber}`);
}
else if (data.operator === "divison") {
    console.log(`your answer is ${data.firstNumber / data.secondNumber}`);
}
else if (data.operator === "Modules") {
    console.log(`your answer is ${data.firstNumber % data.secondNumber}`);
}
else {
    console.log("invalid");
}
