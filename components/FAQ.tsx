"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Apakah pendaftaran dilakukan secara online?",
    answer:
      "Ya, seluruh proses pendaftaran dilakukan secara online melalui website resmi sekolah.",
  },
  {
    question: "Apa saja syarat pendaftaran siswa baru?",
    answer:
      "Calon siswa wajib menyiapkan fotokopi ijazah, kartu keluarga, akta kelahiran, dan pas foto terbaru.",
  },
  {
    question: "Apakah tersedia jalur beasiswa?",
    answer:
      "Sekolah menyediakan beberapa program beasiswa berdasarkan prestasi akademik maupun non-akademik.",
  },
  {
    question: "Bagaimana cara melihat hasil seleksi?",
    answer:
      "Hasil seleksi dapat dilihat melalui dashboard akun masing-masing siswa setelah proses verifikasi selesai.",
  },
];

export default function FAQ() {
  const [active, setActive] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActive(active === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full py-24 bg-[#edf4ef]"
    >
      <div className="max-w-4xl mx-auto px-6 lg:px-10">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-green-700 font-semibold text-sm uppercase tracking-widest">
            FAQ
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Pertanyaan Yang
            <span className="text-green-700"> Sering Ditanyakan</span>
          </h2>

          <p className="text-gray-500 mt-5 leading-relaxed">
            Temukan jawaban dari beberapa pertanyaan umum mengenai
            proses penerimaan siswa baru.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">

          {faqs.map((faq, index) => {
            const isOpen = active === index;

            return (
              <div
                key={index}
                className="
                  bg-white
                  rounded-[28px]
                  overflow-hidden
                  shadow-sm
                  border
                  border-gray-100
                  transition-all
                  duration-300
                "
              >

                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex
                    items-center
                    justify-between
                    text-left
                    p-7
                    hover:bg-green-50
                    transition
                  "
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-5">
                    {faq.question}
                  </h3>

                  <div
                    className={`
                      min-w-11
                      h-11
                      rounded-full
                      flex
                      items-center
                      justify-center
                      transition-all
                      duration-300
                      ${
                        isOpen
                          ? "bg-green-700 text-white rotate-180"
                          : "bg-[#edf4ef] text-green-700"
                      }
                    `}
                  >
                    <ChevronDown size={20} />
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all
                    duration-300
                    ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <p className="px-7 pb-7 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}