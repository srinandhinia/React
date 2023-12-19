import quizCompleteImg from "../assets/quiz-complete.png";
import QUESTIONS from "../questions";
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter(
    (answer, index) => answer === QUESTIONS[index].answers[0]
  );
  const correctAnswersPercentage = Math.round(
    (correctAnswers.length / userAnswers.length) * 100
  );
  const skippedAnswersPercentage = Math.round(
    (skippedAnswers.length / userAnswers.length) * 100
  );
  const wrongAnswersPercentage =
    100 - correctAnswersPercentage - skippedAnswersPercentage;
  return (
    <div id="summary">
      <h2>Quiz is completed</h2>
      <img src={quizCompleteImg} alt="QUIZ-COMPLETE IMAGE"></img>
      <div id="summary-stats">
        <p>
          <span className="number">{skippedAnswersPercentage}%</span>
          <span className="text">skipped</span>
        </p>
        <p>
          <span className="number">{correctAnswersPercentage}%</span>
          <span className="text">answered correctly</span>
        </p>
        <p>
          <span className="number">{wrongAnswersPercentage}%</span>
          <span className="text">answered wrongly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssClass = "user-answer";
          if (answer === QUESTIONS[index].answers[0]) cssClass += " correct";
          else if (answer === null) cssClass += " skipped";
          else cssClass += " wrong";
          return (
            <li key={index}>
              <h3>{index + 1}</h3>
              <p className="question">{QUESTIONS[index].text}</p>
              <p className={cssClass}>{answer ?? "skipped"}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
