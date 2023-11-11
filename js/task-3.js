// Задача 3. Перевірка спаму

// Функція checkForSpam(message) приймає рядок (параметр message), перевіряє його на вміст заборонених слів spam і sale, і повертає результат перевірки. Слова в рядку параметра message можуть бути в довільному регістрі, наприклад SPAM або sAlE.

// Доповни код функції таким чином, що:

// Якщо знайдено заборонене слово (spam або sale), то функція повертає буль true
// Якщо в рядку відсутні заборонені слова, функція повертає буль false

function checkForSpam(message){
    const lowerMessage = message.toLowerCase();
    const includesMessage = lowerMessage.includes("spam") || lowerMessage.includes("sale");
    return includesMessage
}

console.log("Task3:", checkForSpam("Latest technology news")); 
console.log("Task3:", checkForSpam("JavaScript weekly newsletter")); 
console.log("Task3:", checkForSpam("Get best sale offers now!"));
console.log("Task3:", checkForSpam("Amazing SalE, only tonight!")); 
console.log("Task3:", checkForSpam("Trust me, this is not a spam message")); 
console.log("Task3:", checkForSpam("Get rid of sPaM emails. Our book in on sale!")); 
console.log("Task3:", checkForSpam("[SPAM] How to earn fast money?")); 
