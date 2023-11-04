import React, { useState } from "react";
import QuizQuestionSistem from "./QuizQuestion";
import QuizResult from "./QuizResult";

const questions = [
  {
    id: 1,
    question: "Apa yang menjadi penyebab utama penyakit asma?",
    options: [
      "Infeksi virus",
      "Radikal bebas dalam udara",
      "Reaksi alergi terhadap zat tertentu",
      "Kurangnya olahraga fisik",
    ],
    correctAnswer: "Reaksi alergi terhadap zat tertentu",
  },
  {
    id: 2,
    question: "Penyakit apa yang ditandai dengan peradangan pada bronkus?",
    options: ["Asma", "Pneumonia", "Bronkitis", "Emfisema"],
    correctAnswer: "Bronkitis",
  },
  {
    id: 3,
    question: "Apa yang disebut dengan penyakit radang paru-paru?",
    options: ["Asma", "Bronkitis", "Pneumonia", "Tuberkulosis"],
    correctAnswer: "Pneumonia",
  },
  {
    id: 4,
    question:
      "Apa nama penyakit kronis yang menyebabkan penyempitan saluran udara?",
    options: [
      "Asma",
      "Bronkitis",
      "Pneumonia",
      "Penyakit Paru-Paru Obstruktif Kronik (PPOK)",
    ],
    correctAnswer: "Penyakit Paru-Paru Obstruktif Kronik (PPOK)",
  },
];

const QuizPenyakit = () => {
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

export default QuizPenyakit;
