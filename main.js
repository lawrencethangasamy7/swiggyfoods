// What's on your mind?
let newrow = document.getElementById("hide");
// console.log(prodctDatalist)
// console.log(mindarray);
let showDt = mindarray
  .map(
    (item) =>
      `<div class="col-lg-2 col-md-4 col-sm-12"> 
            <div class="food-card text-center">
                <div class="mind-food-img">
                    <a href="briyani.html?id=${item.id}&name=${item.name}">
                        <img class="card-img" src=${item.image}>
                    </a>
                </div> 
            </div>
        </div>`
  )
  .join(" ");
newrow.innerHTML = showDt;

//  Top restaurant chains in Chennai
let chainsrow = document.getElementById("chains-add");
let chains = chainsArray
  .map(
    (item) =>
      `<div class="col-sm-12 col-md-6 col-lg-3">
            <div class=" restaurant-card">
                <div class="restaurant-img">
                    <a href="">
                        <img src=${item.imag} width="">
                    </a>
                </div>
                <div class="restaurant-text p-2">
                    <h4>${item.name}</h4>
                    <i class="bi bi-star-fill">${item.raiting}</i>
                    <p>${item.cusine}</p>
                    <p>${item.area}</p>
                </div>
            </div>
        </div>`
  )
  .join(" ");
chainsrow.innerHTML = chains;

// Restaurants with online food delivery in Chennai

let restauranrRow = document.getElementById("restaurant-sec");
let restaurant = restarantarray
  .map(
    (items) =>
      `<div class="col-sm-12 col-md-6 col-lg-3">
            <div class=" restaurant-card">
                  <div class="restaurant-img">
                    <a href="dedail.html?id=${items.id}&name=${items.name}">
                      <img src=${items.imag} width="">
                    </a>  
                  </div>
                  <div class="restaurant-text p-2">
                    <h4>${items.name} </h4>
                    <i class="bi bi-star-fill">${items.raiting}</i>
                    <p>${items.cusine} </p>
                    <p>${items.area} </p>
                </div>
            </div>
        </div>`
  )
  .join(" ");

restauranrRow.innerHTML = restaurant;

// let chains =chainsArray.map(allchains=>
//                 `<div class="col-sm-12 col-md-6 col-lg-3">
//                 <div class=" restaurant-card">
//                     <div class="restaurant-img">
//                         <a href="dedail.html?id=${allchains.id}&name=${allchains.name}">
//                             <img src=${allchains.imag} width="">
//                         </a>
//                     </div>
//                     <div class="restaurant-text p-2">
//                         <h4>${allchains.name}</h4>
//                         <i class="bi bi-star-fill">${allchains.raiting}</i>
//                         <p>${allchains.cusine}</p>
//                         <p>${allchains.area}</p>
//                     </div>
//                 </div>
//             </div>`
//     )
//  .join(' ');
//

// let deliveryrow=document.getElementById('delivery-sec')
// let deliverys=deliveryarray.map(alldelverys=>z
//         ` <div class="col-sm-12 col-md-6 col-lg-3">
//             <div class=" restaurant-card">
//                   <div class="restaurant-img">
//                     <a href="dedail.html?id=${alldelverys.id}&name=${alldelverys.name}">
//                       <img src=${alldelverys.imag} width="">
//                     </a>
//                   </div>
//                   <div class="restaurant-text p-2">
//                     <h4>${alldelverys.name} </h4>
//                     <i class="bi bi-star-fill">${alldelverys.raiting} </i>
//                     <p>${alldelverys.cusine} </p>
//                     <p>${alldelverys.area} </p>
//                 </div>
//             </div>
//         </div>`
//     )
//     .join('');
//     deliveryrow.innerHTML=deliverys

//  let restarant=document.getElementById('reatarant')
//  let urls=new URLSearchParams(window.location.search);

//  let urlRes =urls.get('id');

//     let resArray=resarray.map(function(restitem){ */}
//         if(urlRes == restitem.id){
//             let Briyanitem=
//                 `
//                  <div class="content mt-5 mb-2">
//                         <h2 class="yourmind-food-head">${restitem.favname}</h2>
//                          <p class="yourmind-food-para">${restitem.quality}</p>
//                  </div>
//                 `
//                 restarant.innerHTML =Briyanitem;
//                 console.log("sucee")
//         }
//         else{
//             console.log("err")
//         }
//     })
