import React, { useState } from "react";
import "./styles.css";
import surveyQuestions from "./SurveyQuestions";
import Question from "./components/Question";
import Navigate from "./components/Navigate";
import SurveyAnswers from "./SurveyAnswers";
import { v4 as uuidv4 } from "uuid";
export default function App() {
  let [Index, setIndex] = useState(0);
  let totalSurveyQuestions = surveyQuestions.length;
  let [questionOnScreen, setQuestionOnScreen] = useState(
    <h1>Hello! Welcome to the survey</h1>
  );
  let [, setSurveyAnswers] = useState(SurveyAnswers);
  let [surveyStarted, setSurveyStarted] = useState(false);

  //To go to next question
  function nextQuestion() {
    if (surveyStarted === false) {
      startSurvey();
    }
    setIndex((prevValue) => {
      if (prevValue >= surveyQuestions.length - 1) {
        console.log();
      } else {
        return prevValue + 1;
      }
    });
    setQuestionOnScreen(() => {
      if (Index === undefined) {
        return <button>Submit</button>;
      } else {
        return (
          <Question
            questionNumber={surveyQuestions[Index].questionNumber}
            totalSurveyQuestions={totalSurveyQuestions}
            question={surveyQuestions[Index].question}
            handleAnswer={handleAnswer}
          />
        );
      }
    });
  }

  //Start the survey
  function startSurvey() {
    setSurveyStarted(true);
    SurveyAnswers.push({});
    SurveyAnswers[SurveyAnswers.length - 1].sessionId = uuidv4();
  }

  //Submit the Survey
  function submitSurvey(event) {
    SurveyAnswers[SurveyAnswers.length - 1].status = "Completed";
    localStorage.setItem("surveyAnswers", JSON.stringify(SurveyAnswers));
    console.log(SurveyAnswers);
    event.target.innerText = "Successfully Submitted";
    event.target.style.backgroundColor = "green";
    setTimeout(() => {
      event.target.innerText = "Thank you for participating in the Survey";
    }, 5000);
  }

  //For navigating between the questions
  function handleNavigation(event) {
    setQuestionOnScreen(
      <Question
        questionNumber={
          surveyQuestions[event.target.innerText - 1].questionNumber
        }
        totalSurveyQuestions={totalSurveyQuestions}
        question={surveyQuestions[event.target.innerText - 1].question}
        handleAnswer={handleAnswer}
      />
    );
  }

  //Saving the Survey Answers as a js object in an Array of js objects
  let q1Rating,
    q2Rating,
    q3Rating,
    q4Rating = null;
  function handleAnswer(event) {
    let questionNum = event.target.value;
    switch (questionNum) {
      case "1":
        q1Rating = event.target.innerText;
        SurveyAnswers[SurveyAnswers.length - 1].question1 = q1Rating;
        break;
      case "2":
        q2Rating = event.target.innerText;
        SurveyAnswers[SurveyAnswers.length - 1].question2 = q2Rating;
        break;
      case "3":
        q3Rating = event.target.innerText;
        SurveyAnswers[SurveyAnswers.length - 1].question3 = q3Rating;
        break;
      case "4":
        q4Rating = event.target.innerText;
        SurveyAnswers[SurveyAnswers.length - 1].question4 = q4Rating;
        break;
      default:
        break;
    }
    setSurveyAnswers(SurveyAnswers);
  }

  return (
    //Mapping Each survey question to a navigation button
    <div className="App">
      {surveyQuestions.map((surveyQuestion) => (
        <Navigate
          key={surveyQuestion.questionNumber}
          className={"navigation-buttons"}
          questionNumber={surveyQuestion.questionNumber}
          handleNavigation={handleNavigation}
        />
      ))}

      {/* State of the question on screen */}
      {questionOnScreen}

      {/* If ArrayIndexOutOfBounds then show submit button or else show next button */}
      {Index !== undefined ? (
        <button onClick={nextQuestion} className="next-button">
          Next
        </button>
      ) : (
        <button onClick={submitSurvey} className="next-button">
          Submit
        </button>
      )}
    </div>
  );
}
