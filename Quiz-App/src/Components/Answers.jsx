import { useRef } from "react";
export default function Answers({
  answers,
  userAnswers,
  answerState,
  onSelectAnswer,
}) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort((a, b) => Math.random() - 0.5);
  }
  return (
    <ul id="answers">
      {shuffledAnswers.current.map((answer) => {
        let cssClass;
        if (answer === userAnswers[userAnswers.length - 1]) {
          cssClass = answerState ? "selected" : "";
          if (answerState === "correct") cssClass = "correct";
          if (answerState === "wrong") cssClass = "wrong";
        }

        return (
          <li key={answer} className="answer">
            <button className={cssClass} onClick={() => onSelectAnswer(answer)}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
