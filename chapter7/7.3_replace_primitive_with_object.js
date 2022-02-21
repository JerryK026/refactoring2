class Order {
  constructor(data) {
    this.priority = data.priority;
    // 나머지 초화 코드 생략
  }
}

const orders = [
  new Order({ priority: 'normal' }),
  new Order({ priority: 'high' }),
  new Order({ priority: 'rush' }),
];

const highPriorityCount = orders.filter(
  (o) => 'high' === o.priority || 'rush' === o.priority
).length;
