// Задача 4. Доставка товару
// Оголоси функцію getShippingCost(country), яка повинна перевіряти можливість доставки товару в країну користувача (параметр country) і повертати повідомлення про результат. Обов'язково використовуй інструкцію switch.

// Формат рядка, що повертається "Shipping to <country> will cost <price> credits", де замість <country> і <price> необхідно підставити відповідні значення.

// Список країн і вартість доставки:

// China — 100 кредитів
// Chile — 250 кредитів
// Australia — 170 кредитів
// Jamaica — 120 кредитів
// Зі списку видно, що доставка можлива не скрізь. Якщо зазначена країна відсутня у списку, то функція повинна повернути рядок "Sorry, there is no delivery to your country".

function getShippingCost(country){
    switch(country){
        case 'China' :
           return `Shipping to ${country} will cost 100 credits`;
            break;
        case 'Chile':
            return `Shipping to ${country} will cost 250 credits`;
            break; 
         case 'Australia':
            return `Shipping to ${country} will cost 170 credits`;
            break;
        case 'Jamaica':
            return `Shipping to ${country} will cost 120 credits`;
            break;
        default:
            return "Sorry, there is no delivery to your country"
        
        }
}


console.log("Task4:", getShippingCost("Australia")); 
console.log("Task4:", getShippingCost("Germany")); 
console.log("Task4:", getShippingCost("China")); 
console.log("Task4:", getShippingCost("Chile"));
console.log("Task4:", getShippingCost("Jamaica")); 
console.log("Task4:", getShippingCost("Sweden")); 