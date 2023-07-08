let option=['rock','sensier','paper'];
let output;

function play(){

   let userchoise=prompt('enter text between (rock,senseier,paper)').toLowerCase();

   if(!option.includes(userchoise)){
  alert('try again that text thos not exist:');
   play();
   return;

   }
   let compchoise=option[Math.floor(Math.random()*option.length)];
   if (userchoise==compchoise){
      output="you loose try again !";
      console.log(output);
   }else if(
      (userchoise==='rock' && compchoise==='sensier') ||
      (userchoise==='sensier' && compchoise==='paper')||
      (userchoise==='paper' && compchoise==='rock')
   ){
      output='you win ';
      console.log(output);
   }else{
      output='you lost';
      console.log(output);
   }
 let playagin=confirm("do you want to play again?");
 if (playagin){
   play();
 }else{
   console.log('thankyou for play')
 }


}
