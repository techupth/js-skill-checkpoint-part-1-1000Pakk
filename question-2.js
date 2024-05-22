// Question #2
const inventory = [
  { name: "Apple", price: 35, quantity: 100 },
  { name: "Banana", price: 10, quantity: 50 },
];
// เริ่มเขียนโค้ดตรงนี้
inventory[0].quantity = 200;
const orangeObj = { name: "Orange", price: 20, quantity: 300 };
inventory.push(orangeObj);

const totalPrice = inventory.reduce(
  (acc, curr) => (acc += curr.price * curr.quantity),
  0
);

console.log(`มูลค่ารวมของจำนวนสินค้าทั้งหมดในสต็อก ${totalPrice} บาท`);
