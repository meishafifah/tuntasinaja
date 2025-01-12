// import { Player } from "@lottiefiles/react-lottie-player";
// import Rive from "@rive-app/react-canvas";
// import Autoplay from "@/components/Autoplay";
// import logo from "../assets/img/homeLogo.png";
// import { RadioGroup, RadioGroupItem } from "@radix-ui/react-radio-group";
// import videoFile from "../assets/img/videoFile.svg";
import { Button } from "@/components/ui/button";
import arrow from "../assets/img/arrow.svg";
import axios from "axios";
import heroHomeIntro from "../assets/img/heroHomeIntro.svg";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Download, Loader2Icon, Upload } from "lucide-react";
import hematBeban from "../assets/img/hematBeban.svg";
import hematWaktu from "../assets/img/hematWaktu.svg";
import hematTempat from "../assets/img/hematTempat.svg";
import kualitasVideo from "../assets/img/kualitasVideo.svg";
import homeSteps from "../assets/img/homeSteps.png";
import homeSteps1 from "../assets/img/homeSteps1.png";
import homeSteps2 from "../assets/img/homeSteps2.png";
import stepIcon from "../assets/img/stepIcon.svg";
import contactEllipse from "../assets/img/contactEllipse.png";
import homeGambar from "../assets/img/homeGambar.png";
import homeCctv from "../assets/img/homeCctv.png";
import homeFile from "../assets/img/homeFile.png";
import homeIntro1 from "../assets/img/homeIntro1.png";
import homeIntro2 from "../assets/img/homeIntro2.png";
import feature from "../assets/img/feature.svg";
import camAi from "../assets/img/camAi.svg";
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
import original from "../assets/img/fotoCompressed/original.jpg";
import originalLow from "../assets/img/fotoCompressed/original_low.jpg";
import originalMedium from "../assets/img/fotoCompressed/original_medium.jpg";
import originalHigh from "../assets/img/fotoCompressed/original_high.jpg";
import arrow1 from "../assets/img/arrow1.svg";
import { useEffect, useState } from "react";
import Chatbot from "@/components/Chatbot";
import AOS from "aos";
import "aos/dist/aos.css";
import { useDropzone } from "react-dropzone";
interface UploadedFile {
  file: File;
  name: string;
  preview: string;
}

export default function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
      disable: "phone",
      duration: 2000,
      easing: "ease-out-cubic",
    });
  }, []);

  type ImageKey = "original" | "low" | "medium" | "high";
  const [selectedImage, setSelectedImage] = useState<ImageKey>("original");

  const images: Record<ImageKey, string> = {
    original: original,
    low: originalLow,
    medium: originalMedium,
    high: originalHigh,
  };

  type FileWithPreview = {
    preview: string;
    type: string;
    name: string;
  };

  // const [compressionLevel, setCompressionLevel] = useState("medium");
  const [isLoadImage, setIsLoadImage] = useState(true);
  const [file, setFile] = useState<UploadedFile | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [compressionResult, setCompressionResult] = useState<{
    fileName: string;
    originalSize: string;
    compressedSize: string;
    percentageSaved: string;
    downloadLink: string;
    preview: string;
  } | null>(null);

  useEffect(() => {
    if (file && file.preview) {
      return () => URL.revokeObjectURL(file.preview);
    }
  }, [file]);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      const uploadedFile = acceptedFiles[0];
      setFile({
        file: uploadedFile,
        name: uploadedFile.name,
        preview: URL.createObjectURL(uploadedFile),
      });
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles) => {
      setError(null);
      setCompressionResult(null);

      if (!acceptedFiles || acceptedFiles.length === 0) {
        setFile(null);
        setCompressionResult(null);
        setError("Invalid file type. Please upload a valid file.");
        return;
      }

      const file = acceptedFiles[0];

      const maxSize = 3 * 1024 * 1024;

      if (file.size > maxSize) {
        setFile(null);
        setError("File size exceeds the 3MB limit");
        return;
      }

      const acceptedTypes = [
        "image/png",
        "image/jpeg",
        "application/pdf",
        "video/webm",
        "video/mp4",
        "video/quicktime",
        "video/x-dav",
      ];

      const fileType = file.type;

      if (!acceptedTypes.includes(fileType)) {
        setFile(null);
        setError("Invalid file type. Please upload a valid file.");
        return;
      }

      const fileName = file.name;
      const fileExtension = fileName
        .slice(((fileName.lastIndexOf(".") - 1) >>> 0) + 2)
        .toLowerCase();

      const allowedExtensions = [
        "png",
        "jpeg",
        "jpg",
        "pdf",
        "webm",
        "mp4",
        "mov",
        "dav",
      ];

      if (!allowedExtensions.includes(fileExtension)) {
        setFile(null);
        setError("Invalid file extension. Please upload a valid file.");
        return;
      }
      onDrop(acceptedFiles);
    },
    accept: {
      "image/png": [".png"],
      "image/jpeg": [".jpeg", ".jpg"],
      "application/pdf": [".pdf"],
      "video/webm": [".webm"],
      "video/mp4": [".mp4"],
      "video/quicktime": [".mov"],
      "video/x-dav": [".dav"],
    },
    multiple: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!file) {
      console.log("No file selected");
      return;
    }

    const formData = new FormData();
    formData.append("file", file.file);

    setIsLoading(true);

    try {
      const response = await axios.post(
        "https://api.tuntasinaja.id/web/compress",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          responseType: "arraybuffer",
        }
      );

      const fileType = file.file.type;
      const blob = new Blob([response.data], { type: fileType });
      const downloadLink = URL.createObjectURL(blob);
      const compressedSize = Number(response.headers["content-length"]);

      setCompressionResult({
        fileName: file.name,
        originalSize: (file.file.size / (1024 * 1024)).toFixed(2),
        compressedSize: (compressedSize / (1024 * 1024)).toFixed(2),
        percentageSaved: ((1 - compressedSize / file.file.size) * 100).toFixed(
          2
        ),
        downloadLink,
        preview: downloadLink,
      });
      console.log("Responsne: ", response);
    } catch (error: any) {
      setError(error.response?.data?.error);
      console.log(error.response?.data?.error);
    } finally {
      setIsLoading(false);
    }
    console.log("File:", file);
    // console.log("Compression Level:", compressionLevel);
  };

  const renderPreview = (file: FileWithPreview) => {
    if (file.type.startsWith("image/")) {
      return (
        <img
          src={file.preview}
          alt={file.name}
          className="w-40 h-40 rounded-xl object-cover"
        />
      );
    } else if (file.type.startsWith("video/")) {
      return (
        <video
          src={file.preview}
          className="w-40 h-40 rounded-xl object-cover"
          controls
        />
      );
    } else {
      return (
        <div className="w-40 h-40 rounded-xl flex text-center items-center justify-center text-gray-500">
          No preview available
        </div>
      );
    }
  };

  return (
    <div className="relative min-h-screen w-full bg-[url('/src/assets/img/backgroundHero.png')] bg-no-repeat bg-right-top">
      <Navbar />
      <Chatbot />
      <section
        id="compression"
        className="bg-[url('/src/assets/img/dotted.png')] py-10 relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className=" relative z-10 px-8 lg:px-20 xl:px-32 pt-0 md:pt-16 lg:pt-40 min-[1700px]:w-[1700px] grid grid-cols-1 min-[1440px]:grid-cols-2 gap-10 xl:gap-5 items-center justify-center">
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
                  <div
                    key={index}
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      transform: `translate(-50%, -50%) rotate(${
                        index * 30
                      }deg) translateX(275px)`,
                      transformOrigin: "50% 50%",
                    }}
                  >
                    <img
                      src={icon}
                      alt={`icon-${index}`}
                      className="w-[46px] h-[46px] z-0"
                    />
                  </div>
                ))}
              </div>
              {/* <Rive
                src="https://rive.app/community/files/15788-29758-rotate-animation"
                // stateMachines="bumpy"
              /> */}
            </div>
            <h1 className="text-black font-bold text-4xl relative z-10">
              <span className="text-[#0366FF]">Hemat Ruang</span>, Aman Data,
              dan Pantau dengan{" "}
              <span className="text-[#0366FF]">AI Pintar</span>
            </h1>
            <p className="mt-4 text-base text-[#202020] relative z-10">
              Hemat ruang penyimpanan hingga 95% dengan kualitas terjaga dan
              bisa dikustom sesuai kebutuhan, serta tingkatkan keamanan data
              melalui instalasi server on premise untuk kontrol penuh atas
              jaringan dan sistem.
            </p>
          </div>
          <img
            className="hidden md:block pointer-events-none absolute top-2/3 left-0 min-[1440px]:top-1/3 min-[1440px]:left-[45%] min-[1700px]:left-[55%] z-20 animate-bounce"
            src={arrow1}
            alt=""
          />
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center relative z-10"
          >
            <div className="bg-[#F5F5F5] rounded-3xl p-4 w-fit">
              <div className="bg-white rounded-2xl p-6 w-fit">
                <h3 className="mb-4 text-xl text-[#202020] font-semibold">
                  Compress File
                </h3>
                <div
                  {...getRootProps()}
                  className={`pt-2 pb-2 px-2 md:pt-14 lg:pb-4 md:px-12 flex flex-col justify-center items-center border-2 rounded-2xl min-h-[230px] max-w-[450px] md:w-[450px] ${
                    isDragActive
                      ? "border-[#0366FF]"
                      : "border-dashed border-[#9F9F9F]"
                  }`}
                >
                  <input
                    {...getInputProps()}
                    accept=".png,.jpeg,.jpg,.pdf,.webm,.mp4,.mov,.dav"
                  />
                  {!file ? (
                    <>
                      <button className="w-fit text-sm bg-[#000A1A] flex items-center gap-2 px-4 py-2 text-white rounded-[10px]">
                        <Upload /> Choose File
                      </button>
                      <p className="mt-4 text-sm text-[#C9C9C9] text-center">
                        Click or drag and drop to upload a file <br />
                        <br /> We support file with format PNG, PDF, JPG, JPEG, MP4, DAV, and MOV!
                        <br /> Maximum file size: 3MB
                      </p>
                    </>
                  ) : (
                    <div className="flex flex-col items-center">
                      {file &&
                        renderPreview({
                          preview: file.preview,
                          type: file.file.type,
                          name: file.name,
                        })}
                      <p className="mt-4 text-sm text-[#202020]">{file.name}</p>
                    </div>
                  )}
                </div>
                {/* <div className="mt-6 flex flex-col md:flex-row items-center justify-between">
                  <p className="text-[#202020] mb-2">Compress to</p>
                  <RadioGroup
                    value={compressionLevel}
                    onValueChange={(value) => setCompressionLevel(value)}
                    className="flex flex-row gap-x-1"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        id="medium"
                        value="medium"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="medium"
                        className="border border-[#C9C9C9] peer-aria-checked:border-[#0366FF] peer-aria-checked:bg-[#0366FF] peer-aria-checked:text-white hover:border-[#0366FF] hover:bg-[#E6F0FF] hover:text-[#0366FF] rounded-xl px-[10px] py-[6px] text-xs cursor-pointer"
                      >
                        Medium
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        id="high"
                        value="high"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="high"
                        className="border border-[#C9C9C9] peer-aria-checked:border-[#0366FF] peer-aria-checked:bg-[#0366FF] peer-aria-checked:text-white hover:border-[#0366FF] hover:bg-[#E6F0FF] hover:text-[#0366FF] rounded-xl px-[10px] py-[6px] text-xs cursor-pointer"
                      >
                        High
                      </label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem
                        id="customize"
                        value="customize"
                        className="peer hidden"
                      />
                      <label
                        htmlFor="customize"
                        className="border border-[#C9C9C9] peer-aria-checked:border-[#0366FF] peer-aria-checked:bg-[#0366FF] peer-aria-checked:text-white hover:border-[#0366FF] hover:bg-[#E6F0FF] hover:text-[#0366FF] rounded-xl px-[10px] py-[6px] text-xs cursor-pointer"
                      >
                        Customize
                      </label>
                    </div>
                  </RadioGroup>
                </div> */}
                {isLoading ? (
                  <button
                    type="submit"
                    className="bg-[#0366FF] rounded-[10px] w-full py-2 text-white mt-6 text-center flex flex-row justify-center gap-2"
                  >
                    <Loader2Icon className="animate-spin" />
                    <p>Processing...</p>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="bg-[#0366FF] rounded-[10px] w-full py-2 text-white mt-6"
                  >
                    Compress
                  </button>
                )}
                {error && (
                  <p className="text-red-500 text-center mt-4">{error}</p>
                )}
              </div>
            </div>
          </form>
        </div>
      </section>
      {compressionResult ? (
        <section
          id="compressed"
          className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
        >
          <div className="px-8 md:px-32 pt-16 lg:pt-20 w-fit lg:w-full min-[1700px]:w-[1700px]">
            <div className="bg-[#F5F5F5] rounded-3xl p-5">
              <div className="bg-white rounded-2xl p-5">
                <h1 className="mb-6 font-bold text-xl lg:text-2xl">
                  Hasil Kompresi
                </h1>
                <div className="flex flex-col lg:flex-row lg:items-center gap-6 relative z-0">
                  <img
                    className="hidden md:block pointer-events-none absolute top-56 right-0 lg:top-10 lg:right-20 min-[1440px]:right-1/3 min-[1700px]:right-1/2 z-0 animate-bounce"
                    src={arrow}
                    alt=""
                  />
                  <div className="bg-transparent h-[175px] min-w-[200px] md:w-[345px] border-2 border-dashed border-[#9F9F9F] rounded-2xl flex justify-center items-center">
                    {compressionResult.preview &&
                      renderPreview({
                        preview: compressionResult.preview,
                        type: file
                          ? file.file.type
                          : "application/octet-stream",
                        name: compressionResult.fileName,
                      })}
                  </div>
                  <div className="text-[#212121]">
                    <div className="flex flex-row items-center justify-center lg:justify-start gap-x-2">
                      {/* <img className="w-9 h-9" src={videoFile} alt="" /> */}
                      <p className="text-sm">{compressionResult.fileName}</p>
                    </div>
                    <div className="mt-4 flex flex-col md:flex-row gap-6">
                      <div className="flex flex-col gap-y-1">
                        <p className="text-sm text-[#C9C9C9]">Original File</p>
                        <p className="text-sm">
                          {compressionResult.originalSize} MB
                        </p>
                      </div>
                      <div className="hidden md:block min-h-[38px] w-[1px] bg-[#C9C9C9]"></div>
                      <div className="flex flex-col gap-y-1">
                        <p className="text-sm text-[#C9C9C9]">Hasil Kompresi</p>
                        <div className="flex flex-row items-center gap-1">
                          <p className="border border-[#0366FF] bg-[#E6F0FF] px-[10px] py-[2px] rounded font-bold text-[#0366FF] text-center text-sm">
                            {compressionResult.compressedSize} MB
                          </p>
                          <p className="text-sm">
                            ({compressionResult.percentageSaved}%)
                          </p>
                        </div>
                      </div>
                    </div>
                    <a
                      href={compressionResult.downloadLink}
                      download
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button className="mt-6 rounded-[10px] bg-[#0366FF] relative z-10 w-full lg:w-fit">
                        Unduh Hasil Kompresi
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <></>
      )}
      <section
        id="homeIntro"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-16 lg:py-20 min-[1700px]:w-[1700px]">
          <div className="text-[#212121] text-center relative z-10">
            <h1 className="text-center font-bold text-xl lg:text-2xl">
              Semua Beres Di TuntasinAja
            </h1>
            <p className="mt-4 text-sm lg:text-base relative z-1">
              TuntasinAja hadir sebagai mitra andal Anda dalam menyelesaikan
              berbagai masalah teknologi. Dari kompresi data yang efisien hingga
              Face Recognition AI yang canggih kami menyediakan solusi
              terintegrasi yang membuat pekerjaan Anda lebih mudah, lebih cepat,
              dan lebih aman. Dengan dukungan teknologi modern, kami pastikan
              semua kebutuhan Anda terselesaikan dengan sempurna. Karena di
              TuntasinAja, semuanya beres!
            </p>
          </div>
          <div className="mt-10 lg:mt-20 flex justify-center relative">
            <img
              className="pointer-events-none absolute top-0 -left-10 lg:left-20 z-10"
              src={homeIntro1}
              alt=""
            />
            <img
              className="pointer-events-none absolute bottom-0 -right-10 lg:right-20 z-10"
              src={homeIntro2}
              alt=""
            />
            <img
              className="player md:w-[400px] lg:w-[800px] relative z-10"
              src={heroHomeIntro}
              alt=""
            />
            {/* <Player
              src="https://lottie.host/65bd3ccc-313f-430a-b064-22ea4f6c0738/1zY3eMRnmJ.json"
              className="player md:w-[400px] lg:w-[800px] relative z-10"
              loop
              autoplay
            /> */}
            <img
              className="hidden lg:block pointer-events-none absolute bottom-0 right-20 z-0"
              src={contactEllipse}
              alt=""
            />
            <img
              className="hidden lg:block pointer-events-none absolute top-0 left-20 z-0"
              src={contactEllipse}
              alt=""
            />
          </div>
        </div>
      </section>

      {/* <section id="homeLogo">
        <div className="relative overflow-hidden">
          <Autoplay />
        </div>
      </section> */}

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
            <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl hover:scale-110 duration-700">
              <img className="w-12" src={hematBeban} alt="" />
              <h2 className="mt-4 mb-3 font-bold text-base">
                Hemat Beban Upto 95%
              </h2>
              <p className="text-sm">
                Teknologi kompresi canggih dari TuntasinAja memungkinkan Anda
                mengurangi ukuran data hingga 95% dengan kualitas yang terjaga.
              </p>
            </div>
            <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl hover:scale-110 duration-700">
              <img className="w-12" src={hematWaktu} alt="" />
              <h2 className="mt-4 mb-3 font-bold text-base">
                Hemat Waktu Transfer
              </h2>
              <p className="text-sm">
                Dengan teknologi kompresi unggulan dari TuntasinAja, proses
                transfer data menjadi jauh lebih cepat dan efisien.
              </p>
            </div>
            <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl hover:scale-110 duration-700">
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
            <div className="flex flex-col items-start bg-[#FBFBFB] p-5 rounded-3xl hover:scale-110 duration-700">
              <img className="w-12" src={kualitasVideo} alt="" />
              <h2 className="mt-4 mb-3 font-bold text-base">
                Kualitas Tetap Terjaga
              </h2>
              <p className="text-sm">
                Teknologi kompresi TuntasinAja dirancang untuk mengurangi ukuran
                file secara signifikan dengan menjaga detail dan kualitas dari
                video tersebut.
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
              data-aos="fade-right"
              className="w-[350px] lg:w-[500px] relative z-10"
              src={homeSteps}
              alt=""
            />
            <div className="flex flex-col justify-between h-full gap-6">
              <div
                data-aos="fade-down"
                className="flex flex-col sm:flex-row items-start bg-white rounded-3xl p-4 gap-3"
              >
                <div className="min-w-fit p-[10px] text-sm text-[#0366FF] bg-[#E6F0FF] border border-[#0366FF] rounded-xl">
                  Step 1
                </div>
                <div>
                  <p className="text-[#212121] font-bold text-base">
                    Upload video
                  </p>
                  <p className="text-[#ABABAB] text-sm">
                    Pilih file hingga 3 MB secara gratis dari perangkat Anda:
                    Android, iPhone, Mac, Windows.
                  </p>
                </div>
              </div>
              <img
                data-aos="fade-down"
                className="h-[43px]"
                src={stepIcon}
                alt=""
              />
              <div
                data-aos="fade-down"
                className="flex flex-col sm:flex-row items-start bg-white rounded-3xl p-4 gap-3"
              >
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
              <img
                data-aos="fade-down"
                className="h-[43px]"
                src={stepIcon}
                alt=""
              />
              <div
                data-aos="fade-down"
                className="flex flex-col sm:flex-row items-start bg-white rounded-3xl p-4 gap-3"
              >
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
                crossOrigin="anonymous"
                className="w-full h-[500px] md:h-[350px] xl:h-[450px] object-cover object-center rounded-3xl shadow-lg"
                onLoad={() => setIsLoadImage(false)}
              />

              {isLoadImage && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-200/50 rounded-3xl">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
                </div>
              )}

              <a
                href={images[selectedImage]}
                download={`${selectedImage}.jpg`}
                className="absolute top-4 right-4 bg-[#F5F5F5]/50 p-2 rounded-full shadow-lg hover:bg-[#0366FF] z-10"
              >
                <Download className="h-6 w-6 text-white" />
              </a>

              <div className="absolute inset-0 flex items-end justify-center p-4">
                <div className="bg-[#F5F5F5]/50 backdrop-blur-sm p-4 rounded-[20px] grid grid-cols-2 gap-1 md:flex md:space-x-4 md:gap-0">
                  {Object.keys(images).map((key) => (
                    <button
                      key={key}
                      className={`px-4 py-2 rounded-xl hover:scale-110 duration-700 border border-white text-[10px] ${
                        selectedImage === key
                          ? "bg-[#0366FF] text-white border-none"
                          : "bg-transparent text-white"
                      }`}
                      onClick={() => setSelectedImage(key as ImageKey)}
                    >
                      <p className="md:text-sm font-semibold mb-2">
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </p>
                      <p>
                        {key === "original"
                          ? "14,8 MB"
                          : key === "low"
                          ? "0,98 MB (-93,51%)"
                          : key === "medium"
                          ? "1,6 MB (-89,19%)"
                          : "3,1 MB (-79,05%)"}
                      </p>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <section
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
      </section> */}

      <section
        id="homeFeatures"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center overflow-hidden"
      >
        <div className="px-8 md:px-32 py-16 lg:py-20 min-[1700px]:w-[1700px] flex flex-col gap-y-10">
          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 relative z-10">
            <div data-aos="fade-right" className="relative">
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
            <div data-aos="fade-left" className="text-[#212121] relative z-10">
              <div className="w-fit p-[10px] font-bold text-sm text-[#0366FF] bg-[#E6F0FF] border border-[#0366FF] rounded-xl flex flex-row items-center">
                <img className="mr-1" src={feature} alt="" />
                Fitur
              </div>
              <h1 className="mt-2 text-start font-bold text-xl lg:text-2xl">
                Kompresi Gambar Cepat dan Efisien
              </h1>
              <p className="mt-4 text-sm lg:text-base relative z-1">
                Kompresi gambar kini lebih mudah dan efisien. Teknologi kami
                memungkinkan Anda untuk mengurangi ukuran file gambar hingga 95%
                dan menjaga kualitas visual. Solusi ini tidak hanya menghemat
                ruang penyimpanan, tetapi juga mempercepat proses pengiriman
                file, baik untuk kebutuhan pribadi maupun profesional.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 justify-items-center items-center gap-10 relative z-10">
            <div
              data-aos="fade-right"
              className="relative order-first lg:order-last"
            >
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
            <div data-aos="fade-left" className="text-[#212121] relative z-10">
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
            <div data-aos="fade-right" className="relative">
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
            <div data-aos="fade-left" className="text-[#212121] relative z-10">
              <div className="w-fit p-[10px] font-bold text-sm text-[#0366FF] bg-[#E6F0FF] border border-[#0366FF] rounded-xl flex flex-row items-center">
                <img className="mr-1" src={feature} alt="" />
                Fitur
              </div>
              <h1 className="mt-2 text-start font-bold text-xl lg:text-2xl">
                Kompresi File
              </h1>
              <p className="mt-4 text-sm lg:text-base relative z-1">
                Teknologi kompresi file kami dirancang untuk mengurangi ukuran
                file secara signifikan dengan menjaga kualitas data. Solusi ini
                mempermudah penyimpanan, transfer, dan pengelolaan file dengan
                lebih efisien. Baik untuk dokumen, gambar, video, atau jenis
                file lainnya, proses kompresi berlangsung cepat dan aman,
                didukung antarmuka yang ramah pengguna.
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
              Di TuntasinAja, kami berkomitmen untuk terus berkembang dan
              berinovasi
            </p>
          </div>
          <div className="mt-11 text-[#212121] grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-6 ">
            <div className="w-full flex flex-col md:flex-row items-start bg-[#FBFBFB] p-5 rounded-3xl gap-4 hover:scale-105 duration-700">
              <img className="w-12" src={camAi} alt="" />
              <div>
                <p className="text-base font-bold text-[#212121]">
                  CCTV Dengan AI
                </p>
                <p className="mt-3 text-sm text-[#ABABAB]">
                  CCTV dengan AI canggih yang dilengkapi fitur Dwelling Time,
                  Face Recognition, Motion Detection, dan People Counting,
                  memungkinkan pengolahan data harian, mingguan, hingga bulanan
                  untuk analisis keamanan dan operasional yang lebih efektif.
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col md:flex-row items-start bg-[#FBFBFB] p-5 rounded-3xl gap-4 hover:scale-105 duration-700">
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
            <div className="w-full flex flex-col md:flex-row items-start bg-[#FBFBFB] p-5 rounded-3xl gap-4 hover:scale-105 duration-700">
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
            <div className="w-full flex flex-col md:flex-row items-start bg-[#FBFBFB] p-5 rounded-3xl gap-4 hover:scale-105 duration-700">
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
