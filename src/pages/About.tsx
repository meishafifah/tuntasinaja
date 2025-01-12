import Faq from "@/components/Faq";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import aboutFounder from "../assets/img/aboutFounder.png";
import homeSteps2 from "../assets/img/homeSteps2.png";
import aboutHero from "../assets/img/aboutHero.png";
import aboutHero1 from "../assets/img/aboutHero1.png";
import aboutHero2 from "../assets/img/aboutHero2.png";
import aboutHero3 from "../assets/img/aboutHero3.png";
import tahun from "../assets/img/tahun.svg";
import fileKompress from "../assets/img/fileKompress.svg";
import client from "../assets/img/client.svg";
import ukuranFile from "../assets/img/ukuranFile.svg";
import layananTeknologi from "../assets/img/layananTeknologi.svg";
import perkembanganTeknologi from "../assets/img/perkembanganTeknologi.svg";
import solusiDigital from "../assets/img/solusiDigital.svg";
import dukungan from "../assets/img/dukungan.svg";
import aboutVisi from "../assets/img/aboutVisi.svg";
import aboutVisi1 from "../assets/img/aboutVisi1.png";
import arrow1 from "../assets/img/arrow1.svg";
import aboutOurStory from "../assets/img/aboutOurStory.png";
import contactEllipse from "../assets/img/contactEllipse.png";
import kompresiCctv from "../assets/img/kompresiCctv.png";
import kompresiFile from "../assets/img/kompresiFile.png";
import kompresiImage from "../assets/img/kompresiImage.png";
import aboutTechnology1 from "../assets/img/aboutTechnology1.png";
import aboutTechnology2 from "../assets/img/aboutTechnology2.png";
import aboutOurServices from "../assets/img/aboutOurServices.png";
import aboutOurServices1 from "../assets/img/aboutOurServices1.png";
import aboutOurServices2 from "../assets/img/aboutOurServices2.png";
import aboutOurServices3 from "../assets/img/aboutOurServices3.png";
import aboutOurServices4 from "../assets/img/aboutOurServices4.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Chatbot from "@/components/Chatbot";
import { useEffect } from "react";
import AOS from "aos";

export default function About() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);
  return (
    <div className="min-h-screen w-full relative bg-[#0366FF]">
      <Navbar />
      <Chatbot />
      <section id="about" data-navbar-color="bg-[#0366FF]" className="bg-white">
        <div className="rounded-bl-[100px] md:rounded-bl-[150px] lg:rounded-bl-[200px] bg-gradient-to-b from-[#0366FF] to-[#0252CC] relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden">
          <img
            className="animate-pulse-slow absolute top-4 -left-20 lg:-top-10 lg:left-0 z-0 pointer-events-none"
            src={aboutHero1}
            alt=""
          />
          <img
            className="animate-pulse-slow absolute top-12 right-12 lg:-bottom-96 lg:left-10 z-0 pointer-events-none"
            src={aboutHero2}
            alt=""
          />
          <img
            className="hidden lg:block animate-pulse-slow absolute -top-[130px] -right-80 z-0 pointer-events-none"
            src={aboutHero3}
            alt=""
          />
          <div className="px-8 md:px-32 pb-16 lg:pt-40 lg:pb-10 min-[1700px]:w-[1700px]">
            <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 relative z-10">
              <div>
                <h1 className="text-white font-bold text-2xl lg:text-4xl">
                  Tentang Tuntasinaaja
                </h1>
                <p className="text-white mt-4 lg:text-base">
                  Perusahaan teknologi inovatif yang berfokus pada solusi
                  kompresi data untuk kebutuhan bisnis modern. Kami berdedikasi
                  untuk membantu perusahaan di berbagai industri dalam
                  mengoptimalkan penggunaan data dengan cara yang lebih efisien,
                  cepat, dan hemat biaya.
                </p>
              </div>
              <img
                className="w-[350px] lg:w-[500px] order-first lg:order-last hover:scale-110 duration-700"
                src={aboutHero}
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="aboutTraction"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden bg-white"
      >
        <div className="px-8 md:px-32 pt-20 xl:pt-28 min-[1700px]:w-[1700px]">
          <h2 className="mb-6 font-bold text-xl lg:text-2xl text-[#212121] text-center">
            Tuntasinaja Dalam Angka
          </h2>
          <div className="rounded-[20px] text-[#212121] bg-[#FBFBFB] p-6 grid md:grid-cols-2 lg:grid-cols-4 justify-items-center items-center gap-10 md:gap-6">
            <div className="flex flex-col items-center self-start text-center hover:scale-105 duration-700">
              <img className="w-12" src={tahun} alt="" />
              <h2 className="mt-4 font-semibold text-xl lg:text-2xl">
                +3 Tahun
              </h2>
              <p className="mt-2 text-sm lg:text-base">
                Pengalaman mengembangkan teknologi
              </p>
            </div>
            <div className="flex flex-col items-center self-start text-center hover:scale-105 duration-700">
              <img className="w-12" src={fileKompress} alt="" />
              <h2 className="mt-4 font-semibold text-xl lg:text-2xl">
                +10 Ribu
              </h2>
              <p className="mt-2 text-sm lg:text-base">
                File video yang teah berhasil di kompresi
              </p>
            </div>
            <div className="flex flex-col items-center self-start text-center hover:scale-105 duration-700">
              <img className="w-12" src={client} alt="" />
              <h2 className="mt-4 font-semibold text-xl lg:text-2xl">+8</h2>
              <p className="mt-2 text-sm lg:text-base">Supported extension</p>
            </div>
            <div className="flex flex-col items-center self-start text-center hover:scale-105 duration-700">
              <img className="w-12" src={ukuranFile} alt="" />
              <h2 className="mt-4 font-semibold text-xl lg:text-2xl">24/7</h2>
              <p className="mt-2 text-sm lg:text-base">Layanan teknis</p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="aboutVisiMisi"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden bg-white"
      >
        <div className="px-8 md:px-32 pt-20 xl:pt-28 min-[1700px]:w-[1700px]">
          <div className="text-[#212121] grid grid-cols-1 lg:grid-cols-2 justify-items-center items-start gap-10 ">
            <div className="text-[#212121] relative z-10">
              <img
                className="absolute z-0 top-10 lg:top-12 left-2 lg:left-6 pointer-events-none"
                src={aboutVisi}
                alt=""
              />
              <img
                className="absolute z-0 top-10 lg:-top-12 left-2 lg:left-20 pointer-events-none"
                src={aboutVisi1}
                alt=""
              />
              <img
                className="absolute z-0 top-28 -left-20 md:top-18 md:-left-12 lg:top-48 lg:left-44 pointer-events-none animate-bounce"
                src={arrow1}
                alt=""
              />
              <h1 className="mb-8 text-center lg:text-start font-bold text-xl lg:text-2xl">
                Visi Kami
              </h1>
              <p className="text-sm lg:text-base relative z-1">
                Menjadi penyedia layanan teknologi terkemuka yang menawarkan
                solusi khusus sesuai kebutuhan klien, membantu perusahaan
                beradaptasi dan berkembang di era digital”
              </p>
            </div>
            <div className="text-[#212121] relative z-10">
              <h1 className="mb-8 text-center font-bold text-xl lg:text-2xl">
                Misi Kami
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl hover:scale-110 duration-700">
                  <img className="w-12" src={layananTeknologi} alt="" />
                  <p className="mt-4 text-sm lg:text-base">
                    Menyediakan layanan teknologi yang disesuaikan untuk
                    memenuhi kebutuhan spesifik setiap klien.
                  </p>
                </div>
                <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl hover:scale-110 duration-700">
                  <img className="w-12" src={perkembanganTeknologi} alt="" />
                  <p className="mt-4 text-sm lg:text-base">
                    Fokus pada pengembangan produk utama kami, termasuk jasa
                    pembuatan website dan aplikasi, teknologi kompresi data,
                    serta solusi penyimpanan server yang efisien.
                  </p>
                </div>
                <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl hover:scale-110 duration-700">
                  <img className="w-12" src={solusiDigital} alt="" />
                  <p className="mt-4 text-sm lg:text-base">
                    Membantu mereka memahami dan mengadopsi solusi digital yang
                    relevan
                  </p>
                </div>
                <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl hover:scale-110 duration-700">
                  <img className="w-12" src={dukungan} alt="" />
                  <p className="mt-4 text-sm lg:text-base">
                    Memberikan dukungan kepada perusahaan yang belum sepenuhnya
                    memanfaatkan teknologi modern
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="aboutOurStory"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden bg-white"
      >
        <div className="px-8 md:px-32 py-16 lg:py-20 min-[1700px]:w-[1700px]">
          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 relative z-10">
            <img
              data-aos="fade-right"
              className="w-[350px] lg:w-[500px] relative z-10"
              src={aboutOurStory}
              alt=""
            />
            <img
              className="absolute z-0 -top-4 left-24 lg:-top-8 lg:left-0 xl:left-32 min-[1700px]:left-48 pointer-events-none"
              src={contactEllipse}
              alt=""
            />
            <div data-aos="fade-left" className="text-[#212121] relative z-10">
              <h1 className="text-center lg:text-start font-bold text-xl lg:text-2xl">
                Our Back story
              </h1>
              <p className="mt-4 text-sm lg:text-base relative z-1">
                Nicholas terinspirasi dari laptop lag akibat memori penuh dan
                temannya yang memvakum pakaian menjadi lebih kecil tanpa merusak
                kualitas. Ide kompresi data pun lahir.
                <br />
                <br />
                Saat mendengar keluhan sulitnya akses dan playback CCTV, ia
                menciptakan solusi: CCTV cerdas yang bisa diakses dari mana saja
                dengan laporan otomatis.
                <br />
                <br />
                Dua tantangan ini melahirkan Tuntasinaja, teknologi efisien
                berbasis kompresi data dan AI
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="aboutFounder"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden bg-white"
      >
        <img
          className="absolute z-10 top-56 right-0 w-20 lg:w-auto pointer-events-none"
          src={homeSteps2}
          alt=""
        />
        <div className="px-8 md:px-32 py-16 xl:py-28 min-[1700px]:w-[1700px] relative flex justify-center">
          <div className="text-[#212121] text-center relative flex flex-col items-center z-10 w-full md:w-3/4 lg:w-2/3">
            <h1 className="text-center font-bold text-xl lg:text-2xl">
              Tim Hebat di Balik Solusi Tuntasinaja
            </h1>
            <p className="mt-4 text-sm lg:text-base relative z-1">
              Tim kami terdiri dari para profesional berpengalaman yang
              berdedikasi untuk menghadirkan solusi inovatif.
            </p>
            <div className="relative z-10">
              <img
                className="absolute z-0 -top-8 -left-10 pointer-events-none"
                src={contactEllipse}
                alt=""
              />
              <img
                src={aboutFounder}
                className="mt-8 w-[250px] h-[250px] lg:w-[300px] lg:h-[300px] hover:scale-110 duration-700 relative z-10"
                alt=""
              />
            </div>
            <div className="mt-8">
              <h2 className="text-center font-bold text-base lg:text-xl">
                Nicholas Tjhin
              </h2>
              <p className="mt-2 text-[#0366FF] text-sm lg:text-base relative z-1">
                Founder
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="aboutTechnology"
        className="bg-[#E6F0FF] relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-20 xl:py-28 min-[1700px]:w-[1700px] relative">
          <img
            className="absolute z-0 -top-4 right-0 pointer-events-none"
            src={aboutTechnology2}
            alt=""
          />
          <img
            className="absolute z-10 -top-4 left-24 lg:top-64 lg:left-0 xl:left-32 min-[1700px]:left-48 pointer-events-none"
            src={contactEllipse}
            alt=""
          />
          <h2 className="mb-12 font-bold text-xl lg:text-2xl text-[#212121] text-center">
            Teknologi Kami
          </h2>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-6">
            <div className="relative z-10 mx-auto">
              <img
                className="flex justify-center items-center w-[350px] xl:w-[500px]"
                src={kompresiCctv}
                alt=""
              />
              <Link
                to={"/contact"}
                className="absolute bottom-3 xl:bottom-6 left-[65%] transform -translate-x-[65%] w-[85%] flex justify-center"
              >
                <Button className="bg-[#0366FF] hover:bg-[#0366FF] text-xs min-[425px]:text-sm text-white rounded-[10px] hover:scale-110 duration-700 h-6 min-[425px]:h-8 lg:h-10 w-full max-w-[350px] xl:max-w-[450px] p-0">
                  Coba Sekarang
                </Button>
              </Link>
            </div>
            <div className="relative z-10 mx-auto">
              <img
                className="flex justify-center items-center w-[350px] xl:w-[500px]"
                src={kompresiFile}
                alt=""
              />
              <Link
                to={"/contact"}
                className="absolute bottom-3 xl:bottom-6 left-[65%] transform -translate-x-[65%] w-[85%] flex justify-center"
              >
                <Button className="bg-white hover:bg-white text-xs min-[425px]:text-sm text-black rounded-[10px] hover:scale-110 duration-700 h-6 min-[425px]:h-8 lg:h-10 w-full max-w-[350px] xl:max-w-[450px] p-0">
                  Coba Sekarang
                </Button>
              </Link>
            </div>
            <div className="relative z-10 mx-auto">
              <img
                className="flex justify-center items-center w-[350px] xl:w-[500px]"
                src={kompresiImage}
                alt=""
              />
              <Link
                to={"/contact"}
                className="absolute bottom-3 xl:bottom-6 left-[65%] transform -translate-x-[65%] w-[85%] flex justify-center"
              >
                <Button className="bg-white hover:bg-white text-xs min-[425px]:text-sm text-black rounded-[10px] hover:scale-110 duration-700 h-6 min-[425px]:h-8 lg:h-10 w-full max-w-[350px] xl:max-w-[450px] p-0">
                  Coba Sekarang
                </Button>
              </Link>
            </div>
          </div>
          <img
            className="absolute z-0 bottom-0 left-0 pointer-events-none"
            src={aboutTechnology1}
            alt=""
          />
        </div>
      </section>

      <section
        id="aboutOurServices"
        className="bg-gradient-to-b from-[#0366FF] to-[#0252CC] relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-16 lg:py-20 min-[1700px]:w-[1700px]">
          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 relative z-10">
            <img
              data-aos="fade-right"
              className="w-[350px] lg:w-[500px] relative z-10"
              src={aboutOurServices}
              alt=""
            />
            <img
              className="absolute z-0 -top-20 -left-32 pointer-events-none"
              src={aboutOurServices1}
              alt=""
            />
            <img
              className="absolute z-0 -bottom-20 -left-32 pointer-events-none"
              src={aboutOurServices2}
              alt=""
            />
            <img
              className="absolute z-0 -top-20 -right-32 pointer-events-none"
              src={aboutOurServices3}
              alt=""
            />
            <img
              className="absolute z-0 -bottom-20 -right-32 pointer-events-none"
              src={aboutOurServices4}
              alt=""
            />
            <div data-aos="fade-left" className="text-white relative z-10">
              <h1 className="mb-8 text-center lg:text-start font-bold text-xl lg:text-[32px]">
                Lebih dari Sekadar Kompresi, Kami adalah Solusi Teknologi
                Terkini
              </h1>
              <p className="mt-5 text-sm lg:text-base relative z-1">
                “ Kami Menerima permintaan khusus dari pelanggan untuk
                mengembangkan teknologi yang spesifik sesuai kebutuhan mereka “
              </p>
              <Link to={"/contact"}>
                <Button className="mt-8 bg-white hover:bg-white/70 text-sm lg:text-base text-[#212121] rounded-[10px]">
                  Pesan Layanan Kami Sekarang!
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <Footer />
    </div>
  );
}
