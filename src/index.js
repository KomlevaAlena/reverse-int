module.exports = function reverse(n) {
  const reversed = String(Math.abs(n)).split('').reverse().join('');
  return Number(reversed);
};
