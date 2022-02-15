// document.getElementById('sixteenGB').addEventListener('click', function () {

//     // const memoryCost = document.getElementById('memory-cost');
//     // memoryCost.innerText = 200;
//     // const bestPrice = document.getElementById('best-price').innerText;
//     // const memoryPrice = document.getElementById('memory-cost').innerText;
//     // const storagePrice = document.getElementById('storage-cost').innerText;
//     // const delivaryPrice = document.getElementById('delivery-cost').innerText;
//     // const totalPrice = parseFloat(bestPrice) + parseFloat(delivaryPrice) + parseFloat(storagePrice) + parseFloat(memoryPrice);
//     // const total = document.getElementById('total-price');
//     // total.innerText = totalPrice;
//     updatePrice('memory-cost',200);

// });




// document.getElementById('ssd3').addEventListener('click',function(){

//     updatePrice('storage-cost',500);
// });

// document.getElementById('paid-delivery').addEventListener('click',function(){
//         updatePrice('delivery-cost',20);
// });
// document.getElementById('paid-delivery').addEventListener('click',function(){
//         updatePrice('delivery-cost',20);
// });

onClick('sixteenGB','memory-cost',200);
onClick('eightGB','memory-cost',100);
onClick('ssd1','storage-cost',0);
onClick('ssd2','storage-cost',200);
onClick('ssd3','storage-cost',400);

function onClick(clickId,updateId,price){
    document.getElementById(clickId).addEventListener('click',function(){
        updatePrice(updateId,price);
});
};




function updatePrice(itemId,price) {


    // document.getElementById('sixteenGB').addEventListener('click', function () {

        const memoryCost = document.getElementById(itemId);
        memoryCost.innerText = price;
        const bestPrice = document.getElementById('best-price').innerText;
        const memoryPrice = document.getElementById('memory-cost').innerText;
        const storagePrice = document.getElementById('storage-cost').innerText;
        const delivaryPrice = document.getElementById('delivery-cost').innerText;
        const totalPrice = parseFloat(bestPrice) + parseFloat(delivaryPrice) + parseFloat(storagePrice) + parseFloat(memoryPrice);
        const total = document.getElementById('total-price');
        total.innerText = totalPrice;

    
};

const fakeCode = "pHero";
document.getElementById("apply-btn").addEventListener("click", function(){
    const code = document.getElementById("promo-input").value;
    if(code === fakeCode){
        const total = document.getElementById("total-price");
        let totalPrice = parseFloat(total.innerText);

        const discount = (totalPrice*20)/100;

        totalPrice = totalPrice - discount;

        total.innerText = totalPrice;

    } else{

    }
})





// document.getElementById('eightGB').addEventListener('click', function () {

//     const memoryCost = document.getElementById('memory-cost');
//     memoryCost.innerText = 100;
//     const bestPrice =document.getElementById('best-price').innerText;
//     const memoryPrice =document.getElementById('memory-cost').innerText;
//     const storagePrice =document.getElementById('storage-cost').innerText;
//     const delivaryPrice =document.getElementById('delivery-cost').innerText;
//     const totalPrice =parseFloat(bestPrice)+parseFloat(delivaryPrice)+parseFloat(storagePrice)+parseFloat(memoryPrice);
//     const total =document.getElementById('total-price');
//     total.innerText=totalPrice;

// });