import { useRef } from "react";
export default function Answers({
  answers,
  userAnswers,
  answerState,
  selectedAnswer,
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
        if (answer === selectedAnswer) {
          cssClass = answerState ? "selected" : "";
          if (answerState === "correct") cssClass = "correct";
          if (answerState === "wrong") cssClass = "wrong";
        }

        return (
          <li key={answer} className="answer">
            <button
              className={cssClass}
              disabled={answerState !== ""}
              onClick={() => onSelectAnswer(answer)}
            >
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
