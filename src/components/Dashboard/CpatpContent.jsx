import React from "react";

const CpatpContent = () => {
  const topics = [
    {
      id: 1,
      title: "Hidung",
      description: "",
      gambar: "/nose.jpg",
    },
    {
      id: 2,
      title: "Faring, Laring, Trakea",
      description: "",
      gambar: "/faring.jpg",
    },
    {
      id: 3,
      title: "Paru-Paru (Bronkus, Bronkiolus, dan Alveolus)",
      description: "",
      gambar: "/bronkus.jpg",
    },
  ];

  return (
    <div className="container mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Organ Pernafasan</h2>
      {topics.map((topic) => (
        <div key={topic.id} className="border p-4 rounded mb-4">
          <img
            src={`${topic.gambar}`}
            alt={topic.title}
            className="w-full h-auto object-cover mb-4 max-h-96"
          />
          <h3 className="text-xl font-semibold mb-2">{topic.title}</h3>
          <p className="text-gray-700 mb-4">{topic.description}</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded">
            Pelajari Lebih Lanjut
          </button>
        </div>
      ))}
    </div>
  );
};

export default CpatpContent;
