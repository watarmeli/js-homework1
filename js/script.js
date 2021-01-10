function getShippingCost(country) {
  let message;
  let price;
  // Пиши код ниже этой строки
  switch (country) {
    case 'Китай':
      price = 100;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
      
    case 'Чили':
      price = 250;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
      
    case 'Австралия':
      price = 170;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
      
    case 'Ямайка':
      price = 120;
      message = `Доставка в ${country} будет стоить ${price} кредитов`;
      break;
      
    default:
      message = 'Извините, в вашу страну доставки нет';
  }
  // Пиши код выше этой строки
  return message;
}

console.log(getShippingCost('Австралия'));
console.log(getShippingCost('Германия'));
console.log(getShippingCost('Китай'));
console.log(getShippingCost('Чили'));
console.log(getShippingCost('Ямайка'));
console.log(getShippingCost('Швеция'));