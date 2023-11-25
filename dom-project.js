function changeText(){
   const text = document.querySelector('.js-subscribe');

   if(text.innerText === 'Subscribe'){
    text.innerHTML = 'Subscribed';
    text.classList.add('js-test');
   } else {
    text.innerHTML = 'Subscribe';
    text.classList.remove('js-test');
   }
}

function calculateOrder() {
    const orderValue = document.querySelector('.order');
    let value = Number(orderValue.value);

    if(value < 40 ){
        value = value +10;
       
    }
    document.querySelector('.js-order').innerHTML = `$${value}`;

    
}
function handleCostKeyDown(event) {
    if(event.key === 'Enter'){calculateOrder();}
}