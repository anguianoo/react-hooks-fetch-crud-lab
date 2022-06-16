import React, { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {
  const [questions, setQuestions] = useState("");
  const url = "http://localhost:4000/questions";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setQuestions(data));
  }, []);

  const questionItems = questions.map((q) => (
    <QuestionItem
      key={q.id}
      question={q}
      onDeleteClick={handleDeleteClick}
      onAnswerChange={handleAnswerChange}
    />
  ));
  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>
        {
          /* display QuestionItem components here after fetching */
          questionItems
        }
      </ul>
    </section>
  );
}

export default QuestionList;
