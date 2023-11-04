import React, { useState } from "react";
import QuizQuestionSistem from "./QuizQuestion";
import QuizResult from "./QuizResult";

const questions = [
  {
    id: 1,
    question: "Apa yang merupakan organ utama dalam sistem pernafasan manusia?",
    options: ["Jantung", "Paru-paru", "Hati", "Ginjal"],
    correctAnswer: "Paru-paru",
  },
  {
    id: 2,
    question: "Apa yang terjadi saat Anda menghirup udara?",
    options: [
      "Oksigen masuk ke darah, karbon dioksida keluar dari tubuh",
      "Karbondioksida masuk ke darah, oksigen keluar dari tubuh",
      "Tidak ada perubahan",
      "Semua jawaban salah",
    ],
    correctAnswer: "Oksigen masuk ke darah, karbon dioksida keluar dari tubuh",
  },
  // Tambahkan pertanyaan lain sesuai kebutuhan
];

const QuizPernafasan = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (answer) => {
    // Menyimpan jawaban pengguna dengan menggunakan id pertanyaan sebagai kunci
    setUserAnswers({ ...userAnswers, [questions[currentQuestion].id]: answer });
  };

  const handleNextQuestion = () => {
    // Pindah ke pertanyaan berikutnya jika belum mencapai pertanyaan terakhir
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handleSubmit = () => {
    // Menghitung skor berdasarkan jawaban pengguna
    const score = calculateScore();
    // Menampilkan hasil quiz
    setShowResult(true);
  };

  const calculateScore = () => {
    // Menghitung skor berdasarkan jawaban pengguna yang benar
    let score = 0;
    questions.forEach((question) => {
      if (userAnswers[question.id] === question.correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="container mx-auto p-4">
      {showResult ? (
        <QuizResult
          score={calculateScore()}
          totalQuestions={questions.length}
        />
      ) : (
        <QuizQuestionSistem
          question={questions[currentQuestion]}
          onAnswerSelect={handleAnswerSelect}
          onNextQuestion={handleNextQuestion}
          isLastQuestion={currentQuestion === questions.length - 1}
          onSubmit={handleSubmit}
        />
      )}
    </div>
  );
};

export default QuizPernafasan;
