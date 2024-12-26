import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { Player } from "@lottiefiles/react-lottie-player";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Autoplay from "@/components/Autoplay";
import hematBeban from "../assets/img/hematBeban.svg";
import hematWaktu from "../assets/img/hematWaktu.svg";
import hematTempat from "../assets/img/hematTempat.svg";
import kualitasVideo from "../assets/img/kualitasVideo.svg";
import homeSteps from "../assets/img/homeSteps.png";
import homeSteps1 from "../assets/img/homeSteps1.png";
import homeSteps2 from "../assets/img/homeSteps2.png";
import contactEllipse from "../assets/img/contactEllipse.png";
import logo from "../assets/img/homeLogo.png";
import homeGambar from "../assets/img/homeGambar.png";
import homeCctv from "../assets/img/homeCctv.png";
import homeFile from "../assets/img/homeFile.png";
import feature from "../assets/img/feature.svg";
import faceReco from "../assets/img/faceReco.svg";
import botCall from "../assets/img/botCall.svg";
import dataAnalytic from "../assets/img/dataAnalytic.svg";
import iot from "../assets/img/iot.svg";
import Faq from "@/components/Faq";
import icon1 from "../assets/img/heroIcon/icon1.svg";
import icon2 from "../assets/img/heroIcon/icon2.svg";
import icon3 from "../assets/img/heroIcon/icon3.svg";
import icon4 from "../assets/img/heroIcon/icon4.svg";
import icon5 from "../assets/img/heroIcon/icon5.svg";
import icon6 from "../assets/img/heroIcon/icon6.svg";
import icon7 from "../assets/img/heroIcon/icon7.svg";
import icon8 from "../assets/img/heroIcon/icon8.svg";
import icon9 from "../assets/img/heroIcon/icon9.svg";
import icon10 from "../assets/img/heroIcon/icon10.svg";
import icon11 from "../assets/img/heroIcon/icon11.svg";
import icon12 from "../assets/img/heroIcon/icon12.svg";
import { useState } from "react";

export default function Home() {
  type ImageKey = "original" | "medium" | "high" | "customizable";
  const [selectedImage, setSelectedImage] = useState<ImageKey>("original");

  const images: Record<ImageKey, string> = {
    original:
      "https://media.suara.com/pictures/653x366/2024/02/27/18939-dpr-ian-instagramcomdprian.jpg",
    medium:
      "https://images.bloombergtechnoz.com/data/2024/02/image-20240226130252.jpg",
    high: "https://asset-2.tstatic.net/tribunnews/foto/bank/images/dpr-ian-i.jpg",
    customizable:
      "https://assets.promediateknologi.id/crop/112x0:864x454/750x500/webp/photo/2023/08/04/IMG_4978-686860802.jpg",
  };

  return (
    <div className="min-h-screen w-full bg-[url('/src/assets/img/backgroundHero.png')] bg-no-repeat bg-right-top">
      <Navbar />
      <section
        id="compression"
        className="bg-[url('/src/assets/img/dotted.png')] py-10 relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className=" relative z-10 px-8 lg:px-20 xl:px-32 pt-0 md:pt-16 lg:pt-40 min-[1700px]:w-[1700px] grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center">
          <div className="relative z-10 text-center mx-auto md:content-center md:w-[550px] md:h-[550px] md:border-2 md:border-dashed md:border-[#9F9F9F] md:rounded-full">
            <div className="hidden absolute inset-0 md:flex items-center justify-center">
              <div className="relative w-full h-full animate-spin-slow">
                {[
                  icon1,
                  icon2,
                  icon3,
                  icon4,
                  icon5,
                  icon6,
                  icon7,
                  icon8,
                  icon9,
                  icon10,
                  icon11,
                  icon12,
                ].map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`icon-${index}`}
                    className="absolute w-[46px] h-[46px] z-0"
                    style={{
                      transform: `rotate(${
                        index * 30
                      }deg) translateX(275px) rotate(-${index * 30}deg)`,
                      top: "46%",
                      left: "46%",
                      transformOrigin: "center",
                    }}
                  />
                ))}
              </div>
            </div>
            <h1 className="text-black font-bold text-4xl relative z-10">
              <span className="text-[#0366FF]">Hemat Ruang</span>, Aman Data,
              dan Pantau dengan{" "}
              <span className="text-[#0366FF]">AI Pintar</span>
            </h1>
            <p className="mt-4 text-base text-[#202020] relative z-10">
              Hemat ruang penyimpanan hingga 70% tanpa mengorbankan kualitas,
              lindungi data Anda dengan jaringan private yang aman,
            </p>
          </div>
          <div className="flex justify-center items-center  relative z-10">
            <div className="bg-[#F5F5F5] rounded-3xl p-4 w-fit">
              <div className="bg-white rounded-2xl p-6 w-fit">
                <h3 className="mb-4 text-xl text-[#202020] font-semibold">
                  Compress File
                </h3>
                <div className="pt-2 pb-2 px-2 md:pt-14 lg:pb-4 md:px-12 flex flex-col justify-center items-center border-2 border-dashed border-[#9F9F9F] rounded-2xl min-h-[230px] max-w-[450px]">
                  <Button className="w-fit text-sm bg-[#000A1A]">
                    <Upload /> Choose File
                  </Button>
                  <p className="mt-4 text-sm text-[#C9C9C9] text-center">
                    Click or drag and drop to upload files <br />
                    <br /> We support most file types including MP3, MP4, JPEG,
                    PNG, WAV, AVI, MKV, GIF, MOV, PDF, FLAC, WEBM, TIFF and
                    more!
                  </p>
                </div>
                <div className="mt-6 mb-5 flex justify-between items-center">
                  <p className="text-[#202020]">Compress to</p>
                  <div className="w-fit">
                    <Select>
                      <SelectTrigger className="focus:ring-[#9F9F9F]">
                        <SelectValue placeholder="12 MB" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="12">12 MB</SelectItem>
                        <SelectItem value="16">16 MB</SelectItem>
                        <SelectItem value="17">17 MB</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button className="bg-[#0366FF] w-full">Compress</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="homeIntro"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 pt-16 lg:pt-20 min-[1700px]:w-[1700px]">
          <div className="text-[#212121] text-center relative z-10">
            <h1 className="text-center font-bold text-xl lg:text-2xl">
              Semua Beres Di Tuntasinaja
            </h1>
            <p className="mt-4 text-sm lg:text-base relative z-1">
              Tuntasinaja hadir sebagai mitra andal Anda dalam menyelesaikan
              berbagai masalah teknologi. Dari kompresi data yang efisien hingga
              Face Recognition AI yang canggih kami menyediakan solusi
              terintegrasi yang membuat pekerjaan Anda lebih mudah, lebih cepat,
              dan lebih aman. Dengan dukungan teknologi modern, kami pastikan
              semua kebutuhan Anda terselesaikan dengan sempurna. Karena di
              Tuntasinaja, semuanya beres!
            </p>
          </div>
          <div>
            <Player
              src="https://lottie.host/466f6bde-1da8-40ee-bae3-a619f7776440/phbTMHU19j.json"
              className="player h-[420px]"
              loop
              autoplay
            />
            <DotLottieReact
              src="https://lottie.host/466f6bde-1da8-40ee-bae3-a619f7776440/phbTMHU19j.json"
              loop
              autoplay
            />
          </div>
        </div>
      </section>

      <section id="homeLogo" className="pt-12 md:pt-16">
        <div className="relative overflow-hidden">
          <Autoplay />
        </div>
      </section>

      <section
        id="homeSuperiority"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-0 pt-10 pb-20 lg:py-20 min-[1700px]:w-[1700px]">
          <div className="text-[#212121] text-center relative z-10">
            <h1 className="text-center font-bold text-xl lg:text-2xl">
              Kelebihan Kami
            </h1>
            <p className="mt-4 text-sm lg:text-base relative z-1">
              Kami menghadirkan layanan unggulan yang didukung oleh teknologi
              paling mutakhir untuk memastikan kebutuhan Anda terpenuhi dengan
              sempurna
            </p>
          </div>
          <div className="mt-9 grid md:grid-cols-2 lg:grid-cols-4 justify-items-center gap-10 md:gap-6">
            <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl">
              <img className="w-12" src={hematBeban} alt="" />
              <h2 className="mt-4 mb-3 font-bold text-base">
                Hemat Beban Upto 95%
              </h2>
              <p className="text-sm">
                Teknologi kompresi canggih dari Tuntasinaja memungkinkan Anda
                mengurangi ukuran data hingga 95% tanpa mengorbankan kualitas.
              </p>
            </div>
            <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl">
              <img className="w-12" src={hematWaktu} alt="" />
              <h2 className="mt-4 mb-3 font-bold text-base">
                Hemat Waktu Transfer
              </h2>
              <p className="text-sm">
                Dengan teknologi kompresi unggulan dari Tuntasinaja, proses
                transfer data menjadi jauh lebih cepat dan efisien.
              </p>
            </div>
            <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl">
              <img className="w-12" src={hematTempat} alt="" />
              <h2 className="mt-4 mb-3 font-bold text-base">
                Hemat Tempat Penyimpanan
              </h2>
              <p className="text-sm">
                Optimalkan ruang penyimpanan Anda dengan teknologi kompresi
                pintar dari Tuntasinaja. Data dapat dikurangi ukurannya hingga
                95%
              </p>
            </div>
            <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl">
              <img className="w-12" src={kualitasVideo} alt="" />
              <h2 className="mt-4 mb-3 font-bold text-base">
                Kualitas Tetap Terjaga
              </h2>
              <p className="text-sm">
                Teknologi kompresi Tuntasinaja dirancang untuk mengurangi ukuran
                file secara signifikan tanpa mengorbankan detail video
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="homeSteps"
        className="bg-[#E6F0FF] relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-20 xl:py-28 w-full min-[1700px]:w-[1700px] relative">
          <img
            className="absolute z-0 top-40 left-0 pointer-events-none"
            src={homeSteps1}
            alt=""
          />
          <img
            className="absolute z-10 bottom-10 right-0 pointer-events-none"
            src={homeSteps2}
            alt=""
          />
          <h2 className="mb-12 w-full text-left font-bold text-xl lg:text-2xl text-[#212121]">
            3 Langkah Kompress Dengan Mudah
          </h2>
          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 relative z-10">
            <img
              className="w-[350px] lg:w-[500px] relative z-10"
              src={homeSteps}
              alt=""
            />
            <div className="flex flex-col justify-between h-full gap-6">
              <div className="flex flex-col sm:flex-row items-start bg-white rounded-3xl p-4 gap-3">
                <div className="min-w-fit p-[10px] text-sm text-[#0366FF] bg-[#E6F0FF] border border-[#0366FF] rounded-xl">
                  Step 1
                </div>
                <div>
                  <p className="text-[#212121] font-bold text-base">
                    Upload video
                  </p>
                  <p className="text-[#ABABAB] text-sm">
                    Pilih file hingga 500 MB secara gratis dari perangkat Anda:
                    Android, iPhone, Mac, Windows.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start bg-white rounded-3xl p-4 gap-3">
                <div className="min-w-fit p-[10px] text-sm text-[#0366FF] bg-[#E6F0FF] border border-[#0366FF] rounded-xl">
                  Step 2
                </div>
                <div>
                  <p className="text-[#212121] font-bold text-base">
                    Kompress File
                  </p>
                  <p className="text-[#ABABAB] text-sm">
                    Pilih preset kompresi, dan tunggu beberapa saat sementara
                    alat ini mengompresi video Anda.
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-start bg-white rounded-3xl p-4 gap-3">
                <div className="min-w-fit p-[10px] text-sm text-[#0366FF] bg-[#E6F0FF] border border-[#0366FF] rounded-xl">
                  Step 3
                </div>
                <div>
                  <p className="text-[#212121] font-bold text-base">
                    Download Hasil
                  </p>
                  <p className="text-[#ABABAB] text-sm">
                    Setelah proses kompresi selesai, Anda dapat mengunduh file
                    yang telah diperkecil ukurannya dengan mudah
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="homeSample"
        className="bg-[url('/src/assets/img/dotted.png')] relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-0 pt-10 pb-20 lg:py-20 min-[1700px]:w-[1700px]">
          <div className="text-[#212121] text-center relative z-10">
            <h1 className="text-center font-bold text-xl lg:text-2xl">
              Sample Hasil Kompresi
            </h1>
            <p className="mt-4 text-sm lg:text-base relative z-1">
              Dengan alat kompresi kami, Anda dapat dengan mudah mengurangi
              ukuran video tanpa mengorbankan kualitas.
            </p>
          </div>
          <div className="mt-8">
            <div className="relative">
              {/* Gambar utama */}
              <img
                src={images[selectedImage]}
                alt="Hasil Kompresi"
                className="w-full h-[500px] md:h-[350px] xl:h-[450px] object-cover object-center rounded-3xl shadow-lg"
              />

              {/* Tombol */}
              <div className="absolute inset-0 flex items-end justify-center p-4">
                <div className="bg-[#F5F5F5]/50 backdrop-blur-sm p-4 rounded-[20px] grid grid-cols-2 gap-1 md:flex md:space-x-4 md:gap-0">
                  <button
                    className={`px-4 py-2 rounded-xl border border-white text-[10px] ${
                      selectedImage === "original"
                        ? "bg-[#0366FF] text-white border-none"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setSelectedImage("original")}
                  >
                    <p className="md:text-sm font-semibold mb-2">Original</p>
                    <p>1GB</p>
                  </button>
                  <button
                    className={`px-4 py-2 rounded-xl border border-white text-[10px] ${
                      selectedImage === "medium"
                        ? "bg-[#0366FF] text-white border-none"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setSelectedImage("medium")}
                  >
                    <p className="md:text-sm font-semibold mb-2">Medium</p>
                    <p>500MB (-50%)</p>
                  </button>
                  <button
                    className={`px-4 py-2 rounded-xl border border-white text-[10px] ${
                      selectedImage === "high"
                        ? "bg-[#0366FF] text-white border-none"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setSelectedImage("high")}
                  >
                    <p className="md:text-sm font-semibold mb-2">High</p>
                    <p>100MB (-70%)</p>
                  </button>
                  <button
                    className={`px-4 py-2 rounded-xl border border-white text-[10px] ${
                      selectedImage === "customizable"
                        ? "bg-[#0366FF] text-white border-none"
                        : "bg-transparent text-white"
                    }`}
                    onClick={() => setSelectedImage("customizable")}
                  >
                    <p className="md:text-sm font-semibold mb-2">
                      Can be customized
                    </p>
                    <p>9MB (-95%)</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="homeMitra"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-0 pt-10 pb-20 lg:py-20 min-[1700px]:w-[1700px] flex flex-col lg:flex-row items-center gap-4">
          <div className="text-[#212121] text-start relative z-10">
            <h1 className="font-bold text-xl lg:text-2xl">
              Bersama Mitra Terbaik Kami
            </h1>
            <p className="mt-4 text-sm lg:text-base relative z-1">
              Kolaborasi dengan berbagai perusahaan terpercaya untuk memberikan
              solusi terbaik bagi Anda.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            <div>
              <img className="h-[100px] lg:h-[120px]" src={logo} />
            </div>
            <div>
              <img className="h-[100px] lg:h-[120px]" src={logo} />
            </div>
            <div>
              <img className="h-[100px] lg:h-[120px]" src={logo} />
            </div>
            <div>
              <img className="h-[100px] lg:h-[120px]" src={logo} />
            </div>
          </div>
        </div>
      </section>

      <section
        id="homeFeatures"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-16 lg:py-20 min-[1700px]:w-[1700px] flex flex-col gap-y-10">
          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 relative z-10">
            <div className="relative">
              <img
                className="w-[350px] lg:w-[500px] relative z-10 items-end"
                src={homeGambar}
                alt=""
              />
              <img
                className="absolute top-0 -right-[100px] md:-right-[150px] lg:-right-[200px] min-[1700px]:right-[600px] z-0"
                src={contactEllipse}
                alt=""
              />
            </div>
            <div className="text-[#212121] relative z-10">
              <div className="w-fit p-[10px] font-bold text-sm text-[#0366FF] bg-[#E6F0FF] border border-[#0366FF] rounded-xl flex flex-row items-center">
                <img className="mr-1" src={feature} alt="" />
                Fitur
              </div>
              <h1 className="mt-2 text-start font-bold text-xl lg:text-2xl">
                Kompresi Gambar Cepat dan Efisien
              </h1>
              <p className="mt-4 text-sm lg:text-base relative z-1">
                Kompresi gambar kini lebih mudah dan efisien. Teknologi kami
                memungkinkan Anda untuk mengurangi ukuran file gambar hingga 90%
                tanpa mengorbankan kualitas visual. Solusi ini tidak hanya
                menghemat ruang penyimpanan, tetapi juga mempercepat proses
                pengiriman file, baik untuk kebutuhan pribadi maupun
                profesional.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 relative z-10">
            <div className="relative order-first lg:order-last">
              <img
                className="w-[350px] lg:w-[500px] relative z-10 items-end"
                src={homeCctv}
                alt=""
              />
              <img
                className="absolute top-0 -right-[100px] md:-right-[150px] lg:-right-[200px] min-[1700px]:right-[600px] z-0"
                src={contactEllipse}
                alt=""
              />
            </div>
            <div className="text-[#212121] relative z-10">
              <div className="w-fit p-[10px] font-bold text-sm text-[#0366FF] bg-[#E6F0FF] border border-[#0366FF] rounded-xl flex flex-row items-center">
                <img className="mr-1" src={feature} alt="" />
                Fitur
              </div>
              <h1 className="mt-2 text-start font-bold text-xl lg:text-2xl">
                Kompresi CCTV
              </h1>
              <p className="mt-4 text-sm lg:text-base relative z-1">
                Sistem kompresi CCTV kami memungkinkan pengurangan ukuran file
                video secara otomatis tanpa mengorbankan kualitas. Dengan
                teknologi ini, ruang penyimpanan dapat dihemat secara
                signifikan, sehingga Anda dapat merekam lebih lama tanpa
                khawatir kehabisan tempat. Proses kompresi dilakukan secara
                real-time sebelum file disimpan, memastikan efisiensi maksimal
                tanpa memerlukan pengolahan tambahan.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 relative z-10">
            <div className="relative">
              <img
                className="w-[350px] lg:w-[500px] relative z-10 items-end"
                src={homeFile}
                alt=""
              />
              <img
                className="absolute top-0 -right-[100px] md:-right-[150px] lg:-right-[200px] min-[1700px]:right-[600px] z-0"
                src={contactEllipse}
                alt=""
              />
            </div>
            <div className="text-[#212121] relative z-10">
              <div className="w-fit p-[10px] font-bold text-sm text-[#0366FF] bg-[#E6F0FF] border border-[#0366FF] rounded-xl flex flex-row items-center">
                <img className="mr-1" src={feature} alt="" />
                Fitur
              </div>
              <h1 className="mt-2 text-start font-bold text-xl lg:text-2xl">
                Kompresi File
              </h1>
              <p className="mt-4 text-sm lg:text-base relative z-1">
                Teknologi kompresi file kami dirancang untuk mengurangi ukuran
                file secara signifikan tanpa mengurangi kualitas atau kehilangan
                data. Solusi ini mempermudah penyimpanan, transfer, dan
                pengelolaan file dengan lebih efisien. Baik untuk dokumen,
                gambar, video, atau jenis file lainnya, proses kompresi
                berlangsung cepat dan aman, didukung antarmuka yang ramah
                pengguna.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        id="homeFutureWork"
        className="bg-[#E6F0FF] relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-20 xl:py-28 min-[1700px]:w-[1700px]">
          <div className="text-[#212121] relative z-10">
            <h1 className="text-center lg:text-start font-bold text-xl lg:text-2xl">
              Our Future Work
            </h1>
            <p className="mt-4 text-sm relative z-1">
              Di Tuntasinaja, kami berkomitmen untuk terus berkembang dan
              berinovasi
            </p>
          </div>
          <div className="mt-11 text-[#212121] grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-6 ">
            <div className="w-full flex flex-col md:flex-row items-start bg-[#FBFBFB] p-5 rounded-3xl gap-4">
              <img className="w-12" src={faceReco} alt="" />
              <div>
                <p className="text-base font-bold text-[#212121]">
                  CCTV Dengan Face Recognition
                </p>
                <p className="mt-3 text-sm text-[#ABABAB]">
                  Solusi CCTV kami yang dilengkapi dengan teknologi face
                  recognition memungkinkan pemantauan lebih cerdas dan efisien.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start bg-[#FBFBFB] p-5 rounded-3xl gap-4">
              <img className="w-12" src={botCall} alt="" />
              <div>
                <p className="text-base font-bold text-[#212121]">Bot Call</p>
                <p className="mt-3 text-sm text-[#ABABAB]">
                  Bot Call adalah sistem otomatis yang dapat melakukan panggilan
                  telepon atau memberikan respons suara secara real-time
                  menggunakan AI
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start bg-[#FBFBFB] p-5 rounded-3xl gap-4">
              <img className="w-12" src={dataAnalytic} alt="" />
              <div>
                <p className="text-base font-bold text-[#212121]">
                  Data Analysis by AI
                </p>
                <p className="mt-3 text-sm text-[#ABABAB]">
                  Solusi ini membantu pengambilan keputusan yang lebih cerdas
                  dan efisien
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start bg-[#FBFBFB] p-5 rounded-3xl gap-4">
              <img className="w-12" src={iot} alt="" />
              <div>
                <p className="text-base font-bold text-[#212121]">
                  Integrasi AI dengan IOT
                </p>
                <p className="mt-3 text-sm text-[#ABABAB]">
                  Menggabungkan kecerdasan buatan (AI) dengan Internet of Things
                  (IoT) memungkinkan pengumpulan dan analisis data secara
                  real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Faq />

      <Footer />
    </div>
  );
}
