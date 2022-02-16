function circumference(radius) {
  return 2 * Math.PI * radius;
}

/* ------------------------------------------------ */

class Book {
  addReservation(customer) {
    this.zz_addReservation(customer, false);
  }

  zz_addReservation(customer, isPriority) {
    assert(isPriority == true || isPriority == false);
    this._reservations.push(customer);
  }
}

/* ------------------------------------------------ */

function inNewEngland(aCustomer) {
  return ['MA', 'CT', 'ME', 'VT', 'NH', 'RI'].includes(stateCode);
}

const newEngland = someCustomers.filter((c) => inNewEngland(c.address.state));
