function isEnoughCapacity(products, containerSize) {
  let total = 0;

  for (const quantity of Object.values(products)) {
    total += quantity;
  }

  return total <= containerSize;
}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 6));

console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12));

console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14));

console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7));
