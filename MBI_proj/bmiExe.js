

document.getElementById("doIt").addEventListener ("click", console.log("wtf"));
document.getElementById("doIt").addEventListener ("click", function calc(){

let wt= document.getElementById("wtInput").innerHTML;
let ht= document.getElementById("htInput").innerHTML;
let BMI = wt/(ht*ht)
console.log(typeof wt)
    if (BMI<=18.5){
       // document.getElementById("result").value= "underweight";//
        console.log("f")
     }else if (BMI>18.6 && BMI<24.9){
        //document.getElementById("result").value= "Normalweight";//
        console.log("r")
    }else if (BMI>25 && BMI<29.9){
       // document.getElementById("result").value= "Overweight";//
        console.log("3")
    }else if (BMI>=30){
       // document.getElementById("result").value= "Obesity";//
        console.log("4")
    }
}
)