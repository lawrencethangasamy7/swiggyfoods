let restarant = document.getElementById("restaurant-sec");
let urls = new URLSearchParams(window.location.search);

let urlResId = urls.get("id");
// console.log(urlResId);
let urlResName = urls.get("name");
// console.log(urlResName);
// console.log(urls, urlResId,urlResName);
// console.log(urls.get("id"), resArrayDt, urlResName);
let foodByShop = resArrayDt.filter((resItem) => {
  return resItem.foodname.includes(urlResName);
});
// let res=resArrayDt.find((e)=>e.foodname.includes(urlResName))
// console.log(foodByShop);
// console.log(foodByShop);
// console.log(foodByShop[0].foodname);
let resArray = foodByShop.map((restitem) => {
  //   console.log(restitem);
  let Briyanitem = `
            <div class="container">   
                <div class="content mt-5 mb-2"><div>
                    <h2 class="yourmind-food-head">${restitem.favShopname}</h2>
                    <p class="yourmind-food-para">${restitem.quality}</p>
                </div>
                <div class="list  onlinefood-row d-flex">
                    <div class="onlinefood-card">
                         <a href="">FIlter<i class="bi bi-filter"></i></a>
                    </div>      
                    <div class="onlinefood-card">
                         <a href="">Sort By<i class="bi bi-caret-down-fill"></i></a>
                    </div>      
                    <div class="onlinefood-card">
                         <a href="">Pure Veg</a>
                    </div>      
                    <div class="onlinefood-card">
                         <a href="">Less than 30 min</a>
                    </div>   
                    <div class="onlinefood-card">
                         <a href="">Less than Rs.300</a>
                    </div>   
                    <div class="onlinefood-card">
                         <a href="">RS.300-RS.600</a>
                    </div>
                </div>
                <div class="row" id="related-product">
                    <h2 class="yourmind-food-head pb-3 pt-2">100 restaurants to explore</h2>
                    ${restitem.relatedProductLists
                      .map((reslatedItem) => {
                        // console.log(reslatedItem);
                        return `<div class="col-sm-12 col-md-6 col-lg-3">
                                <div class=" restaurant-card"> 
                                    <div class="restaurant-img">
                                    <a href="dedail.html?id=${reslatedItem.id}&name=${reslatedItem.favShopname}">
                                        <img src=${reslatedItem.images} width=""></a>
                                    </div>
                                    <div class="restaurant-text p-2">
                                        <h4>${reslatedItem.favShopname}</h4>
                                        <i class="bi bi-star-fill">${reslatedItem.raiting}</i>
                                        <p>${reslatedItem.cusine}</p>
                                        <p>${reslatedItem.location}</p>
                                    </div>
                                </div>
                            </div>`;
                      })
                      .join("")}
                    
                </div>
            </div> 
               `;
  restarant.innerHTML = Briyanitem;
});

// let datass=res.relatedProductLists.map(()=>{
//     return
// })
