(function(){
  var tagsE=document.getElementsByTagName("a"),
  tags=[],
  box=document.getElementById("ball"),
  radius=180,
  angleX=Math.PI/180,
  angleY=Math.PI/180,
  fullLength=300,
  offsetLeft=box.offsetLeft,
  offsetTop=box.offsetTop,
  CX=box.offsetWidth/2,
  CY=box.offsetHeight/2,
  animated=false,
  cvs=document.querySelector("canvas"),
  ctx=cvs.getContext("2d");

  cvs.widht="600";
  cvs.height="600";
  cvs.style.zIndex=tagsE.length/2;
})
