import InvestmentRow from "./InvestmentRow";
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
        <InvestmentRow data={props.data} />
      </table>
    </div>
  );
};
export default Investments;
