import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Faq() {
  const [isOpen, setIsOpen] = useState<string | null>(null);

  return (
    <section className="faq bg-white xl:pt-10">
      <div className="py-20 px-8 md:px-32 bg-[url('/src/assets/img/dotted.png')] w-full min-[1700px]:w-[1700px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 ">
          <div className="w-full lg:w-1/3">
            <h1 className="text-black font-bold text-4xl">FAQ</h1>
            <p className="mt-4 text-sm  2xl:text-base text-[#202020]">
              Temukan Jawaban atas Pertanyaan Anda di Sini
            </p>
            <p className="my-6 font-semibold text-sm  2xl:text-base text-[#202020]">
              Masih ada pertanyaan?
            </p>
            <Link to={"/contact"}>
              <Button className="bg-[#0366FF] hover:bg-[#0366FF]/70 text-sm 2xl:text-base">
                Hubungi Kami
              </Button>
            </Link>
          </div>
          <Accordion
            className="w-full"
            type="single"
            collapsible
            onValueChange={(value) => setIsOpen(value)}
          >
            {[
              {
                value: "item-1",
                label: "Seberapa aman data kami setelah dikompresi? Apakah ada risiko kehilangan atau kebocoran data?",
                desc: "Keamanan data adalah prioritas utama kami. Sistem kompresi kami menggunakan enkripsi end-to-end dan dapat diintegrasikan dengan server on-premise untuk kontrol penuh atas data Anda. Kami juga menyediakan opsi backup otomatis untuk memastikan tidak ada data yang hilang selama proses kompresi.",
              },
              {
                value: "item-2",
                label:
                  "Apakah kualitas video CCTV akan menurun setelah dikompresi? Bagaimana dengan detail penting seperti wajah atau plat nomor?",
                desc: "Teknologi kompresi kami dirancang khusus untuk mempertahankan detail penting dalam rekaman CCTV. Anda dapat mengkustomisasi tingkat kompresi sesuai kebutuhan, dengan tetap mempertahankan kualitas pada area-area penting seperti wajah, plat nomor, atau area spesifik lainnya. Bahkan dengan rasio kompresi hingga 95%, detail crucial tetap terjaga.",
              },
              {
                value: "item-3",
                label:
                  "Berapa lama waktu yang dibutuhkan untuk mengimplementasikan sistem ini di perusahaan kami?",
                desc: "Waktu implementasi bervariasi tergantung skala dan kebutuhan spesifik perusahaan Anda. Umumnya, untuk sistem dasar dapat selesai dalam 1-2 minggu, termasuk instalasi, konfigurasi, dan training tim Anda. Kami juga menyediakan dukungan teknis 24/7 selama masa transisi.",
              },
              {
                value: "item-4",
                label:
                  "Apakah sistem ini kompatibel dengan infrastruktur IT yang sudah ada di perusahaan kami?",
                desc: "Ya, solusi kami dirancang untuk mudah diintegrasikan dengan berbagai sistem yang ada. Kami dapat menyesuaikan dengan infrastruktur Anda saat ini, baik itu sistem CCTV, storage, atau platform manajemen data yang sudah berjalan. Sebelum implementasi, tim kami akan melakukan assessment menyeluruh untuk memastikan kompatibilitas dan transisi yang mulus.",
              },
              {
                value: "item-5",
                label: "Bagaimana dengan ROI (Return on Investment) dari implementasi sistem ini?",
                desc: "Dengan penghematan ruang penyimpanan hingga 95%, Anda dapat signifikan mengurangi biaya hardware storage dan maintenance. Klien kami rata-rata mengalami penghematan 40-60% dari total biaya penyimpanan data dalam jangka panjang. Kami dapat membantu menghitung estimasi ROI spesifik untuk perusahaan Anda berdasarkan skala dan kebutuhan.",
              },
            ].map(({ value, label, desc }) => (
              <AccordionItem
                key={value}
                value={value}
                className="mt-4 bg-white border border-[#F3F3F3] p-4 rounded-3xl"
              >
                <AccordionTrigger
                  className={`text-start font-bold text-sm lg:text-base ${
                    isOpen === value ? "text-[#0366FF]" : "text-[#474747]"
                  }`}
                >
                  {label}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-[#212121] bg-[#FBFBFB] p-3 rounded-xl">
                  {desc}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
