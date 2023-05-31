import React from "react";
function Navigate(props) {
  return (
    <button onClick={props.handleNavigation} className={props.className}>
      {props.questionNumber}
    </button>
  );
}
export default Navigate;
