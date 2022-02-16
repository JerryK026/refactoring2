result += `<h1>${title()}</h1>`;

setTitle(obj['articleTitle']);

let _title = 'untitled';

function title() {
  return _title;
}
function setTitle(arg) {
  _title = arg;
}

/* ------------------------------------------------ */

const companyName = '애크미 구스베리';
const cpyNm = companyName;
