let surveyAnswers;
// Retrieve localStorage
const savedSurveyAnswers = JSON.parse(localStorage.getItem("surveyAnswers"));
// Check if it's an array
if (Array.isArray(savedSurveyAnswers)) {
  surveyAnswers = savedSurveyAnswers;
} else {
  surveyAnswers = [];
}
export default surveyAnswers;
