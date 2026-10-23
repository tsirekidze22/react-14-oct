export function calculateDiscountedPrice(originalPrice, discount) {
  return originalPrice - originalPrice * (discount / 100);
  //   return originalPrice - discount;
}

// originalPrice = 100, discount = 20 => 80
// originalPrice = 500, discount = 20 => 400
// calculateDiscountedPrice(100, 20);
