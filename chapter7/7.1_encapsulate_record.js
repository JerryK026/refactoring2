class Organization {
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }

  get name() {
    return this._data.name;
  }

  set name(aString) {
    this._data.name = aString;
  }

  get country() {
    return this._data.country;
  }

  set country(aCountryCode) {
    this._country = aCountryCode;
  }
}

const organization = new Organization({
  name: '애크미 구스베리',
  country: 'GB',
});

function getOrganization() {
  return organization;
}

result += `<h1>${getOrganization().name}`; // 읽기 예
getOrganization().name = newName; // 쓰기 예

// ------------------------------------------------------------

// 클래스만 보고도 데이터 사용법을 모두 파악할 수 있다.
class customerData {
  constructor(customerID, year, month, amount) {
    this._data[customerID].usage[year][month] = amount;
  }

  get rawData() {
    return _.cloneDeep(this._data);
  }

  usage(customerID, year, month) {
    return this._data[customerID].usage[year][month];
  }
}

const record = {
  1920: {
    name: '마틴 파울러',
    id: '1920',
    usage: {
      2016: {
        1: 50,
        2: 55,
        // 나머지 month는 생략
      },
      2015: {
        1: 70,
        2: 63,
        // 나머지 month는 생략
      },
    },
  },
  38673: {
    name: '닐 포드',
    id: 38673,
    // 다른 고객 정보도 같은 형식으로 저장된다.
  },
};

function getCustomerData() {
  return customerData;
}

function getRawDataOfCustomers() {
  return customerData;
}

function setRawDataOfCustomers(arg) {
  customerData = arg;
}

function setUsage(customerID, year, month, amount) {
  getRawDataOfCustomers()[customerID].usage[year][month] = amount;
}

getCustomerData().setUsage(customerID, year, month, amount);

// 방법 1 : 명시적으로 확인 가능하다.
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().usage(customerID, laterYear, month);
  const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
  return { laterAmount: later, change: later - earlier };
}

// 방법 2 : 간단하지만 데이터 구조가 클수록 복제 비용이 커진다.
function compareUsage(customerID, laterYear, month) {
  const later = getCustomerData().rawData[customerID].usage[(laterYear, month)];
  const earlier =
    getCustomerData().rawData[customerID].usage[(laterYear - 1, month)];
  return { laterAmount: later, change: later - earlier };
}
