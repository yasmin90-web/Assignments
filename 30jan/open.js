//Q1 Fibonacci no

var a=prompt("enter the number");
 a=parseInt(a);
let n1=0,n2=1,n3=2;
   for(i=1;i<a;i++)
{
  console.log(n1);
   n3=n1+n2;
   n1=n2;
   n2=n3;
}




//Q2.prime no


  n=parseInt(prompt("Enter a number"));

  for(j=2;j<=n;j++){
      let p =1;
       let i =2;

     while(i<j){
      if(parseInt(j % i)==0){
      p=0;
  break;
 }
  i++;
}

 if(p==1){

    console.log("number is prime:"+j);
  }
}

