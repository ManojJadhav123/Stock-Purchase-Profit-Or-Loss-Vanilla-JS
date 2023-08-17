const initialPrice = document.querySelector("#initial-price");
const stocksQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const outputBox = document.querySelector("#output");

submitBtn.addEventListener("click" , submitHandler);

function submitHandler(){
    const ip = Number(initialPrice.value);
    const qty = Number(stocksQuantity.value);
    const curr = Number(currentPrice.value);

    calculateProfitAndLoss(ip, qty, curr);
}

function calculateProfitAndLoss(initial, quantity, current){
    if(initial > current){
        const loss = (initial - current) * quantity;
        const lossPercentage = (loss / initial) * 100;
        showOutput(`Hey the loss is ${loss} and the loss percentage is ${lossPercentage}`);
    }
    else if(current > initial){
        const profit = (current - initial) * quantity;
        const profitPercentage = (profit / initial) * 100;
        showOutput(`Hey the profit is ${profit} and the profit percentage is ${profitPercentage}`);
    }
    else{
        showOutput(`No pain no gain and no gain no pain`);
    }
}

function showOutput(message){
    outputBox.innerHTML = message;
}
