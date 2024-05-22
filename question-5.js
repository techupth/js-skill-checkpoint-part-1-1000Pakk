// Question #5
const products = [
  {
    name: "เสื้อยืด",
    price: 10,
    quantity: 2,
  },
  {
    name: "กางเกงยีนส์",
    price: 5,
    quantity: 3,
  },
  {
    name: "เสื้อเชิ้ต",
    price: 10,
    quantity: 5,
  },
];

const promotionCode = "SALE50";
// เริ่มเขียนโค้ดตรงนี้
function calculateTotalPrice(products, promotionCode) {
  let totalPrice = products.reduce(
    (acc, curr) => (acc += curr.price * curr.quantity),
    0
  );
  if (promotionCode === "SALE20") {
    return totalPrice * (80 / 100);
  } else if (promotionCode === "SALE50") {
    return totalPrice * (50 / 100);
  } else {
    return totalPrice;
  }
}

console.log(calculateTotalPrice(products, promotionCode));
