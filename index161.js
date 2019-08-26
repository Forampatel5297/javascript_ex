userTwitter = require("userTwitter");

const Properties = Object.keys(userTwitter);

Properties.forEach(property => {
  console.log(`${property.toUpperCase()}`);
});