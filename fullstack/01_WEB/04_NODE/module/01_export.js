let base = 100;
const a = (x) => base + x;
const t = () => {
  console.log("module 내부에서 this는 ", this);
};

module.exports = { add: a, test: t };
