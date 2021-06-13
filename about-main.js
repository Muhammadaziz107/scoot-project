const items = document.querySelectorAll(".faqs__btn");
 
function toggleAccordion(){
  this.classList.toggle('faqs__btn--active');
}
 
items.forEach(item => item.addEventListener('click', toggleAccordion));