// route(endpoint) "/brands"
// type request GET
// body request - none
// response -

const response_brands = [
  { brand: "Audiolab", id: "13adfasdf4564asf" },
  { brand: "Klip", id: "65adf1asfa3s5135" },
];
// =================================================

// route(endpoint) "/brands/:id"
// type request GET
// body request - string
// query params - pagination: limit=??
// response -
const response_brand_products = [
  {
    brand: "Audiolab",
    model: "9000A Silver (Limited Edition)",
    product_type: { en: "headphones", ua: "навушники" },
    img_prev_size: "",
    rate: 4,
    price: { en: 150, ua: 5550 },
    promo_price: { en: 100, ua: 3800 },
    color: { en: "silver", ua: "сріблястий" },
    new_arrive: true,
    accessories: ["1234", "3958593", "216347"],
  },
  {
    brand: "Audiolab",
    model: "3000A Black (Limited Edition)",
    product_type: { en: "speakers", ua: "колонки" },
    img_prev_size: "",
    rate: 4,
    price: { en: 150, ua: 5550 },
    promo_price: { en: 100, ua: 3800 },
    color: { en: "black", ua: "чорний" },
    new_arrive: true,
    accessories: ["12snfmh34", "3958fgnc593", "2163sxvxc47"],
  },
];
// =================================================

// route(endpoint) "/categories"
// type request GET
// body request - none
// response -

const response_categories = [
  {
    category: "speakers",
    id: "1d2s5f6c21",
  },
  {
    category: "headphones",
    id: "1d2s5f6c21",
  },
];
// =================================================

// route(endpoint) "/new-arrives"
// type request GET
// body request - none
// query params - pagination: limit=8 or 12??
// response -
const response_new_arrives_products = [
  {
    brand: "Audiolab",
    model: "9000A Silver (Limited Edition)",
    product_type: { en: "headphones", ua: "навушники" },
    img_prev_size: "",
    rate: 4,
    price: { en: 150, ua: 5550 },
    promo_price: { en: 100, ua: 3800 },
    color: { en: "silver", ua: "сріблястий" },
    new_arrive: true,
    accessories: ["1234", "3958593", "216347"],
  },
  {
    brand: "Klip",
    model: "3000A Black (Limited Edition)",
    product_type: { en: "speakers", ua: "колонки" },
    img_prev_size: "",
    rate: 4,
    price: { en: 150, ua: 5550 },
    promo_price: 0,
    color: { en: "black", ua: "чорний" },
    new_arrive: true,
    accessories: ["12snfmh34", "3958fgnc593", "2163sxvxc47"],
  },
];

// route(endpoint) "/on-sale"
// type request GET
// body request - none
// query params - pagination: limit=8 or 12??
// response -
const response_on_sale_products = [
  {
    brand: "Audiolab",
    model: "9000A Silver (Limited Edition)",
    product_type: { en: "headphones", ua: "навушники" },
    img_prev_size: "",
    rate: 4,
    price: { en: 150, ua: 5550 },
    promo_price: { en: 100, ua: 3800 },
    color: { en: "silver", ua: "сріблястий" },
    new_arrive: true,
    accessories: ["1234", "3958593", "216347"],
  },
  {
    brand: "Klip",
    model: "3000A Black (Limited Edition)",
    product_type: { en: "speakers", ua: "колонки" },
    img_prev_size: "",
    rate: 4,
    price: { en: 150, ua: 5550 },
    promo_price: { en: 100, ua: 3800 },
    color: { en: "black", ua: "чорний" },
    new_arrive: true,
    accessories: ["12snfmh34", "3958fgnc593", "2163sxvxc47"],
  },
];
//===============================================================
// route authorization
// response -
const user = {
  // ...
  favorites: ["id8fdfh47", "ksdg6skmsdgf5"], // array of id products
  //...
};
// ============= USERS ROUTES ==============================
// route(endpoint) "/user/favorites"
// type request GET
// body request - none
// query params - pagination: limit=16
// response -
const response_favorites_products = [
  {
    brand: "Audiolab",
    model: "9000A Silver (Limited Edition)",
    product_type: { en: "headphones", ua: "навушники" },
    img_prev_size: "",
    rate: 4,
    price: { en: 150, ua: 5550 },
    promo_price: { en: 100, ua: 3800 },
    color: { en: "silver", ua: "сріблястий" },
    new_arrive: true,
    accessories: ["1234", "3958593", "216347"],
  },
  {
    brand: "Klip",
    model: "3000A Black (Limited Edition)",
    product_type: { en: "speakers", ua: "колонки" },
    img_prev_size: "",
    rate: 4,
    price: { en: 150, ua: 5550 },
    promo_price: { en: 100, ua: 3800 },
    color: { en: "black", ua: "чорний" },
    new_arrive: true,
    accessories: ["12snfmh34", "3958fgnc593", "2163sxvxc47"],
  },
];

// route(endpoint) "/user/favorites"
// type request PATCH
// body request - {favorites: 'sdf4sdg5sdf4'} id product for add/remove from favorites
// query params - pagination: limit=16
// response -
// {user_id: 'sdfsdfdf', favorites: ["id8fdfh47", "ksdg6skmsdgf5"], total_favorites: 2}
