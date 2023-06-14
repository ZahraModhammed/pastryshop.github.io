window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');
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


document.getElementById('copyright').innerHTML = 'جميع الحقوق محفوظة'+ new Date().getFullYear();


document.querySelectorAll('.size-option input[type="radio"]').forEach(item => {

item.addEventListener("change", () => {
  document.querySelectorAll('.size-option').forEach(i => {
        i.classList.remove('active')
  })
  item.parentNode.parentNode.classList.add("active")

})

})


document.querySelectorAll('.kind-option input[type="radio"]').forEach(item => {

  item.addEventListener("change", () => {
    document.querySelectorAll('.kind-option').forEach(i => {
          i.classList.remove('active')
    })
    item.parentNode.parentNode.classList.add("active")
  
  })
  
  })


  document.querySelectorAll('.qunatity').forEach( item => {
        item.addEventListener('change', () =>{
           const newQuantity = item.value
           const parent = item.closest('[data-product-info]')
           const pricePerUbit = parent.getAttribute('data-product-price')
           const totalPriceForProduct = newQuantity * pricePerUbit
           parent.querySelector(".total-price-for-prodcut").innerHTML = totalPriceForProduct + '$';
            
           let totelPriceForAllProduct = 0;
           document.querySelectorAll('[data-product-info]').forEach(product =>{
                const priceForUnite = product.getAttribute('data-product-price')
                const QuantityAll = product.querySelector ('.qunatity').value
                const totalPriceForAllProduct1 = priceForUnite * QuantityAll

                totelPriceForAllProduct = totelPriceForAllProduct + totalPriceForAllProduct1;
           })
            document.getElementById('price-for-all-products').innerHTML = totelPriceForAllProduct + '$'
        })
  })

  document.querySelectorAll('[data-remove-from-card]').forEach( item => {

  item.addEventListener('click', () => {
      item.closest('[data-product-info]').remove()

      calculateTotalPrice()
  })

  })

  function calculateTotalPrice(){
    let totelPriceForAllProduct = 0;
    document.querySelectorAll('[data-product-info]').forEach(product =>{
         const priceForUnite = product.getAttribute('data-product-price')
         const QuantityAll = product.querySelector ('.qunatity').value
         const totalPriceForAllProduct1 = priceForUnite * QuantityAll

         totelPriceForAllProduct = totelPriceForAllProduct + totalPriceForAllProduct1;
    })
     document.getElementById('price-for-all-products').innerHTML = totelPriceForAllProduct + '$'
  }