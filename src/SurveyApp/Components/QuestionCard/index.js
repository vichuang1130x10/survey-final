import React from "react";

const QuestionCard = ({ title, id }) => (
  <div className="question-card">
    <h3>{`${id + 1}. ${title}`}</h3>
  </div>
);

export default QuestionCard;
