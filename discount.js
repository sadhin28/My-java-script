const price = 4000;
if( price >=5000){
    //10% discount
    const discounts=price*10/100;
    console.log(discounts)
    const payAmount = price-discounts;
    console.log('Pay Your Bill:',payAmount);
}
else if(price>2500){
    //5% discoungt
    const discounts5=price*5/100;
    console.log(discounts5)
    const payAmount5=price-discounts5;
    console.log(payAmount5);
}
else{
    console.log(price)
}