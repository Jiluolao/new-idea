window.onload = function(){
  var oDiv = document.getElementById("div1");
  var oImg0 = document.getElementById("img0");
  var oImg1 = document.getElementById("img1");
  oDiv.onmousedown = function(e){
    var ev = e||event;
    // 计算机鼠标点击位置距离div左上角的距离
    var disX = ev.clientX-oDiv.offsetLeft;
    var disY = ev.clientY-oDiv.offsetTop;
    oImg0.style.display = "block";
    oImg1.style.display = "none";
    document.onmousemove = function(e){
      var ev = e||event;
      var l = ev.clientX-disX;
      var t = ev.clientY-disY;
      oDiv.style.left = l+"px";
      oDiv.style.top = t+"px";
    }
    document.onmouseup = function(){
      oImg0.style.display = "none";
      oImg1.style.display = "block";
      document.onmousemove = null;
      document.onmouseup = null;
    }
  }
}
