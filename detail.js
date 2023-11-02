let totelorder = document.getElementById("details-sec");
let urlse = new URLSearchParams(window.location.search);
// console.log(urlse);
let urlsId = urlse.get("id");
// console.log(urlse.get("id"));
let urlName = urlse.get("name");
// console.log(urlName);
var countValue = 0;

let typeFoodsDt = typefoods.filter((resItem) => {
  return resItem.shopName.includes(urlName);
});
// console.log(typeFoodsDt);
let detaisArray = typeFoodsDt.map((allDetail) => {
  // console.log(allDetail)
  let detailitem = `   <div class="containers mt-4">
                    <div class="row pt-4" id="detail-row">
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="detail-card">
                                <h4>${allDetail.shopName}</h4>
                                <p>${allDetail.cusine}</p>
                                <p>${allDetail.location}</p>
                            </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-sm-12">
                            <div class="detail-card1">
                                <i class="bi bi-star-fill">${
                                  allDetail.raitng
                                }</i>
                                <p>${allDetail.numrait}</p>
                            </div>
                        </div> 
                    </div>
                    <div class="row pt-4" id="detail-row">
                        <div class="col detail-icon">
                            <i class="bi bi-alarm-fill"><span>${
                              allDetail.offers.timeicon
                            }</span></i>
                            <div class="detail-off">
                                <h4>${allDetail.offers.offnumber}</h4>
                                <p>${allDetail.offers.offtitle}</p>
                            </div>
                        </div>
                        <div class="col detail-icon">
                            <div class="detail-card1">
                                <i class="bi bi-currency-dollar"><span>${
                                  allDetail.offers.salaicon
                                }</span></i>
                                <div class="detail-off">
                                    <h4>${allDetail.offers.offchan}</h4>
                                    <p>${allDetail.offers.offtitles}</p>
                                </div>
                            </div>
                        </div>
                    </div> 
                    ${allDetail.detailtype
                      .map((w, index) => {
                        adding = (order) => {
                          console.log(order);
                        };
                        return `
                            <div class="row pt-4" id="detail-row">
                                <div class="col-lg-9 col-md-8 col-sm-12">
                                    <div class="detail-add">
                                        <i class="bi bi-star-fill detail-add-icon">${w.ordericon}</i>
                                        <h4>${w.ordername}</h4>
                                        <i class="bi bi-currency-dollar"><span>${w.orderrate}</span></i>
                                        <p>${w.ordertitle}</p>
                                    </div>  
                                </div>
                                <div class="col-lg-3 col-md-4 col-sm-12">
                                    <div class="addclicl-but">
                                        <div class="detail-card1 lsjo">
                                            <img src=${w.orderimag} alt="briyani"  width="60%">
                                        </div>  
                                        
                                    </div>       
                                </div>
                                    <button class="add-btn-click addtoCartbtn" type="submit">Add</button>
                            </div>`;
                      })
                      .join(" ")}
            </div>`;
  totelorder.innerHTML = detailitem;
});




// let addtocrt = document.querySelector("#addtocrt");
let product = document.querySelector("#products");
let addtoCartbtn = document.querySelectorAll(".addtoCartbtn");

let totalProductCount = document.querySelector("#total-products-count");

let addtocartDiv = document.createElement("div");
addtocartDiv.classList.add("addtocartDiv");
totalProductCount.appendChild(addtocartDiv);

let productCount = document.createElement("h4");
addtocartDiv.appendChild(productCount);

let totalProductPrice = document.createElement("h4");
addtocartDiv.appendChild(totalProductPrice);

let cartTotalCount = 0;
let cartTotalPrice = 0;

for (let i = 0; i < addtoCartbtn.length; i++) {
  let arryobjLength = typeFoodsDt[i].detailtype.length;

  for (let j = 0; j < arryobjLength; j++) {
    addtoCartbtn[j].addEventListener("click", function () {
      atc(
        typeFoodsDt[i].detailtype[j].ordername,
        typeFoodsDt[i].detailtype[j].orderrate,
        typeFoodsDt[i].detailtype[j].id
      );
    });
  }
}

function atc(productName, productprice, id) {
  product.style.display = "block";
  addtocrt.style.display = "block";

  let pPrice = productprice;
  let quantity = 1;
  let totalamount = pPrice * quantity;

  cartTotalCount = cartTotalCount + quantity;
  productCount.textContent = `Total Products :${cartTotalCount}`;

  cartTotalPrice = cartTotalPrice + pPrice;
  totalProductPrice.textContent = `Total Price :${cartTotalPrice}`;

  let div = document.createElement("div");
  div.classList.add("totalcard");
  div.setAttribute("id", id);
  product.appendChild(div);

  let para = document.createElement("p");
  div.appendChild(para);
  para.innerText = productName;

  let amount = document.createElement("h4");
  div.appendChild(amount);
  amount.textContent = totalamount;

  let buttonMinus = document.createElement("button");
  buttonMinus.classList.add("second-minus");
  buttonMinus.onclick = function () {
    if (quantity > 1) {
      quantity = quantity - 1;
      buttonQuantity.innerText = quantity;
      amount.textContent = pPrice * quantity;

      cartTotalCount = cartTotalCount - 1;
      productCount.textContent = `Total Products :${cartTotalCount}`;

      cartTotalPrice = cartTotalPrice - pPrice;
      totalProductPrice.textContent = `Total Price :${cartTotalPrice}`;
    } else {
      buttonMinus.parentElement.remove();

      cartTotalCount = cartTotalCount - 1;
      productCount.textContent = `Total Products :${cartTotalCount}`;

      cartTotalPrice = cartTotalPrice - pPrice;
      totalProductPrice.textContent = `Total Price :${cartTotalPrice}`;

      if (cartTotalCount == 0 && cartTotalPrice == 0) {
        product.style.display = "none";
        addtocrt.style.display = "none";
      }
    }
  };
  buttonMinus.innerText = "-";
  div.appendChild(buttonMinus);

  let buttonQuantity = document.createElement("button");
  buttonQuantity.innerText = quantity;
  div.appendChild(buttonQuantity);

  let buttonPlus = document.createElement("button");
  buttonPlus.classList.add("second-plus");
  buttonPlus.onclick = function () {
    quantity = quantity + 1;
    buttonQuantity.innerText = quantity;

    amount.textContent = pPrice * quantity;

    cartTotalCount = cartTotalCount + 1;
    productCount.textContent = `Total Products :${cartTotalCount}`;

    cartTotalPrice = cartTotalPrice + pPrice;
    totalProductPrice.textContent = `Total Price :${cartTotalPrice}`;
  };
  buttonPlus.innerText = "+";
  div.appendChild(buttonPlus);
}











// let incrementBtn = document.querySelectorAll(".addFood");
// let decrementBtn = document.querySelectorAll(".removeFood");

// for (var i = 0; i < incrementBtn.length; i++) {
//   var l = incrementBtn[i].addEventListener("click", function (event) {
//     var buttonClicked = event.target;
//     var input = buttonClicked.parentElement.children[1];
//     var inputVal = input.value;
//     var newVal = parseInt(inputVal) + 1;
//     input.value = newVal;
//   });
// }
// for (var i = 0; i < decrementBtn.length; i++) {
//   decrementBtn[i].addEventListener("click", function (event) {
//     var buttonClicked = event.target;
//     var input = buttonClicked.parentElement.children[1];
//     var inputVal = input.value;
//     var newVal = parseInt(inputVal) - 1;
//     if (newVal <= 0) {
//       newVal = 0;
//     }
//     input.value = newVal;
//   });
// }

// ======================================

// let cartItems = [];

// function addToCart(productName, price) {
//     cartItems.push({ productName, price });
//     updateCartDisplay();
// }

// function updateCartDisplay() {
//     const cartList = document.getElementById('cart');
//     cartList.innerHTML = '';

//     cartItems.forEach(item => {
//         const listItem = document.createElement('li');
//         listItem.textContent = `${item.productName} - $${item.price.toFixed(2)}`;
//         cartList.appendChild(listItem);
//     });
// }

// =====================================

// let incrementBtn = document.querySelectorAll('.addFood');
// let decrementBtn = document.querySelectorAll('.removeFood');

// for (var i = 0; i < incrementBtn.length; i++) {
//    var l= incrementBtn[i].addEventListener('click', function (event) {
//         var buttonClicked = event.target;
//         var input = buttonClicked.parentElement.children[1];
//         var inputVal = input.value;
//         var newVal = parseInt(inputVal) + 1;
//         input.value = newVal;
//     });
// }
// for (var i = 0; i < decrementBtn.length; i++) {
//     decrementBtn[i].addEventListener('click', function (event){
//         var buttonClicked = event.target;
//         var input = buttonClicked.parentElement.children[1];
//         var inputVal = input.value;
//         console.log(inputVal);
//         var newVal = parseInt(inputVal) -1;
//         if(newVal <= 0){
//             newVal = 0;
//         }
//         input.value = newVal;
//     });
// }

// let addToCartBtns = document.querySelectorAll('.add-btn-click');
// var arrVal = [];
// for (var i = 0; i < addToCartBtns.length; i++) {
//     addToCartBtns[i].addEventListener('click', function (event) {
//         event.preventDefault();
//         var buttonClicked = event.target;
//         var input = buttonClicked.parentNode;
//         console.log(input)
//         arrVal.push({input})
//         console.log(arrVal)
//         let res = JSON.stringify(arrVal)
//         var newObj = localStorage.setItem("productList", res);
//         console.log(newObj)
//     });
// }

// $(function() {
//     $('.food-container').click( function() {
//         var num = $(this).find('.qty-icon');
//         num.text( parseInt(num.text()) + 1 );
//     });
// });

// function addItem(name){
//     console.log(name)
// }
