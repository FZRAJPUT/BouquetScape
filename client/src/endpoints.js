// endpoints.js
export const endpoints = {
  auth: {
    register: { method: "POST", url: "/api/auth/register" },
    login: { method: "POST", url: "/api/auth/login" },
    profile: { method: "GET", url: "/api/auth/profile" }, // protected
  },

  products: {
    getAll: { method: "GET", url: "/api/products" },
    getOne: { method: "GET", url: "/api/products/:id" },
    add: { method: "POST", url: "/api/products" }, // admin only
    update: { method: "PUT", url: "/api/products/:id" }, // admin only
    delete: { method: "DELETE", url: "/api/products/:id" }, // admin only
  },

  cart: {
    getCart: { method: "GET", url: "/api/cart" }, // protected
    addToCart: { method: "POST", url: "/api/cart/add" }, // protected
    removeFromCart: { method: "POST", url: "/api/cart/remove" }, // protected
  },

  orders: {
    createOrder: { method: "POST", url: "/api/orders" }, // protected
    getUserOrders: { method: "GET", url: "/api/orders" }, // protected
  },

  // Optional if you extend features later
  wishlist: {
    getWishlist: { method: "GET", url: "/api/wishlist" }, // protected
    addToWishlist: { method: "POST", url: "/api/wishlist/add" }, // protected
    removeFromWishlist: { method: "POST", url: "/api/wishlist/remove" }, // protected
  },
};

// Example: console.log all endpoints
if (process.env.NODE_ENV !== "production") {
  console.log("📌 Available API Endpoints:");
  for (const [group, routes] of Object.entries(endpoints)) {
    console.log(`\n${group.toUpperCase()}:`);
    for (const [name, { method, url }] of Object.entries(routes)) {
      console.log(`  ${method} ${url}  ->  ${name}`);
    }
  }
}
