const balanceOutput = document.getElementById('balance_output');
const balanceInput = document.getElementById('balance_input');
const cashIn = document.getElementById('cashIn')
// send money field variables
const sendOutput = document.getElementById('send_output');
const sendInput = document.getElementById('send_input');
const send = document.getElementById('send')
// cashout field variables
const cashoutOutput = document.getElementById('cashout_output');
const cashoutInput = document.getElementById('cashout_input');
const cashout = document.getElementById('cashout')
// billpay field variables
const billpayOutput = document.getElementById('billpay_output');
const billpayInput = document.getElementById('billpay_input');
const billpay = document.getElementById('billpay');
// mobile recharge variable
const rechargeOutput = document.getElementById('recharge_output');
const rechargeInput = document.getElementById('recharge_input');
const recharge = document.getElementById('recharge');

// cash in function
cashIn.addEventListener('click',function(){
    // inValue = Number(balanceOutput.value) + Number(balanceInput.value)
    inValue = balanceOutput.value +'+'+ balanceInput.value
    balanceOutput.value = eval(inValue)
    if (balanceOutput.value =  eval(inValue)){
        balanceInput.value = null
    }
})

// send money function
send.addEventListener('click',function(){
    sendValue = sendOutput.value +'+'+ sendInput.value
    sendOutput.value = eval(sendValue)
    minusValue = balanceOutput.value+'-'+sendInput.value
    balanceOutput.value = eval(minusValue);
    if(sendOutput.value = eval(sendValue)){
        sendInput.value = null;
    }
})
//cashout function 

cashout.addEventListener('click',function(){
    cashoutValue = cashoutOutput.value +'+'+ cashoutInput.value
    cashoutOutput.value = eval(cashoutValue)
    repairBalance = balanceOutput.value+'-'+cashoutInput.value
    balanceOutput.value = eval(repairBalance)
    if(cashoutOutput.value = eval(cashoutValue)){
        cashoutInput.value = null
    }
})
//billpay function 
billpay.addEventListener('click',function(){
    billpayValue = billpayOutput.value +'+'+ billpayInput.value
    billpayOutput.value = eval(billpayValue)
    repairBalance = balanceOutput.value+'-'+billpayInput.value
    balanceOutput.value = eval(repairBalance)
    if(billpayOutput.value = eval(billpayValue)){
        billpayInput.value = null
    }
})
// recharge function 
recharge.addEventListener('click',function(){
    rachargeValue = rechargeOutput.value + '+' + rechargeInput.value 
    rechargeOutput.value = eval(rachargeValue)
    repairrechargeBalance = balanceOutput.value + '-' + rechargeInput.value
    balanceOutput.value = eval(repairrechargeBalance)
    if(rechargeOutput.value = eval(rachargeValue)){
        rechargeInput.value = null
    }
})