document.addEventListener("alpine:init", () => {
  // Product Data
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Brzail",
        img: "1.jpg",
        price: 20000,
        description: "Mang Eak",
      },
      {
        id: 2,
        name: "Robusta Latte",
        img: "2.jpg",
        price: 25000,
        description: "Mang Eak",
      },
      {
        id: 3,
        name: "Robusta Black",
        img: "3.jpg",
        price: 30000,
        description: "Mang Eak",
      },
      {
        id: 4,
        name: "Robusta lorem",
        img: "4.jpg",
        price: 35000,
        description: "Mang Eak",
      },
      {
        id: 5,
        name: "Robusta ipsum",
        img: "5.jpg",
        price: 10000,
        description: "Mang Eak",
      },
    ],
  }));

  // Modal Data
  Alpine.store("modal", {
    showModal(dataProduct) {
      console.log(dataProduct);
    },
  });

  // Cart
  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    modalData: { items: [] },
    add(newItem) {
      // Add item to cart logic
    },
    remove(id) {
      // Remove item from cart logic
    },
    showModal(dataProduct) {
      this.modalData.items = [dataProduct];
    },
  });

  //Konfersi ke Rupiah
  window.rupiah = (number) => {
    return Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  };
});
