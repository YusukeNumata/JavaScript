
var watch = {
 // canvasオブジェクトの取得
 canvas: document.getElementById("canvas"),

 onload: function() {
  watch.arc();
  //watch.dial();
  watch.second();
 },

 // 外枠の作成
 arc: function() {
  var ctx = watch.canvas.getContext("2d");
  var width = watch.canvas.width;
  var height = watch.canvas.height;

  ctx.beginPath();
  ctx.arc(width/2, height/2, width/2, 0, Math.PI*2, false);
  ctx.closePath();
  ctx.strokeStyle = "#00f";
  ctx.stroke();
 },

 // 時計の文字盤　未完
 dial: function() {
  var ctx = watch.canvas.getContext("2d");
  var width = watch.canvas.width;
  var height = watch.canvas.height;

  ctx.font = "normal 32px monospace";
  ctx.textAlign = "center";

  var maxnumber = 12;
  for (var i=1; i<=maxnumber; i++) {
  
    ctx.fillText(i, width/2, (height/maxnumber*i)-(height/maxnumber/4));

  };
 },

 //
 second: function() {
  var ctx = watch.canvas.getContext("2d");
  var width = watch.canvas.width;
  var height = watch.canvas.height;

  ctx.beginPath();
  ctx.moveTo(width/2, height/2);
  ctx.lineTo(width/2, 0);
  ctx.closePath();
  ctx.strokeStyle = "00f";
  ctx.stroke();
  alert("a");
 }

};

watch.onload();

