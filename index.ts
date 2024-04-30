#! usr/bin/env node

import chalk from "chalk";

console.log(`${chalk.whiteBright.italic`Welcome to S2bl Grading System`}`)

let maxMarks = 850;
let obtainedMarks = 449.97;

let per = (obtainedMarks*100)/maxMarks
if (per >= 90 && per <=100){

    console.log(`${chalk.blueBright.italic`As per your percentage You got grade A+`}`);
    
}else if (per >= 80 && per <= 89){

    console.log(`${chalk.blueBright.italic`As per your percentage You got grade A`}`);
    
} else if (per >= 70 && per <= 79){

    console.log(`${chalk.blueBright.italic`As per your percentage You got grade B+`}`);
    
}else if (per >= 60 && per <= 69){

    console.log(`${chalk.blueBright.italic`As per your percentage You got grade B`}`);
    
} else if (per >= 50 && per <= 59){

    console.log(`${chalk.blueBright.italic`As per your percentage You got grade C+`}`);
    
}else if (per >= 40 && 49){

    console.log(`${chalk.blueBright.italic`As per your percentage You got grade C`}`);
    
}else if (per >= 34 && per <= 39){

    console.log(`${chalk.blueBright.italic`As per your percentage You got grade D`}`);
    
}else if(per <= 33){

    console.log(`${chalk.red.italic`As per your percentage You are Fail!!!`}`);
    
};


























