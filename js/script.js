document.addEventListener("DOMContentLoaded", function () {
  // Toggle class active
  const navbarNav = document.querySelector(".navbar-nav");
  // Ketika Hamburger Menu Di Klik
  document.querySelector("#hamburger-menu").onclick = () => {
    navbarNav.classList.toggle("active");
  };

  // Toggle class active untuk search-form
  const searchForm = document.querySelector(".search-form");
  const searchBox = document.querySelector("#search-box");

  document.querySelector("#search-button").onclick = (e) => {
    searchForm.classList.toggle("active");
    searchBox.focus();
    e.preventDefault();
  };

  // Toggle class active untuk shopping-Cart
  const shoppingCart = document.querySelector(".shopping-cart");
  // Ketika Shopping Cart Di klik
  document.querySelector("#shopping-cart-button").onclick = (e) => {
    shoppingCart.classList.toggle("active");
    e.preventDefault();
  };

  // Klik Di Luar Elemen
  const hm = document.querySelector("#hamburger-menu");
  const sb = document.querySelector("#search-button");
  const scb = document.querySelector("#shopping-cart-button");

  document.addEventListener("click", function (e) {
    if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
      navbarNav.classList.remove("active");
    }
    if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
      searchForm.classList.remove("active");
    }
    if (!scb.contains(e.target) && !shoppingCart.contains(e.target)) {
      shoppingCart.classList.remove("active");
    }
  });

  // Modal Box
  const itemDetailModal = document.querySelector("#item-detail-modal");
  const itemDetailButtons = document.querySelectorAll(".item-detail-button");

  //looping for All itemDetailButtons
  itemDetailButtons.forEach((btn) => {
    btn.onclick = (e) => {
      itemDetailModal.style.display = "flex";
      e.preventDefault();
    };
  });

  // Klik Tombol Close
  document.querySelector(".modal .close-icon").onclick = (e) => {
    itemDetailModal.style.display = "none";
    e.preventDefault();
  };

  //klik di luar modal
  window.onclick = (e) => {
    if (e.target === itemDetailModal) {
      itemDetailModal.style.display = "none";
    }
  };
});
