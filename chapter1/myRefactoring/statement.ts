import {
  Invoice,
  PerformInfo,
  Play,
  PlayInfo,
  StatementData,
} from './interfaces';

const createStatementData = (invoice: Invoice, plays: Play): StatementData => {
  class performanceCalculator {
    aPerf: PerformInfo;
    aPlay: PlayInfo;

    constructor(aPerf: PerformInfo, aPlay: PlayInfo) {
      this.aPerf = aPerf;
      this.aPlay = aPlay;
    }

    get amount(): number {
      throw new Error('서브 클래스에서 처리하도록 설계되었습니다.');
    }

    get volumeCredits(): number {
      return Math.max(this.aPerf.audience - 30, 0);
    }
  }

  const createPerformanceCalculator = (
    aPerf: PerformInfo,
    aPlay: PlayInfo
  ): performanceCalculator => {
    switch (aPlay.type) {
      case 'tragedy':
        return new TragedyCalculator(aPerf, aPlay);
      case 'comedy':
        return new ComedyCalculator(aPerf, aPlay);
      default:
        throw new Error(`알 수 없는 장르: ${aPlay.type}`);
    }
  };

  class ComedyCalculator extends performanceCalculator {
    get amount() {
      let result = 30000;
      if (this.aPerf.audience > 20) {
        result += 10000 + 500 * (this.aPerf.audience - 20);
      }
      result += 300 * this.aPerf.audience;

      return result;
    }

    get volumeCredits() {
      return super.volumeCredits + Math.floor(this.aPerf.audience / 5);
    }
  }

  class TragedyCalculator extends performanceCalculator {
    get amount() {
      let result = 40000;
      if (this.aPerf.audience > 30) {
        result += 1000 * (this.aPerf.audience - 30);
      }

      return result;
    }
  }

  function totalAmount(data: StatementData) {
    return data.performances.reduce(
      (total, p) => total + (p.amount as number),
      0
    );
  }

  function totalVolumeCredits(data: StatementData) {
    return data.performances.reduce((total, p) => {
      if (!p.volumeCredits) return total;
      return total + p.volumeCredits;
    }, 0);
  }

  const enrichPerformance = (aPerf: PerformInfo): PerformInfo => {
    const calculator = createPerformanceCalculator(aPerf, playFor(aPerf));
    const result = Object.assign({}, aPerf);
    result.play = playFor(result);
    result.amount = calculator.amount;
    result.volumeCredits = calculator.volumeCredits;
    return result;
  };

  const playFor = (aPerf: PerformInfo) => {
    return plays[aPerf.playID];
  };

  const result: StatementData = {
    customer: '',
    performances: [],
    totalAmount: 0,
    totalVolumeCredits: 0,
  };
  result.customer = invoice.customer;
  result.performances = invoice.performances.map(enrichPerformance);
  result.totalAmount = totalAmount(result);
  result.totalVolumeCredits = totalVolumeCredits(result);

  return result;
};

const statement = (invoice: Invoice, plays: Play): string => {
  return getPlainText(createStatementData(invoice, plays));
};

const getPlainText = (data: StatementData): string => {
  let result = `청구 내역 (고객명: ${data.customer})\n`;

  for (let perf of data.performances) {
    // 청구 내역을 출력한다.
    result += `${(perf.play as PlayInfo).name}:${usd(perf.amount as number)} (${
      perf.audience
    }석)\n`;
  }

  result += `총액: ${usd(data.totalAmount)}\n`;
  result += `적립 포인트: ${data.totalVolumeCredits}점\n`;

  return result;
};

const getPlayInfo = (id: string, plays: Play): PlayInfo => {
  return plays[id];
};

const usd = (money: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  }).format(money / 100);
};

export { statement, usd, getPlayInfo };
