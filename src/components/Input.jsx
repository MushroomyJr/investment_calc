const Input = () => {
  return (
    <form id="user-input">
      <div>
        <div>
          <label>Initial Investment</label>
          <input type="number" min="0.01" step="0.01" />
        </div>
        <div>
          <label>Anual Investment</label>
          <input type="number" />
        </div>
        <div>
          <label>Expected Return</label>
          {/* <select>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select> */}
          <input type="range"></input>
        </div>
        <div>
          <label>Duration</label>
          <input type="number" min="1" step="1" />
        </div>
      </div>
    </form>
  );
};

export default Input;
