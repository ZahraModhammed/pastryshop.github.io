
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle');
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/style.css';
import '@fortawesome/fontawesome-free/js/all';
console.log("hello, everyone");





const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))


document.querySelectorAll('.add-to-cart-btn').forEach(item =>{
  item.addEventListener("click", ()=>{
     alert('تم اضافة المنتج الى عربة الشراء')
  });
});
