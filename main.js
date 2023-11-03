import { menu, buttonsData } from "./db.js";

const menuArea = document.getElementById("menu-area");
const buttonsArea = document.getElementById("buttons-area");

// sayfanın yüklenme anını izleme
document.addEventListener("DOMContentLoaded", () => {
  renderButtons();
  renderMenuItems(menu);
});

// butonlar kısmında tıklama olaylarını izler

buttonsArea.addEventListener("click", searchCategory);

// ekrana menu elemanlarını basar
function renderMenuItems(menuItems) {
  // dizideki her bir obje için
  // bir elemanı temsil eden obje oluştur
  // bu html i bir diziye aktar
  // stringe çevir

  let menuHTML = menuItems.map(
    (item) =>
      ` <a
  href="/productDetail.html?id=${item.id}"
  class="d-flex flex-column gap-3 flex-md-row text-decoration-none text-dark"
  id="card"
>

  <img
    
    class="rounded shadow"
    src=${item.img}
    alt=""
  />
  <div>
    <div class="d-felx justify-content-between">
      <h5>${item.title}</h5>
      <p class="text-success">${item.price} ₺</p>
    </div>
    <p class="lead">
      ${item.desc}
    </p>
  </div>
</a>
  `
  );

  // diziyi stringe çevir

  menuHTML = menuHTML.join(" ");

  // oluşturduğumuz HTML i ekrana bas
  menuArea.innerHTML = menuHTML;
}

// tıklanılan butona göre ekrana o kategoriye ait ürünleri listele

function searchCategory(e) {
  const category = e.target.dataset.category;

  // tüm dizi elamanlarından yalnızca kategori değeri butonun kategori değeriyle eşleşenleri getir

  const filteredMenu = menu.filter((item) => item.category === category);

  // hepsi seçilirse bütün menüyü ekrana basar

  if (category === "all") {
    renderMenuItems(menu);
  } else {
    // filtelenmiş diziyi ekrana basma
    renderMenuItems(filteredMenu);
  }

  // butonları güncelle
  renderButtons(category);
}

//ekrana butonları basıcak fonsiyon
function renderButtons(active) {
  // eksi butonları kaldırma
  buttonsArea.innerHTML = " ";

  // yeni butonlar oluşturma
  buttonsData.forEach((btn) => {
    // html butonu oluşturma
    const buttonele = document.createElement("button");
    // gerekli class ları verme
    buttonele.className = "btn btn-outline-dark filter-btn";

    // içerisindeki yazıyı değiştirme
    buttonele.innerText = btn.text;

    // hangi kategori olduğu bilgisini buton elementine ekleme
    buttonele.dataset.category = btn.value;

    // eğerki aktif kategoriyle buton eşleşirse ona farklı class ver
    if (btn.value === active) {
      buttonele.classList.add("bg-dark", "text-light");
    }

    // htmle gonderme
    buttonsArea.appendChild(buttonele);
  });
}
