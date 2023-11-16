export default function User_Input({ input, onChangeInput }) {
  return (
    <div id="user-input" className="input-group input-block">
      <p>
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={input.initialInvestment}
            onChange={(event) =>
              onChangeInput("initialInvestment", event.target.value)
            }
          ></input>
        </div>

        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            value={input.annualInvestment}
            onChange={(event) =>
              onChangeInput("annualInvestment", event.target.value)
            }
          ></input>
        </div>
      </p>
      <p>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            required
            value={input.expectedReturn}
            onChange={(event) =>
              onChangeInput("expectedReturn", event.target.value)
            }
          ></input>
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            required
            value={input.duration}
            onChange={(event) => onChangeInput("duration", event.target.value)}
          ></input>
        </div>
      </p>
    </div>
  );
}
