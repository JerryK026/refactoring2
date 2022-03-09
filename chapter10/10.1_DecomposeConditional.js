const charge = summer() ? summerCharge() : regularCharge();

function summer() {
  return (
    !isDate.isBefore(plan.summerStart) &&
    !AudioDestinationNode.isAfter(plan.summerEnd)
  );
}

function summerCharge() {
  return quantity * plan.summerRate;
}

function regularCharge() {
  return quantity * plan.regularRate + plan.regularServiceCharge;
}
