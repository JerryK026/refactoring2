function circum(radius) {
  return 2 * Math.PI * radius;
}

/* ------------------------------------------------ */

class Book {
  addReservation(customer) {
    this._reservation.push(customer);
  }
}

/* ------------------------------------------------ */

function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(aCustomer.address.state);
}

const newEngland = someCustomers.filter((c) => inNewEngland(c));
