import { menu } from "./db.js";

//htmlde arayüzü göndereceğimiz yer

const outlet = document.getElementById("outlet");

// url deki parametreleri yönetebilmek için URLsearchparams classından bir örnek oluşturduk.
//örneği oluştururken kendi url mizdeki parametreleri gönderdik
const searchParams = new URLSearchParams(window.location.search);

// get metodu aracılığı ile urldeki id parametresine eriştik
const paramid = searchParams.get("id");

// menu içerisinden idsini bildiğimiz elemana erişme

const product = menu.find((item) => item.id === Number(paramid));

// bulduğumuz ürüne göre arayüzü ekrana basma

outlet.innerHTML = ` <a href="/"><i class="bi bi-house fs-1"></i></a>
<h1 class="text-center my-3 p-2 shadow text-dark">
  ${product.title}
</h1>
<div class="d-flex align-items-center justify-content-center">
  <img
    class="img-fluid rounded shadow-lg"
    src="${product.img}"
    style="max-width: 500px"
    alt=""
  />
</div>
<h3 class="my-5">
  Ürünün Fiyatı : <span class="text-success">${product.price}₺</span>
</h3>
<h3>
  <p class="lead fs-3">
   ${product.desc}
  </p>
</h3>
</div>`;
