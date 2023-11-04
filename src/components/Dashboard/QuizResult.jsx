import React from "react";

const QuizResult = ({ score, totalQuestions }) => {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-4">Hasil Quiz</h2>
      <p>
        Anda telah menjawab {score} dari {totalQuestions} pertanyaan dengan
        benar.
      </p>
    </div>
  );
};

export default QuizResult;
