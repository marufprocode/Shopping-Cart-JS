const plusMinusBtnFunc = (isIncrease, productID) => {
    const cartNumFld = document.getElementById(productID);

    if (isIncrease && cartNumFld.value<10){
        cartNumFld.value ++;
    }
    else if(isIncrease === false && cartNumFld.value>1){
        cartNumFld.value --;
    }
}

const plusMinusAndUpdatePrice = (productPriceID, inputFldId, productPrice) => {
    const productPriceArea = document.getElementById(productPriceID);
    const inputFldValue = document.getElementById(inputFldId);
    const newPrice = parseInt(inputFldValue.value)*productPrice;
    productPriceArea.innerText = newPrice;
    const phonePriceId = document.getElementById('iphone-price');
    const casePriceId = document.getElementById('case-price');
    const subTotalId = document.getElementById('sub-total');
    const newSubTotal = parseFloat(phonePriceId.innerText)+parseInt(casePriceId.innerText);
    subTotalId.innerText = newSubTotal;    
    const taxId = document.getElementById('tax');
    const newTax = (newSubTotal*0.05).toFixed(2);
    taxId.innerText = newTax;    
    const totalPriceId = document.getElementById('total-price');
    const newTotalPrice = parseFloat(newTax)+newSubTotal;
    totalPriceId.innerText = newTotalPrice;
}

document.getElementById('phone-cart-plus').addEventListener('click', function(){
    plusMinusBtnFunc(true, 'phone-cart-field');
    plusMinusAndUpdatePrice('iphone-price', 'phone-cart-field', 1219);
})

document.getElementById('phone-cart-minus').addEventListener('click', function(){
    plusMinusBtnFunc(false, 'phone-cart-field');
    plusMinusAndUpdatePrice('iphone-price', 'phone-cart-field', 1219);
})

document.getElementById('phone-cart-field').addEventListener('change', function(){
    plusMinusBtnFunc('', 'phone-cart-field');
    plusMinusAndUpdatePrice('iphone-price', 'phone-cart-field', 1219);
})
document.getElementById('case-cart-plus').addEventListener('click', function(){
    plusMinusBtnFunc(true, 'case-cart-field');
    plusMinusAndUpdatePrice('case-price', 'case-cart-field', 59);
})

document.getElementById('case-cart-minus').addEventListener('click', function(){
    plusMinusBtnFunc(false, 'case-cart-field');
    plusMinusAndUpdatePrice('case-price', 'case-cart-field', 59);
})

document.getElementById('case-cart-field').addEventListener('change', function(){
    plusMinusBtnFunc('', 'case-cart-field');
    plusMinusAndUpdatePrice('case-price', 'case-cart-field', 59);
})

// Shopping-Cart-Qty-Plus-Minus-Functionality-End


    

