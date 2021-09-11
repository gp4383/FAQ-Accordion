const closeBtn = document.querySelectorAll("#closebtn");
const minusbtn = document.querySelectorAll("#minusbtn");
const answer = document.querySelectorAll(".answer");

closeBtn.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    // answer.forEach((ans) => {
    //   ans.classList.remove("open");
    // });
    answer[index].classList.toggle("open");
    btn.classList.toggle("active");
    minusbtn[index].classList.toggle("active");
  });
});

minusbtn.forEach((bt, i) => {
  bt.addEventListener("click", function () {
    // answer.forEach((a) => {
    //   a.classList.remove("open");
    // });
    answer[i].classList.remove("open");
    closeBtn[i].classList.remove("active");
    minusbtn[i].classList.remove("active");
  });
});
