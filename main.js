import inquirer from "inquirer";
let myAccountBalance = 25000; //dollar
let myPinCode = 2234;
let pinAnswer = await inquirer.prompt([
    {
        name: "Pin",
        message: "Enter your PinCode",
        type: "number",
    },
]);
if (pinAnswer.Pin === 2234) {
    console.log("Correct Pincode!");
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "select  option",
            type: "list",
            choices: ["withdraw", "check balance", "deposit"],
        },
    ]);
    console.log(operationAns);
    if (operationAns.operation === "deposit") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "enter amount for deposit",
            type: "number"
        });
        myAccountBalance += amountAns.amount;
        console.log(`your balance is: ${myAccountBalance}`);
    }
    if (operationAns.operation === "withdraw") {
        let amountAnswer = await inquirer.prompt([
            {
                name: "amount",
                message: "select your amount",
                type: "list",
                choices: ['1000', '5000', '10000', '15000', '20000']
            }
        ]);
        myAccountBalance -= amountAnswer.amount;
        console.log(`your remaining balance is :${myAccountBalance}`);
        if (amountAnswer.amount === 1000) {
            let reAmount = (myAccountBalance -= amountAnswer.amount);
            console.log(`your remaining balance is : ${reAmount}`);
        }
        // }
        // }else if(amountAns.amount ===5000){
        //     myAccountBalance -=5000;
        //     console.log(`your remaininig balance is:${myAccountBalance} `);
        // }else if(amountAns.amount===10000){
        //     myAccountBalance-=10000
        //     console.log(`your remaining balance is: ${myAccountBalance}`);
        // else if(amountAns.amount===15000){
        //     myAccountBalance-=15000
        //     console.log(`your remaining balance is: ${myAccountBalance}`);
        // }
        // else if(amountAns.amount===20000){
        //     myAccountBalance-=20000
        //     console.log(`your remaining balance is: ${myAccountBalance}`);
        // }
        // myAccountBalance -=amountAns.amount;
        // console.log(`Your remainig balance is: ${myAccountBalance}`);
        if (amountAnswer.amount > myAccountBalance) {
            console.log("Sorry you have insufficient balance!");
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your current balance is :${myAccountBalance}`);
        //    
    }
    // }
}
else {
    console.log("Incorrect Pincode!");
}
