const fruitType=prompt('Insert a fruit');

switch(fruitType){

case 'Bananas':
  document.getElementById("result").innerHTML="0,99$";
   break;
case 'Oranges':
    document.getElementById("result").innerHTML="0,79$";
   break;
case 'Apples':
    document.getElementById("result").innerHTML="0,89$";
   break;
case 'Cherries':
    document.getElementById("result").innerHTML="2,99$";
   break;
case 'Grapes':
    document.getElementById("result").innerHTML="3,99$";
   break;
default:
    document.getElementById("result").innerHTML="Wrong fruit mate..";
       break;
}
