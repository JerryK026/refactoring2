class Shipment {
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`;
  }

  get trackingInformation() {
    return this._trackingInformation;
  }

  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }
}

const aShipment = new Shipment();
aShipment.shippingCompany = request.vendor;
aShipment.trackingNumber = request.number;
