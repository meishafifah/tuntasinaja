import { Link } from "react-router-dom";
import logo from "../assets/img/logoWhite.svg";
import bgFooter from "../assets/img/footer.png";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <section
      id="footer"
      className="pt-12 md:pt-16 md:pb-6 bg-[#011F4D] w-full relative"
    >
      <img className="absolute top-10 right-0" src={bgFooter} alt="" />
      <div className="max-w-[1700px] mx-auto px-6 md:px-9 lg:px-32 py-6 text-white">
        <div className="flex flex-col md:flex-row gap-y-9 md:gap-x-12 md:gap-y-0">
          <div className="w-full md:w-1/4 flex flex-col">
            <Link to={"/"}>
              <img className="w-[180px] z-10" src={logo} />
            </Link>
            <p className="mt-2 text-sm lg:text-base z-10">
              Solusi Kompresi Data Terbaik
            </p>
            <div className="mt-11 flex gap-x-3">
              <Link
                to={"https://x.com/"}
                target="_blank"
                className="w-12 h-12 rounded-full border border-white p-3"
              >
                <Twitter />
              </Link>
              <Link
                to={"https://facebook.com/"}
                target="_blank"
                className="w-12 h-12 rounded-full border border-white p-3"
              >
                <Facebook />
              </Link>
              <Link
                to={"https://youtube.com/"}
                target="_blank"
                className="w-12 h-12 rounded-full border border-white p-3"
              >
                <Youtube />
              </Link>
              <Link
                to={"https://instagram.com/"}
                target="_blank"
                className="w-12 h-12 rounded-full border border-white p-3"
              >
                <Instagram />
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-11">
            <div className="flex flex-col">
              <h4 className="text-base md:text-xl font-bold mb-6">
                Perusahaan
              </h4>
              <div className="flex flex-col gap-y-2">
                <Link to={"/about"} className="text-sm md:text-base">
                  Tentang Kami
                </Link>
                <Link to={"/contact"} className="text-sm md:text-base">
                  Hubungi Kami
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-base md:text-xl font-bold mb-6">
                Support File
              </h4>
              <div className="flex flex-col gap-y-2">
                <Link to={"/"} className="text-sm md:text-base">
                  PNG (.png)
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  PDF (.pdf)
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  JPG (.jpg)
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  JPEG (.jpeg)
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  WEBM (.webm)
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  MP4 (.mp4)
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  MOV (.mov)
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  DAV (.dav)
                </Link>
              </div>
            </div>
            <div className="flex flex-col">
              <h4 className="text-base md:text-xl font-bold mb-6">
                Our Future Work
              </h4>
              <div className="flex flex-col gap-y-2">
                <Link to={"/"} className="text-sm md:text-base">
                  CCTV Dengan Face Recognition
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  Bot Call
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  Data Analysis by AI
                </Link>
                <Link to={"/"} className="text-sm md:text-base">
                  Integrasi AI dengan IOT
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 flex flex-col items-start gap-2">
          <div className="flex flex-row gap-4 text-sm">
            <Link to={"/"}>Privacy and policy</Link>
            <Link to={"/"}>Terms and Condition</Link>
          </div>
          <p className="mt-1 text-sm">
            © TuntasinAja 2024 . All rights reserved
          </p>
        </div>
      </div>
    </section>
  );
}
