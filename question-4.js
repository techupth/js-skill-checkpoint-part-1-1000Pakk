// Question #4
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
  { name: "Orange", price: 30, quantity: 60 },
];
// เริ่มเขียนโค้ดตรงนี้
let lowestQuantityResult = function (inventory) {
  let lowestQuantity = inventory.reduce(
    (acc, curr) => (curr.quantity < acc ? (acc = curr.quantity) : acc),
    Infinity
  );
  let lowestQuantity_Name = inventory.reduce((acc, curr) => {
    if (curr.quantity < acc.quantity) {
      return (acc = curr);
    } else {
      return acc;
    }
  });
  let nameFruit = lowestQuantity_Name.name;
  console.log(nameFruit);
  return `สินค้าที่มีจำนวนต่ำที่สุดในคลังสินค้าคือ ${nameFruit} ซึ่งมี ${lowestQuantity} ชิ้น`;
};

console.log(lowestQuantityResult(inventory));
