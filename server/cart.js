const e = require('express');

const add = (cart, req) => {
  cart.contents.push(req.body);
  return JSON.stringify(cart, null, 4);
};
const change = (cart, req) => {
  let find = cart.contents.find(el => el.id === +req.params.id);
  find.quantity += req.body.quantity;
  return JSON.stringify(cart, null, 4);
}
const remove = (cart, req) => {
  let find = cart.contents.find(el =>  el.id === req.params.id);
  let cartContents = cart.contents;
  cartContents.splice(cartContents.indexOf(find), 1);
  return JSON.stringify(cart, null, 4);
}

module.exports = {
  add,
  change,
  remove
}