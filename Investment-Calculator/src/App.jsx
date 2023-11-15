import Header from "./Components/Header";
import User_Input from "./Components/User_Input";
import Results from "./Components/Results";
function App() {
  return (
    <>
      <Header />
      <div id="user-input" className="input-group">
        <div>
          <div className="input-block">
            <label>Initial Investment</label>
            <User_Input label="Initial Investment" />
          </div>
          <div className="input-block">
            <label>Expected Result</label>
            <User_Input />
          </div>
        </div>
        <div>
          <div className="input-block">
            <label>Annual Investment</label>
            <User_Input />
          </div>
          <div className="input-block">
            <label>Duration</label>
            <User_Input />
          </div>
        </div>
      </div>

      <Results />
    </>
  );
}

export default App;
