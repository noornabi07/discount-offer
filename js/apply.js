document.getElementById('apply-btn').addEventListener('click', function(){
    // const priceValue = document.getElementById('prices');
    // const priceValueString = priceValue.innerText;
    // const priceValueNumber = parseInt(priceValueString);
    
    // const discount = priceValueNumber * 0.3;
    // const totalPay = priceValueNumber - discount;
    // // console.log(totalPay);

    // const paymentValue = document.getElementById('pay-amount');
    // const paymentValueString = paymentValue.innerText;
    // const paymentValueNumber = parseInt(paymentValueString);
    
    // const currentPay = totalPay + paymentValueNumber;
    // paymentValue.innerText = currentPay;

    const prices = getElementValue('prices');
    const discount = prices * 0.3;
    const currentPrices = prices - discount;
    console.log(currentPrices);

    const payment = getElementValue('pay-amount');
    const currentPayment = currentPrices + payment;
    setInnerText('pay-amount', currentPayment);

})