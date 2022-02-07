var n1=0;
var n2=1,n;
var f= prompt("enter limit");
f=parseInt(f);

document.write("series:")

for(i=1;i<=f;i++)
{
  document.write(n1);
  n=n1+n2;
  n1=n2;
  n2=n;
} 
  
