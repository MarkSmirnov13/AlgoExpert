/**
 * Требуется выдать запрошенную сумму купюрами в рублях начиная от более крупных к более мелким. 
   Купюры существуют 50 руб, 100 руб, 500 руб, 1000 руб, 5000 руб. Если выдать данную сумму нельзя — вывести сообщение об ошибке. 
 * @param {number} money
 * @param {object} coins
 * @returns {[number]}
 *
 */

export const giveMyMoney = (money, coins) => {
 	let needCoins = [], minCoins = new Array(money + 1); minCoins[0] = 0;

    // перебираем все суммы до заданной суммы (можно начать с мин.купюры)
    for (let sum = 1; sum <= money; sum++) {     

        // по умолчанию эта сумма не для выдачи
        minCoins[sum] = Number.MAX_VALUE;

        // перебираем все купюры
        for (let coin = 0; coin < coins.length; coin++) {
            if (sum >= coins[coin].val && minCoins[sum - coins[coin].val] + 1 < minCoins[sum]) {

                // нашли способ выдать сумму sum
                minCoins[sum] = minCoins[sum - coins[coin].val] + 1;
            }
        }
    }
  
    // Если заданную сумму нельзя разложить по заданным купюрам
    if (minCoins[money] === Number.MAX_VALUE) { return []; }
  
    // minCoins - хранит минимальное кол-во купюр, ктр нужны для выдачи заданной суммы
    let sum = money;
    while (sum > 0) {
        let curSum = sum;
        for (let coin = 0; coin < coins.length; coin++) {
            let isCoinExist = coins[coin].count > 0;
            if (isCoinExist && sum >= coins[coin].val && (minCoins[sum] === minCoins[sum - coins[coin].val] + 1 || minCoins[sum] === minCoins[sum - coins[coin].val])) {                                  
                if (!needCoins[coin]) {
                    needCoins[coin] = 0;
                }
                needCoins[coin]++;  
                sum -= coins[coin].val;
                coins[coin].count -= 1;               
                break;
            }
          console.log(coin, needCoins)
        }

        if (curSum === sum) {
            needCoins = [];
            break; // не хватает купюр
        }
    }
  
    return needCoins;
}

let coins = [ 
    { val: 25, count: 10 }, 
    { val: 30, count: 10 }, 
    { val: 50, count: 1 },
    { val: 100, count: 1 },
];

const money = 280;
const needCoins = giveMyMoney(money, coins);

let res = "", controlSum = 0;
if (needCoins.length) {
    needCoins.forEach((item, ind) => {
        controlSum += item*coins[ind].val;
        const symbol = ind < needCoins.length-1 ? " + " : "";
        res += (item + "*" + coins[ind].val + symbol);
    });
}

console.log(res ? `Control sum ${controlSum} must be the same as input sum ${money}!`: "");
console.log(res ? `${money} = ${res}` : "Введена неверная сумма или недостаточно купюр в банкомате");