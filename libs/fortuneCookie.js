// About page Fortune Cookies
const fortuneCookie = [
  "Conquer your fears or they will conquer you",
  "Rivers need springs",
  "Do not fear what you don't know",
  "You will have a pleasant surprise",
  "Whenever possible, keep it simple",
];

exports.getFortune = () => {
  return fortuneCookie[Math.floor(Math.random() * fortuneCookie.length)];
};
