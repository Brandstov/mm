const cursor = document.getElementById("cursor");
const element = document.getElementById("sample-text");

document.addEventListener('mousemove', e => {
  cursor.style.top = e.pageY + "px";
  cursor.style.left = e.pageX + "px";
});