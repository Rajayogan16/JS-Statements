function natural()
{
    var n = parseInt(document.getElementById ("num").value);
    var sum = 0;
    for (let i =0;i<=n;i++)
    {
        sum = sum + i;
    }
    document.getElementById ("p1").innerHTML ="Sum of first"+" "+n+ " Natural numbers is :"+" "+sum;
}

function even()
{
   var initial = 2;
   var sum = 0;
   var n = parseInt(document.getElementById ("num").value);
  for (i = 1; i <= n; i++)
  {
      sum = sum + initial;
      initial = initial + 2;
  } 
  document.getElementById ("p1").innerHTML ="Sum of first"+" "+n+ " Even numbers is :"+sum;
}

function odd()
{
   var initial = 1;
   var sum = 0;
   var n = parseInt(document.getElementById ("num").value);
  for (i = 1; i <= n; i++)
  {
      sum = sum + initial;
      initial = initial + 2;
  } 
  document.getElementById ("p1").innerHTML ="Sum of first"+" "+n+ " Odd numbers is :"+sum;
}

function primefactor()
{
  var n = parseInt(document.getElementById ("prime").value);
  var store  = [], i, j, primes = [];
  for (i = 2; i <= n; ++i) 
  {
      if (!store [i]) 
        {
          primes.push(i);
          for (j = i << 1; j <= n; j += i) 
          {
              store[j] = true;
          }
      }
  }
    document.getElementById ("p7").innerHTML = "Prime numbers below"+" "+n+" "+"are"+" "+"("+primes+")";
}

function armstr()
{
var arm=0,a,num;
num=Number(document.getElementById("first").value);
temp=num;
while(temp > 0)
{
a=temp % 10;
temp=parseInt(temp/10); // convert float into Integer
arm = arm+a*a*a;
}
if(arm==num)
{
    document.getElementById ("p2").innerHTML ="Yes"+" "+num+" "+"is an ArmStrong Number";
}
else
{
    document.getElementById ("p2").innerHTML ="No"+" "+num+" "+"is Not an ArmStrong Number";
}
}

function fact()
{
var num = Number(document.getElementById("fact").value);
var factorial = 1;
while (num >= 1) {
   factorial = factorial * num;
   num--;
}
document.getElementById ("p3").innerHTML = "Factorial of the Above Number is"+" "+factorial;
}

function fibo()
{
        var answer = [];
        var x = 0;
        var y = 1;
        var z;
        var num = Number(document.getElementById("fibo").value);       
        answer.push(x);
        answer.push(y);
        var i = 2;
        while (i < num) 
        {
          z = x + y;
          x = y;
          y = z;
          answer.push(z);
          i = i + 1;
        }
        document.getElementById ("p4").innerHTML = "The First"+" "+num+" "+"Fibonacci Series"+" "+"("+answer+")";
}

function palin()
{
var a,no,b,temp=0;
no = Number(document.getElementById("palin").value);//120
b = no;//b = 120
while(no > 0)
{
  a = no % 10;//a = 120 % 10 = 0
  no = parseInt(no / 10);//no = 120/10 =  12 = 12
  temp = temp * 10 + a;//temp = 0*10 + 0 = 0
}
if(temp == b)//(0 == 12)
 {
  document.getElementById ("p5").innerHTML = b+" "+"is a Palindrome number";
 }
else
 {
  document.getElementById ("p5").innerHTML = b+" "+"is not a Palindrome number";
 }
}
 
function balance()
{
  var a = Number(document.getElementById("credit").value);
  var b = Number(document.getElementById("debit").value);
  
  switch(true)
  {
    case (a<b):
      {
       
        document.getElementById ("p6").innerHTML ="Insufficient fund"+"<br>"+"Only Rs"+" "+a+" "+"available in Your Account";
        break;
       
    };
   

    default :
      {
        var total=a-b;
        var balance=total;
        document.getElementById ("p6").innerHTML = "Your Balance is Rs"+" "+balance;
    };
    
}
 

}


