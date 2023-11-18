import React, { useState } from "react";

const PenyakitPage = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const data = [
    {
      id: 1,
      judul: "Penyakit Sistem Pernafasan yang disebabkan oleh rokok",
      image: "",
      paragraphs: [
        "Perokok mengalami berbagai macam masalah kesehatan, salah satunya adalah batuk yang sulit berhenti. Adanya penggumpalan silia di jalur pernapasan membuat lendir sulit untuk dikeluarkan. Penumpukan lendir juga mengakibatkan sempitnya jalan napas, sehingga menghalangi masuknya oksigen. Berikut penyakit-penyakit yang disebabkan oleh rokok",
      ],
    },
    {
      id: 2,
      judul: "Bronkitis",
      image: "/2_1.PNG",
      paragraphs: [
        "Bronkitis adalah iritasi yang terjadi pada jalur napas atau bronkus. Iritasi tersebut menyebabkan jalur napas menyempit karena tertutup oleh lendir. Orang yang menderita bronkitis akan mengalami kesulitan bernapas. Jika iritasi ini terus menerus terjadi dalam waktu yang lama, maka akan menjadi bronkitis kronis yang menyebabkan kerusakan permanen pada jalur napas atau bronkus.",
      ],
    },
    {
      id: 3,
      judul: "Aterosklerosis",
      image: "/2_2.PNG",
      paragraphs: [
        "Beberapa zat kimia yang ada di dalam rokok dapat masuk ke dalam sistem peredaran darah manusia. Zat-zat tersebut mengiritasi pembuluh darah. Iritasi tersebut ikut berkontribusi dalam penyumbatan lemak pada pembuluh darah.",
      ],
    },
    {
      id: 4,
      judul: "Kanker paru-paru",
      image: "/2_3.PNG",
      paragraphs: [
        "Pada tahun 2018 penderita yang meninggal akibat kanker paru-paru di Indonesia mencapai 26.000 jiwa (Yayasan Kanker Indonesia, 2020). Penyebab dari kanker paru-paru adalah kebiasaan buruk merokok. Ada sekitar 50 zat di dalam rokok yang menyebabkan kanker. Sel kanker tumbuh dan mengambil alih tempat di paru-paru yang dipergunakan untuk pertukaran gas. Akibatnya pertukaran gas antara oksigen dan karbon dioksida menjadi tidak maksimal.",
      ],
    },
    {
      id: 5,
      judul: "Efisema",
      image: "/2_4.PNG",
      paragraphs: [
        "Emfisema adalah penyakit yang merusak bagian paru-paru yaitu alveolus, sehingga penderita penyakit ini tidak dapat mengambil oksigen maupun mengeluarkan karbondioksida secara maksimal, akibatnya penderita memiliki nafas yang pendek. Penyakit ini bersifat permanen, bahkan jika seorang perokok berhenti merokok sekalipun",
      ],
    },

    // Tambahkan data sesuai kebutuhan
  ];

  const goToPage = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === data.length - 1 ? 0 : prevPage + 1
    );
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) =>
      prevPage === 0 ? data.length - 1 : prevPage - 1
    );
  };

  return (
    <div className="flex">
      {/* Konten utama */}
      <div className="w-3/4 p-4 mr-4 border-r">
        {data.map((page, index) => (
          <div
            key={page.id}
            className={`page ${index === currentPage ? "block" : "hidden"}`}
          >
            <h3 className="text-xl font-bold mb-4">{page.judul}</h3>
            {page.image && (
              <img
                src={page.image}
                alt={`Gambar ${page.id}`}
                className="object-cover max-w-full max-h-96 mb-4"
              />
            )}
            {page.paragraphs.map((paragraph, paragraphIndex) => (
              <p key={paragraphIndex} className="text-xl mb-2 text-justify">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </div>

      {/* Navigasi samping di sebelah kanan */}
      <div className="w-1/4 p-4 border-l">
        <h3 className="text-xl font-bold mb-4">Halaman</h3>
        <ul>
          {data.map((page, index) => (
            <li
              key={page.id}
              className={`cursor-pointer ${
                index === currentPage ? "font-semibold" : ""
              }`}
              onClick={() => goToPage(index)}
            >
              {`Halaman ${index + 1}`}
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <button
            onClick={goToPrevPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded mr-2"
          >
            Prev
          </button>
          <button
            onClick={goToNextPage}
            className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PenyakitPage;
