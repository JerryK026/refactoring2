const organization = { name: '애크미 구스베리', country: 'GB' };

result += `<h1>${organization.name}`; // 읽기 예
organization.name = newName; // 쓰기 예

// ------------------------------------------------------------

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

customerData[customerID].usage[year][month] = amount; // 쓰기 예

function compareUsage(customerID, laterYear, month) {
  const later = customerData[(customerID, laterYear, month)];
  const earlier = customerData[(customerID, laterYear - 1, month)];
  return { laterAmount: later, change: later - earlier };
}
