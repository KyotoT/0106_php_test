let timerId;

// Q1
function show(){
  document.getElementById('message').textContent = "Personal homepage hypertext preprocessor"
}
// Q2
function show2(){
  document.getElementById('message2').textContent = "クライアントサイドプログラム"
}
// Q3
function show3(){
  document.getElementById('message3').textContent = "サーバーサイドプログラム"
}
// Q4
function show4(){
  document.getElementById('message4').textContent = "「xxx.php」"
}
// Q5
function show5(){
  document.getElementById('message5').textContent = "<?php 実行する内容の記述 ；?>"
}
// Q6
function show6(){
  document.getElementById('message6').textContent = "「”」か「’」で囲む"
}
// Q7
function show7(){
  document.getElementById('message7').textContent = "変数名の前に「＄」をつける"
}

// Q8
function show8(){
  document.getElementById('message8').textContent = "for ($i = 0; $i < 30; $i++) {   echo $i;   }"
}
// Q9
function show9(){
  document.getElementById('message9').textContent = "$score = 60; if($score >= 70){ echo “合格です！おめでとうございます！”; } else ($score < 70){ echo “不合格です！がんばりましょう！”; }"
}

// Q10
function show10(){
  document.getElementById('message10').textContent = '<form action="thanks.php" method="post">　<input name="email" type="text" value="メールアドレス" size="10">'
}

// Q11
function show11(){
  document.getElementById('message11').textContent = "getを使うとURLパラメーターで値が送られるのに対し、postは裏で処理をしている。　そのため、URLには情報が表示されなくなるのでセキュリティを考えて、　お客様の情報を扱うメールフォームでは、postを使う。"
}

// Q12
function show12(){
  document.getElementById('message12').textContent = '<?php　$s = mysqli_connect("localhost","root","ikb4f") or die("失敗です");　print "成功です！！";　mysqli_close($s);　?>'
}

// Q13
function show13(){
  document.getElementById('message13').textContent = 'htmlspecialchars関数'
}
