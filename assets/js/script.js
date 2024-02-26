// const delay = setTimeout(function () {
//   console.log("Ten")
// },3000)
// console.log("four")
// console.log("one")
// console.log("two")
// console.log("three")
// console.log(delay)
// console.log("five")
// console.log("six")

window.onload = function () {
  var product = document.getElementById('product');
  fetch(`https://fakestoreapi.com/products`, { method: 'GET' })
    .then(function (res) {
      //console.log(res.json())
      return (res.json())
    })
    .then(function (data) {
      //console.log(data);
      for (var i = 0; i < data.length; i++) {
        //console.log(data[i])
        let pdata = data[i]
        //console.log(pdata.image);
        let pcard = `<div class="col-md-3 mt-3">
        <div class="card">
        <img src="${pdata.image}" class="card-img-top img-fluid">
          <div class="card-body">
            <h5 class="card-title">${pdata.title}</h5>
            <p class="card-text">${pdata.description}</p>
            <p class="card-text">${pdata.price}</p>
            <p class="card-text">${pdata.category}
            </p>
             <a href="#" class="btn btn-primary">BUY NOW</a>           
            <a href="#" class="btn btn-secondary">ADD TO CART</a>
          </div>
         </div>
        </div>`
        product.innerHTML += pcard;
      }
    })
    .catch(function (err) {
      console.log(err.msg);
    })
}