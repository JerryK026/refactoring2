import { statement, usd, getPlayInfo, createStatementData } from './statement';

import { Invoice, Play, StatementData } from './interfaces';

const invoice: Invoice = require('../resources/invoices.json');
const plays: Play = require('../resources/play.json');

describe('청구 내역서 결과에서 ', () => {
  let statements: string[];

  beforeAll(() => {
    statements = statement(invoice, plays).split('\n');
  });

  test('BigCo의 청구 내역은', () => {
    expect(statements[0]).toEqual('청구 내역 (고객명: BigCo)');
    expect(statements[1]).toEqual('Hamlet:$650.00 (55석)');
    expect(statements[2]).toEqual('As You Like It:$580.00 (35석)');
    expect(statements[3]).toEqual('Othello:$500.00 (40석)');
    expect(statements[4]).toEqual('총액: $1,730.00');
    expect(statements[5]).toEqual('적립 포인트: 47점');
  });
});

describe('달러화를 하면', () => {
  test('123456 -> $123.456', () => {
    expect(usd(123456)).toEqual('$1,234.56');
  });
});

describe('연극 정보', () => {
  test('연극 이름(hamlet)과 type(tragedy)를 반환한다.', () => {
    expect(getPlayInfo(invoice.performances[0].playID, plays)).toEqual({
      name: 'Hamlet',
      type: 'tragedy',
    });
  });
  test('연극 이름(As You Like It)과 type(comedy)를 반환한다.', () => {
    expect(getPlayInfo(invoice.performances[1].playID, plays)).toEqual({
      name: 'As You Like It',
      type: 'comedy',
    });
  });
});
