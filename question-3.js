// Question #3
let userPassword = "abdce";
console.log(checkPasswordStrength(userPassword));
// เริ่มเขียนโค้ดตรงนี้
function checkPasswordStrength(userPassword) {
  return userPassword.length < 6
    ? "Weak"
    : userPassword.length >= 6 && userPassword.length < 10
    ? "Medium"
    : "Strong";
}
