import { useState, useCallback } from "react";
import QUESTIONS from "../questions";

import Summary from "./Summary";

import Question from "./Question";
export default function Quiz() {
  const [userAnswers, setUserAnswers] = useState([]);
  // const [answerState, setAnswerState] = useState("");
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = activeQuestionIndex === QUESTIONS.length;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(
    selectedAnswer
  ) {
    // setAnswerState("answered");

    setUserAnswers((prevUserAnswer) => [...prevUserAnswer, selectedAnswer]);

    // setTimeout(() => {
    //   if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) {
    //     setAnswerState("correct");
    //   } else {
    //     setAnswerState("wrong");
    //   }
    //   setTimeout(() => {
    //     setAnswerState("");
    //   }, 1000);
    // }, 1000);
  },
  []);

  const handleSkipAnswer = useCallback(() => {
    handleSelectAnswer(null);
  }, [handleSelectAnswer]);

  if (quizIsComplete) {
    return <Summary userAnswers={userAnswers}></Summary>;
  }

  return (
    <div id="quiz">
      <Question
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onSkipAnswer={handleSkipAnswer}
        userAnswers={userAnswers}
        // answerState={answerState}
      />
    </div>
  );
}
