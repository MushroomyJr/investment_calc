import InvestmentRow from "./InvestmentRow";
const dummyData = [
  { year: 1, value: 10000, interest: 1000, totalInt: 1000, capital: 9000 },
  { year: 2, value: 11000, interest: 1000, totalInt: 2000, capital: 10000 },
];
const Investments = (props) => {
  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <InvestmentRow data={dummyData} />
      </table>
    </div>
  );
};
export default Investments;
