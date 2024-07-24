let hello = 'Hello World';
alert(hello);

let int1 = 1;
alert(int1);

let int2 = -10;
alert(int2);

let float1 = 3.14;
alert(float1);

alert(4 + 3);

alert(8 - 5);

alert(2 * 6);

alert(10 / 2);

alert('Hello' + 'World');

let str1 = 'Hello';
let str2 = 'World!!';
alert(str1 + str2);

let orange = 100;
let apple = 120;

if(orange < apple){
  alert('みかんの値段がリンゴより安い');
} else if(orange == apple){
  alert('みかんとリンゴが同じ値段');
} else{
  alert('みかんの値段がリンゴより高い')
}

let max = 100;
let num1 = 1;
let count = 0;

while(num1 < max){
  num1 = num1 * 2;
  count = count + 1;
}

alert('２を掛け続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

let i;
let num2 = 0;

for(i = 1; i < 11; i++){
  num2 = num2 + i;
}

alert('1から10まで足し算した結果は' + num2 + 'です')