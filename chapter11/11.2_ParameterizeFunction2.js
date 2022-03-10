function baseCharge(usage) {
  if (usage < 0) return usd(0);
  const amount =
    withBand(usage, 0, 100) * 0.03 +
    withBand(usage, 100, 200) * 0.05 +
    withBand(usage, 200, Infinity) * 0.07;
  return usd(amount);
}

function withBand(usage, bottom, top) {
  return usage > bottom ? Math.min(usage, top) - bottom : 0;
}
