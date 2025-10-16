//Q7: what is the different between event bubbling and event capturing in JavaScript?
//event propagation
<div id="parent">
  <button id="child">Click Me</button>
</div>
//1: event Capturing

//document ---> div ---> Button
//document → parent → child
// 👉 Event প্রথমে বাইরের এলিমেন্ট (document) থেকে শুরু করে ভিতরের দিকে নামে

//2: event Bubbling
//Button ---> div ---> document
//child → parent → document
//👉 Event টি ভিতর থেকে উপরের দিকে উঠে আসে
