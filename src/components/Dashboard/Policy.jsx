import React from "react";

const Policy = () => {
  const handleNextClick = () => {
    window.location.href = "./overview";
  };
  return (
    <div>
      <h1>
        {" "}
        <strong>Kebijakan Privasi untuk Media Sistem Pernafasan</strong>
      </h1>

      <p>
        Di Media Sistem Pernafasan, dapat diakses dari{" "}
        <a
          href="https://kel1-kapita.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          https://kel1-kapita.vercel.app/
        </a>
        , salah satu prioritas utama kami adalah privasi pengunjung kami.
        Dokumen Kebijakan Privasi ini berisi jenis informasi yang dikumpulkan
        dan dicatat oleh Media Sistem Pernafasan dan bagaimana kami
        menggunakannya.
      </p>

      <p>
        Jika Anda memiliki pertanyaan tambahan atau memerlukan informasi lebih
        lanjut tentang Kebijakan Privasi kami, jangan ragu untuk menghubungi
        kami.
      </p>

      <h2>
        {" "}
        <strong>Log Files</strong>
      </h2>
      <ul>
        <li>
          Media Sistem Pernafasan mengikuti prosedur standar penggunaan file
          log. File-file ini mencatat pengunjung ketika mereka mengunjungi situs
          web.
        </li>
      </ul>

      <h2>
        <strong>Kebijakan Privasi Pihak Ketiga</strong>
      </h2>
      <ul>
        <li>
          Perlu diingat bahwa Media Sistem Pernafasan tidak memiliki akses atau
          kontrol atas cookie ini yang digunakan oleh pengiklan pihak ketiga.
        </li>
      </ul>

      {/* Sisanya diubah menjadi list sesuai struktur yang serupa */}

      <button
        className="bg-button text-black border font-bold py-2 px-4 rounded"
        onClick={handleNextClick}
      >
        {" "}
        Next<span className="ml-2">&#8594;</span>
      </button>
    </div>
  );
};

export default Policy;
