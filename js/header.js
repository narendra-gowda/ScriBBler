/* To toggle Sign-In Modal */
var signInBtn = document.getElementById('sign-in-btn');
var modal = document.getElementById('modal');
var close = document.getElementById('close-btn');

signInBtn.onclick = function () {
  modal.style.display = "flex";
}

close.addEventListener('click',function () {
  modal.style.display = "none";
});

window.onclick = function(event) {
  if(event.target == modal)
  modal.style.display = "none";
}