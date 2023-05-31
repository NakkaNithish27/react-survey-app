import React, { useState } from "react";
import SurveyAnswers from "../SurveyAnswers";
function Question(props) {
  let [input, SetInput] = useState("");
  //Track inputText entered in textArea
  function updateInput(event) {
    SetInput(event.target.value);
    SurveyAnswers[SurveyAnswers.length - 1].question5 = input;
  }
  return (
    <div>
      {/* Current Question Number */}
      <h2>{props.questionNumber + "/" + props.totalSurveyQuestions}</h2>
      {/* Survey Question */}
      <h1>{props.question}</h1>

      {/* Conditionally Rendering Rating scale based on question number */}
      {props.questionNumber === 4 ? (
        // Adding onClick event listeners to All rating buttons
        <div>
          {/* Rendering 10 Rating Scale */}
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            1
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            2
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            3
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            4
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            5
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            6
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            7
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            8
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            9
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            10
          </button>
        </div>
      ) : props.questionNumber === 5 ? (
        // Rendering textArea
        <div>
          <textarea
            onChange={updateInput}
            placeholder="Type your suggesstion"
            rows="4"
            cols="50"
          ></textarea>
        </div>
      ) : (
        <div>
          {/* Rendering 5 Rating Scale */}
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            1
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            2
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            3
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            4
          </button>
          <button
            onClick={props.handleAnswer}
            value={props.questionNumber}
            className="rate"
          >
            5
          </button>
        </div>
      )}
    </div>
  );
}
export default Question;
