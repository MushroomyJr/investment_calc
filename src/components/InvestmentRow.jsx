const InvestmentRow = (props) => {
  return (
    <tbody>
      {props.data.map((data) => {
        return (
          <tr>
            <td>{data.year}</td>
            <td>{data.value}</td>
            <td>{data.interest}</td>
            <td>{data.totalInt}</td>
            <td>{data.capital}</td>
          </tr>
        );
        console.log(data);
      })}
    </tbody>
  );
};
export default InvestmentRow;
