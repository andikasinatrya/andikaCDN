document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "Robusta Brzail",
        img: "1.jpg",
        price: 20000,
      },
      {
        id: 2,
        name: "Robusta Latte",
        img: "2.jpg",
        price: 25000,
      },
      {
        id: 3,
        name: "Robusta Black",
        img: "3.jpg",
        price: 30000,
      },
      {
        id: 4,
        name: "Robusta lorem",
        img: "4.jpg",
        price: 35000,
      },
      {
        id: 5,
        name: "Robusta ipsum",
        img: "5.jpg",
        price: 10000,
      },
    ],
  }));

  Alpine.store("cart", {
    items: [],
    total: 0,
    quantity: 0,
    add(newItem) {
      // Cek apakah ada barang yang sama di cart
      const cartItem = this.items.find((item) => item.id === newItem.id);

      // Jika belum ada/ Cart Kosong
      if (!cartItem) {
        this.items.push({ ...newItem, quantity: 1, total: newItem.price });
        this.quantity++;
        this.total += newItem.price;
      } else {
        // Jika Barang Sudah Ada, Cek apakah barang beda atau sama dengan yang ada di cart
        this.items = this.items.map((item) => {
          // Jika Barang Berbeda
          if (item.id !== newItem.id) {
            return item;
          } else {
            // Jika barang sudah ada, tambah jumlah quantity dan totalnya
            item.quantity++;
            item.total = item.price * item.quantity;
            this.quantity++;
            this.total += item.price;
            return item;
          }
        });
      }
    },
    remove(id) {
      // Ambil item yang mau di remove
      const cartItem = this.items.find((item) => item.id === id);

      // Jika Barang Lebih Dari 1
      if (cartItem.quantity > 1) {
        // Telusuri satu-persatu
        this.item = this.items.map((item) => {
          // Jika bukan barang yang di klik
          if (item.id !== id) {
            return item;
          } else {
            item.quantity--;
            item.total = item.price * item.quantity;
            this.quantity--;
            this.total -= item.price;
            return item;
          }
        });
      } else if (cartItem.quantity === 1) {
        // Jika barangnya sisa 1
        this.items = this.items.filter((item) => item.id !== id);
        this.quantity--;
        this.total -= cartItem.price;
      }
    },
  });
});

// form Validation
// const checkoutButton = document.querySelector(".checkout-button");
// checkoutButton.disabled = true;

// const form = document.querySelector("#checkoutForm");

// form.addEventListener("keyup", function () {
//   for (let i = 0; i < form.elements.length; i++) {
//     if (form.elements[i].value.length !== 0) {
//       checkoutButton.classList.remove("disabled");
//       checkoutButton.classList.add("disabled");
//     } else {
//       return false;
//     }
//   }
//   checkoutButton.disabled = false;
//   checkoutButton.classList.remove("disabled");
// });

// Kirim data ketika checkout di klik
// checkoutButton.addEventListener("click", function (e) {
//   e.preventDefault();

//   const formData = new FormData(form);
//   const data = new URLSearchParams(formData);
//   const objData = Object.fromEntries(data).items;
//   console.log(objData);
// });

//Konfersi ke Rupiah
const rupiah = (number) => {
  return Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  }).format(number);
};
