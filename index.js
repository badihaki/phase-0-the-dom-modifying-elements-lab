// Write your code here!
// no longer has main#main node
const main = document.getElementById("main");
main.remove();
// has newheader variable that points to node 'h1#victory'
// 'YOUR-NAME is the champion' string in h1#victory
const newHeader=document.createElement("h1");
newHeader.id="victory";
newHeader.textContent="Haki is the champion!";
document.append(newHeader);