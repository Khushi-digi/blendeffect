const cursor=document.querySelector("#cursor")
const main=document.querySelector("#main");

main.addEventListener("mousemove",function(dets){
    // console.log(dets.x,dets.y)
    cursor.style.left=dets.x+"px";
    cursor.style.top=dets.y+"px";
})
document.querySelector("#overlay").addEventListener("mousemove",function(dets){
  document.querySelector("video").style.scale=1
  document.querySelector("video").style.opacity=1
  document.querySelector("video").style.left=(dets.x-485)+"px"
  document.querySelector("video").style.top=(dets.y-300)+"px"
  cursor.style.opacity=0;
})
document.querySelector("#overlay").addEventListener("mouseleave",function(dets){
  document.querySelector("video").style.scale=0
  document.querySelector("video").style.opacity=0
  document.querySelector("video").style.left=(dets.x-485)+"px"
  document.querySelector("video").style.top=(dets.y-300)+"px"
  cursor.style.opacity=1;
})