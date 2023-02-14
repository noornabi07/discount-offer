document.getElementById('payment-btn').addEventListener('click', function(){
    const prices = getElementValue('prices-fixed');
    const payment = getElementValue('pay-amount')
    const inputText = getInputValue('input-field');
    
    
    if(inputText === 'disc30'){
        const discoutAmount = prices * 0.3;
        const discount = prices - discoutAmount;
        const payNow = discount + payment;
        setInnerText('pay-amount', payNow);
    }else{
        alert('please type a right code');
    }
})