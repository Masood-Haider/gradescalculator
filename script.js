
var x=+prompt("enter your marks from 100" ,"0");

if(x>100){
    alert("sorry brother aap mahan ho");
}
else if(x>=90){
    alert("Congrats you have grade A and your number " +x);
}
else if(x>=80){
    alert("you have grade B and your number "+x);
}
else if(x>=70){
    alert("you have grade C and your number "+x);
}
else if(x>=60){
    alert("you have grade D and your number "+x);
}
else if(x<60){
    alert("you fail grade F and your number "+x);
}
else{
    alert("either your marks were not in range or incorrectly typed try again");
}