let money = prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let appData = { 
    budjet : money,
    timeData : time,
    expenses : {},
    optionalExpenses : {},
    income : [],
    savings : false
}

let firstQuestion = prompt('Введите обязательную статью расходов в этом месяце?');

let secondQuestion = prompt("Во сколько обойдется?");

appData.expenses.firstQuestion = secondQuestion;

alert("бюджет на 1 день " + appData.budjet / 30);

console.log(appData.expenses.firstQuestion);


