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

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[url('/src/assets/img/backgroundHero.png')] bg-no-repeat bg-right-top">
      <Navbar />
      <section id="compression" className="px-32 lg:pt-48 w-full flex justify-center">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-5 items-center justify-center">
          <div className="text-center">
            <h1 className="text-black font-bold text-4xl">
              <span className="text-[#0366FF]">Hemat Ruang</span>, Aman Data,
              dan Pantau dengan{" "}
              <span className="text-[#0366FF]">AI Pintar</span>
            </h1>
            <p className="mt-4 text-base text-[#202020]">
              Hemat ruang penyimpanan hingga 70% tanpa mengorbankan kualitas,
              lindungi data Anda dengan jaringan private yang aman,
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="bg-[#F5F5F5] rounded-3xl p-4 w-fit">
              <div className="bg-white rounded-2xl p-6 w-fit">
                <h3 className="mb-4 text-xl text-[#202020] font-semibold">
                  Compress File
                </h3>
                <div className="pt-14 pb-4 px-12 flex flex-col justify-center items-center border-2 border-dashed border-[#9F9F9F] rounded-2xl h-[230px] max-w-[450px]">
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
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}
