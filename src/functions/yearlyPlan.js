const YearlyPlan = (clientdata) => {
  // outgoing calls required to book one Presentation
  const outgoingCallsConvertionRatio = 5;
  // client Presentation required to have one listing
  const clientPresentationConvertionRatio = 10;
  // number of listings required to close one deal
  const listingsConvertionRatio = 3;
  const {
    CommissionPercentage,
    averageApartmentPrice,
    myCommissionPercentage,
    yearlyGoal,
  } = clientdata;
  const averageCommission = Math.ceil(
    averageApartmentPrice * (CommissionPercentage / 100)
  );
  const totalYearlyGoal = Math.ceil(
    (yearlyGoal * 100) / myCommissionPercentage
  );
  // money targets
  const totalMonthelyGoal = Math.ceil(totalYearlyGoal / 12);
  const myMonthelyGoal = Math.ceil(yearlyGoal / 12);
  // sales targets
  const yearlySalesTarget = Math.ceil(totalYearlyGoal / averageCommission);
  const monthelySalesTarget = Math.ceil(yearlySalesTarget / 12);
  // listings target (monthely)
  const activeListings = Math.ceil(
    monthelySalesTarget * listingsConvertionRatio
  );
  // clientPresentations
  const yearlyClientPresentationsTarget = Math.ceil(
    activeListings * clientPresentationConvertionRatio * 12
  );
  const monthelyClientPresentationsTarget = Math.ceil(
    activeListings * clientPresentationConvertionRatio
  );
  // outgoingCalls
  const yearlyOutgoingCallsTarget = Math.ceil(
    yearlyClientPresentationsTarget * outgoingCallsConvertionRatio
  );
  const monthelyOutgoingCallsTarget = Math.ceil(yearlyOutgoingCallsTarget / 12);
  const yearlyPlanData = {
    outgoingCallsConvertionRatio: 5,
    clientPresentationConvertionRatio: 10,
    listingsConvertionRatio: 3,
    averageCommission: averageCommission,
    totalYearlyGoal: totalYearlyGoal,
    totalMonthelyGoal: totalMonthelyGoal,
    myMonthelyGoal: myMonthelyGoal,
    yearlySalesTarget: yearlySalesTarget,
    monthelySalesTarget: monthelySalesTarget,
    activeListings: activeListings,
    yearlyClientPresentationsTarget: yearlyClientPresentationsTarget,
    monthelyClientPresentationsTarget: monthelyClientPresentationsTarget,
    yearlyOutgoingCallsTarget: yearlyOutgoingCallsTarget,
    monthelyOutgoingCallsTarget: monthelyOutgoingCallsTarget,
  };
  return yearlyPlanData;
};

export default YearlyPlan;
