// Задача 2. Форматування повідомлення
// Оголоси функцію formatMessage(message, maxLength), яка приймає рядок (параметр message) та перевіряє його довжину відповідно до заданої максимальної довжини (параметр maxLength).

// Доповни код функції таким чином, що:

// Якщо довжина рядка дорівнює або менша за maxLength, то функція повертає початковий рядок без змін.
// Якщо довжина перевищує maxLength, то функція обрізає рядок до maxLength символів, додає трикрапку "..." в кінці та повертає обрізану версію.

function formatMessage(message, maxLength){
    const messageLength = message.length;
    if(messageLength <= maxLength){
        return message;
    } else { 
        return message.slice(0, maxLength) + "...";
    }


}


console.log("Task2:", formatMessage("Curabitur ligula sapien", 16)); 
console.log("Task2:", formatMessage("Curabitur ligula sapien", 23)); 
console.log("Task2:", formatMessage("Vestibulum facilisis purus nec", 20)); 
console.log("Task2:", formatMessage("Vestibulum facilisis purus nec", 30)); 
console.log("Task2:", formatMessage("Nunc sed turpis a felis in nunc fringilla", 15)); 
console.log("Task2:", formatMessage("Nunc sed turpis a felis in nunc fringilla", 41)); 