function getColor() {
  return "#" + Math.random().toString(16).slice(2, 8);
}
// getColor();
// sets background color style
function setBackground() {
  let bgColor = getColor();
  document.body.style.background = bgColor;
}
// setBackground();
// runs function on click
document.body.onkeyup = function (e) {
  setBackground();
  console.log("WTF!!");

  // setBackground();
};
