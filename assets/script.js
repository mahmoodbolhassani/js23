let _count = 1;
function _add() {
  let inpu = document.getElementById("inp").value;
  if (inpu == "" || inp == " ") {
    alert("please insert your data");
  } else {
    addValue(inpu);
  }
}
function addValue(val) {
  let _li = document.createElement("li");
  _count++;
  _li.setAttribute("id", "count" + _count);
  _li.innerHTML = `
<div class="row align-items-center">
                    <h2 class="col-6">${val}</h2>
                    <span class="col-1" onclick="_edit(this)"]>edit</span>
                    <span class="col-2" onclick="_remove(this)">remove</span>
                    <span class="col-3" onclick="_confirm(this)">edit-confirm</span>
                </div>
`;
  document.getElementById("list").appendChild(_li);
  document.getElementById("inp").value = null;
  document.getElementById("inp").focus();
}

function _remove(self) {
  if (confirm("are you sure")) {
    self.parentElement.parentElement.remove();
  }
}
let turn;
function _edit(self) {
  turn = self.parentElement.parentElement.getAttribute("id");
  document.getElementById("inp").value = self.previousElementSibling.innerText;
  document.getElementById("add").classList.add("d-none");
  document.getElementById("inp").classList.add("col-12");
  self.nextElementSibling.nextElementSibling.style.backgroundColor='yellow'
}
function _confirm(self) {
  document.querySelector("#" + turn + ">div>h2").innerText =
  document.getElementById("inp").value;
  document.getElementById("add").classList.remove("d-none");
  document.getElementById("inp").classList.remove("col-12");
  self.style.backgroundColor='white'
}