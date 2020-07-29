//using selectors inside the element
// traversing the dom

btns = document.querySelectorAll('.question-btn');

btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    console.log(e.currentTarget);
  });
});
