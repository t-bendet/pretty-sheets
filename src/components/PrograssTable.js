import React from "react";

const PrograssTable = ({ tableData }) => {
  console.log(tableData);
  return (
    <div>
      <div>
        <h2>Yearly Benchmarks </h2>
        <table className="ui definition table small ">
          <thead>
            <tr>
              <th></th>
              <th>Q 1</th>
              <th>Q 2</th>
              <th>Q 3</th>
              <th>Q 4</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Expected Earning</td>
              <td>{tableData.totalYearlyGoal / 4}</td>
              <td>{tableData.totalYearlyGoal / 4} </td>
              <td>{tableData.totalYearlyGoal / 4}</td>
              <td>{tableData.totalYearlyGoal / 4} </td>
              <td>{tableData.totalYearlyGoal / 4} </td>
            </tr>
            <tr>
              <td>Actual earning</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Expected Listings</td>
              <td>{tableData.activeListings}</td>
              <td>{tableData.activeListings}</td>
              <td>{tableData.activeListings}</td>
              <td>{tableData.activeListings}</td>
              <td>{tableData.activeListings * 12}</td>
            </tr>
            <tr>
              <td>Actual Listings</td>
              <td>0</td>
              <td>0 </td>
              <td>0 </td>
              <td>0 </td>
              <td>0 </td>
            </tr>
            <tr>
              <td>Expected Sales</td>
              <td>{tableData.yearlySalesTarget / 4}</td>
              <td>{tableData.yearlySalesTarget / 4}</td>
              <td>{tableData.yearlySalesTarget / 4}</td>
              <td>{tableData.yearlySalesTarget / 4}</td>
              <td>{tableData.yearlySalesTarget} </td>
            </tr>
            <tr>
              <td>Actual Sales</td>
              <td>0</td>
              <td>0</td>
              <td>0 </td>
              <td>0</td>
              <td>0 </td>
            </tr>
            <tr>
              <td>Expected Presentations</td>
              <td>{tableData.yearlyClientPresentationsTarget / 4}</td>
              <td>{tableData.yearlyClientPresentationsTarget / 4}</td>
              <td>{tableData.yearlyClientPresentationsTarget / 4}</td>
              <td>{tableData.yearlyClientPresentationsTarget / 4}</td>
              <td>{tableData.yearlyClientPresentationsTarget} </td>
            </tr>
            <tr>
              <td>Actual Presentations</td>
              <td>0</td>
              <td>0</td>
              <td>0 </td>
              <td>0 </td>
              <td>0</td>
            </tr>
            <tr>
              <td>Expected OutGoing Calls</td>
              <td>{tableData.yearlyOutgoingCallsTarget / 4}</td>
              <td>{tableData.yearlyOutgoingCallsTarget / 4}</td>
              <td>{tableData.yearlyOutgoingCallsTarget / 4}</td>
              <td>{tableData.yearlyOutgoingCallsTarget / 4}</td>
              <td>{tableData.yearlyOutgoingCallsTarget} </td>
            </tr>
            <tr>
              <td>Actual OutGoing Calls</td>
              <td>0</td>
              <td>0</td>
              <td>0 </td>
              <td>0 </td>
              <td>0 </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <br></br>
        <h2>monthly Benchmarks </h2>
        <h3>Start Small</h3>
        <table className="ui definition table small ">
          <thead>
            <tr>
              <th></th>
              <th>Week 1</th>
              <th>Week 2</th>
              <th>Week 3</th>
              <th>Week 4</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Expected Earning</td>
              <td>{tableData.totalMonthelyGoal / 4}</td>
              <td>{tableData.totalMonthelyGoal / 4} </td>
              <td>{tableData.totalMonthelyGoal / 4}</td>
              <td>{tableData.totalMonthelyGoal / 4} </td>
              <td>{tableData.totalMonthelyGoal} </td>
            </tr>
            <tr>
              <td>Actual earning</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
              <td>0</td>
            </tr>
            <tr>
              <td>Expected Listings</td>
              <td>{tableData.activeListings / 4}</td>
              <td>{tableData.activeListings / 4}</td>
              <td>{tableData.activeListings / 4}</td>
              <td>{tableData.activeListings / 4}</td>
              <td>{tableData.activeListings}</td>
            </tr>
            <tr>
              <td>Actual Listings</td>
              <td>0</td>
              <td>0 </td>
              <td>0 </td>
              <td>0 </td>
              <td>0 </td>
            </tr>
            <tr>
              <td>Expected Sales</td>
              <td>{tableData.monthelySalesTarget / 4}</td>
              <td>{tableData.monthelySalesTarget / 4}</td>
              <td>{tableData.monthelySalesTarget / 4}</td>
              <td>{tableData.monthelySalesTarget / 4}</td>
              <td>{tableData.monthelySalesTarget} </td>
            </tr>
            <tr>
              <td>Actual Sales</td>
              <td>0</td>
              <td>0</td>
              <td>0 </td>
              <td>0</td>
              <td>0 </td>
            </tr>
            <tr>
              <td>Expected Presentations</td>
              <td>{tableData.monthelyClientPresentationsTarget / 4}</td>
              <td>{tableData.monthelyClientPresentationsTarget / 4}</td>
              <td>{tableData.monthelyClientPresentationsTarget / 4}</td>
              <td>{tableData.monthelyClientPresentationsTarget / 4}</td>
              <td>{tableData.monthelyClientPresentationsTarget} </td>
            </tr>
            <tr>
              <td>Actual Presentations</td>
              <td>0</td>
              <td>0</td>
              <td>0 </td>
              <td>0 </td>
              <td>0</td>
            </tr>
            <tr>
              <td>Expected OutGoing Calls</td>
              <td>{tableData.monthelyOutgoingCallsTarget / 4}</td>
              <td>{tableData.monthelyOutgoingCallsTarget / 4}</td>
              <td>{tableData.monthelyOutgoingCallsTarget / 4}</td>
              <td>{tableData.monthelyOutgoingCallsTarget / 4}</td>
              <td>{tableData.monthelyOutgoingCallsTarget} </td>
            </tr>
            <tr>
              <td>Actual OutGoing Calls</td>
              <td>0</td>
              <td>0</td>
              <td>0 </td>
              <td>0 </td>
              <td>0 </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PrograssTable;
