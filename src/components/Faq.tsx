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
                label: "Apa itu Tuntasinaja?",
                desc: "Perusahaan teknologi inovatif yang berfokus pada solusi kompresi data untuk kebutuhan bisnis modern. Kami berdedikasi untuk membantu perusahaan di berbagai industri dalam mengoptimalkan penggunaan data dengan cara yang lebih efisien, cepat, dan hemat biaya.",
              },
              {
                value: "item-2",
                label:
                  "Bagaimana cara menggunakan layanan kompresi data di Tuntasinaja?",
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ad culpa fuga illo! Maxime voluptas, quam enim explicabo incidunt facilis voluptates, neque ipsa fugit, id ex debitis! Aspernatur, hic possimus?",
              },
              {
                value: "item-3",
                label:
                  "Apakah ada biaya untuk menggunakan layanan Tuntasinaja?",
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ad culpa fuga illo! Maxime voluptas, quam enim explicabo incidunt facilis voluptates, neque ipsa fugit, id ex debitis! Aspernatur, hic possimus?",
              },
              {
                value: "item-4",
                label:
                  "Apa saja jenis file yang bisa dikompresi di Tuntasinaja?",
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ad culpa fuga illo! Maxime voluptas, quam enim explicabo incidunt facilis voluptates, neque ipsa fugit, id ex debitis! Aspernatur, hic possimus?",
              },
              {
                value: "item-5",
                label: "Apakah Tuntasinaja menyediakan layanan konsultasi?",
                desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ad culpa fuga illo! Maxime voluptas, quam enim explicabo incidunt facilis voluptates, neque ipsa fugit, id ex debitis! Aspernatur, hic possimus?",
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
