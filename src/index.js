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


  const citiesByConutry = {
    sa:['جدة', 'الرياض'],
    sy:['دمشق','حمص'],
    mo:['الدار البيضاء', 'مركش'],
    eg:['الاسكنداريه','القاهرة ']
  }

  document.querySelectorAll('select[name="cuntry"]').forEach( item =>{
       item.addEventListener('change', () =>{
           const conutry = item.value
           
           const cities = citiesByConutry[conutry]

           document.querySelectorAll('#paymentcities option').forEach(option => option.remove())

           const firstOption = document.createElement('option')
           const optionText = document.createTextNode('اختر مدينة')
           firstOption.appendChild(optionText)
           firstOption.setAttribute('value', '')
           firstOption.setAttribute('disabled', 'true')
           firstOption.setAttribute('selected', 'ture')

           const city_option = document.getElementById('paymentcities')
           city_option.appendChild(firstOption)

           cities.forEach(city =>{
            const newOption = document.createElement('option')
            const optionText = document.createTextNode(city)
            newOption.appendChild(optionText)
            newOption.setAttribute('value', city)
            city_option.appendChild(newOption)
           })
       })
  })


  document.querySelectorAll('#form-checkout input[name ="payment-method"]').forEach(item =>{
      item.addEventListener('change', () =>{
          const paymentMedthod = item.value;

          const creditCardInputs = document.querySelectorAll('#credit-card-info input ');

          if(paymentMedthod === "on-delivery"){
            creditCardInputs.forEach(input =>{
               input.style.display= 'none'
            })
          }else{
            creditCardInputs.forEach(input =>{
              input.style.display= 'block'
           })
          }
      })  
  })