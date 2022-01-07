import { statement } from './statement';

const invoice = require('../resources/invoices.json');
const plays = require('../resources/play.json');

let statements: any;
describe('청구 내역 예시 ', () => {
  beforeAll(() => {
    statements = statement(invoice, plays).split('\n');
  });

  test('BigCo의 청구 내역', () => {
    expect(statements[0]).toEqual('청구 내역 (고객명: BigCo)');
    expect(statements[1]).toEqual('Hamlet:$650.00 (55석)');
    expect(statements[2]).toEqual('As You Like It:$580.00 (35석)');
    expect(statements[3]).toEqual('Othello:$500.00 (40석)');
    expect(statements[4]).toEqual('총액: $1,730.00');
    expect(statements[5]).toEqual('적립 포인트: 47점');
  });
});
