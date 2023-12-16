import QuestionTimer from "./QuestionTimer";
import Answers from "./Answers";
export default function Question({
  questionText,
  onSelectAnswer,
  onSkipAnswer,
  answers,
  userAnswers,
  answerState,
}) {
  return (
    <div id="question">
      <QuestionTimer timer={10000} onTimeOut={onSkipAnswer} />
      <h2>{questionText}</h2>
      <Answers
        answers={answers}
        userAnswers={userAnswers}
        answerState={answerState}
        onSelectAnswer={onSelectAnswer}
      />
    </div>
  );
}
