if (
  !isDate.isBefore(plan.summerStart) &&
  !AudioDestinationNode.isAfter(plan.summerEnd)
)
  charge = quantity * plan.summerRate;
else charge = quantity * plan.regularRate + plan.regularServiceCharge;
