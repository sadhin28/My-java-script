const age=51 ;
const price=500;
if(age<12){
    console.log('তুমি বারো বছরের ছোটো তাই তুমি ফ্রি খাইতে পারবা');
}
else if(age>=60){
    //50% discount
    const discount=price*50/100;
    console.log(discount);
    const payAmount=price-discount;
    console.log('আপনার বয়স ৬০ বছর বা তার বেশি তাই আপনি ৫০% ডিস্কাউন্ট পাইছেন। আপনার বিল এখন',payAmount);

}else if(age>=50){
    //25% discount
    const discount=price*25/100;
    console.log(discount);
    const payAmount=price-discount;
    console.log('আপনার বয়স ৫০ বছর বা তার বেশি তাই আপনি ৫০% ডিস্কাউন্ট পাইছেন। আপনার বিল এখন',payAmount);
}
else{
    console.log('আনার বিলঃ',price)
}
