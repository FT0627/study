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

let alertString;

alertString = addString("WebCamp");

alert(alertString);

function addString(strA){
  let addStr = "Hello " + strA;
  return addStr;
}

let promptStr = prompt('何か好きな文字を入力してください。');

alert(promptStr);



let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください。');
while ((user_hand != 'グー') && (user_hand != 'チョキ') && (user_hand != 'パー') && (user_hand != null)){
  alert('グー・チョキ・パーのいずれかを入力して下さい');
  user_hand = prompt('ジャンケンの手をグー、チョキ、パーから選んでください。')
}
let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand != null){
  alert('あなたの選んだ手は' + user_hand + 'です。 \nJavaScriptの選んだ手は' + js_hand + 'です。\n結果は' + judge + 'です。');
} else {
  alert("またチャレンジしてね。")
}


function getJShand(){
  let js_hand_num = Math.floor( Math.random() * 3 );
　let hand;

  if(js_hand_num == 0){
    hand = "グー";
  } else if(js_hand_num == 1){
    hand = "チョキ";
  } else if(js_hand_num == 2){
    hand = "パー";
  }

  return hand;
}

function winLose(user, js){
  let winLoseStr;

  if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }

  return winLoseStr;
}