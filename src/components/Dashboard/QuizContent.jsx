import React from "react";

const QuizContent = () => {
  const topics = [
    {
      id: 1,
      title: "Sistem Pernafasan",
      description:
        "Sistem pernafasan adalah serangkaian organ yang memungkinkan manusia untuk bernafas dan mengambil oksigen dari udara. Sistem ini melibatkan organ-organ seperti paru-paru, bronkus, dan diafragma.",
      gambar: "/sistem.png",
      link: "/dashboard/quiz-pernafasan",
    },
    {
      id: 2,
      title: "Penyakit pada Sistem Pernafasan",
      description:
        "Ada berbagai penyakit yang dapat memengaruhi sistem pernafasan, termasuk asma, bronkitis, pneumonia, dan penyakit paru-paru kronis. Penyakit-penyakit ini memerlukan perawatan medis yang tepat.",
      gambar: "/penyakit.jpeg",
      link: "/dashboard/quiz-pernafasan",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Pilihan Quiz</h2>
      {topics.map((topic) => (
        <div key={topic.id} className="border p-4 rounded mb-4">
          <img
            src={`${topic.gambar}`}
            alt={topic.title}
            className="w-full h-auto object-cover mb-4 max-h-96"
          />
          <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
          <p className="text-gray-700 mb-4">{topic.description}</p>
          <a
            href={`${topic.link}`}
            className="block bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded text-center mt-2 w-24"
          >
            Kerjakan Quiz
          </a>
        </div>
      ))}
    </div>
  );
};

export default QuizContent;
