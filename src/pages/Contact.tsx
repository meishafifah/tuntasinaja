import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import whatsapp from "../assets/img/whatsapp.png";
import telegram from "../assets/img/telegram.png";
import mail from "../assets/img/mail.png";
import contactHero1 from "../assets/img/contactHero1.png";
import contactHero2 from "../assets/img/contactHero2.png";
import contactHero3 from "../assets/img/contactHero3.png";
import contactEllipse from "../assets/img/contactEllipse.png";
import arrow from "../assets/img/arrow.svg";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import Faq from "@/components/Faq";
import Chatbot from "@/components/Chatbot";

const FormSchema = z.object({
  username: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  phone: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  topic: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  question: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
});

export default function Contact() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      username: "",
      email: "",
      phone: "",
      topic: "",
      question: "",
    },
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  return (
    <div className="min-h-screen w-full relative">
      <img className="absolute top-0 left-0 z-0" src={contactHero1} alt="" />
      <img className="absolute top-0 right-0 z-0" src={contactHero2} alt="" />

      <Navbar />

      <Chatbot />
      
      <section
        id="contact"
        className="relative z-10 w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center"
      >
        <div className="px-8 md:px-32 lg:pt-48">
          <div className="text-center mb-8">
            <h1 className="text-black font-bold text-4xl">
              Hubungi Kami untuk Solusi Hosting Terbaik
            </h1>
            <p className="mt-4 text-base text-[#202020]">
              Tim kami siap membantu Anda dengan pertanyaan dan kebutuhan Anda
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to={"https://wa.me/6281188088893"}
              className="bg-[#E6F0FF] rounded-[20px] p-4 flex items-center gap-4 hover:bg-[#CDE0FF] hover:scale-110 duration-700"
            >
              <div className="w-16 h-16 aspect-square bg-[#CDE0FF] rounded-full flex items-center justify-center">
                <img className="w-10 h-10" src={whatsapp} alt="Whatsapp" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-bold">Whatsapp</p>
                <p className="text-base">Komunikasi via Whatsapp</p>
              </div>
            </Link>
            <Link
              to={"https://t.me/nicholasntj"}
              className="bg-[#E6F0FF] rounded-[20px] p-4 flex items-center gap-4 hover:bg-[#CDE0FF] hover:scale-110 duration-700"
            >
              <div className="w-16 h-16 aspect-square bg-[#CDE0FF] rounded-full flex items-center justify-center">
                <img className="w-10 h-10" src={telegram} alt="Telegram" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-bold">Telegram</p>
                <p className="text-base">Komunikasi via Telegram</p>
              </div>
            </Link>
            <Link
              to={"mailto:sales@tuntasinaja.id"}
              className="bg-[#E6F0FF] rounded-[20px] p-4 flex items-center gap-4 hover:bg-[#CDE0FF] hover:scale-110 duration-700"
            >
              <div className="w-16 h-16 aspect-square bg-[#CDE0FF] rounded-full flex items-center justify-center">
                <img className="w-10 h-10" src={mail} alt="Mail" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base font-bold">Mail</p>
                <p className="text-base">Hubungi kami lewat email</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section
        id="formContact"
        className="relative w-full max-w-[1700px] min-[1700px]:max-w-full flex justify-center"
      >
        <div className="relative z-10 px-8 md:px-32 py-16 lg:py-20 lg:p-0 w-full lg:w-1/2 min-[1700px]:w-1/4">
          <img
            className="pointer-events-none absolute -top-16 right-2 md:-top-16 md:right-20 lg:top-10 lg:right-0 z-0 animate-bounce"
            src={arrow}
            alt=""
          />
          <div className="text-center ">
            <h1 className="text-black font-bold text-4xl">Atau Hubungi Kami</h1>
            <p className="mt-4 text-base text-[#202020]">
              Hubungi kami lewat formulir kami
            </p>
          </div>
          <div className="bg-[#F5F5F5]/30 border border-white rounded-3xl p-6">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="w-full space-y-4"
              >
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="mb-3 text-[#212121] font-bold text-base">
                        Nama
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-[20px] px-4 py-6 border-[#D4D4D4] focus-visible:ring-[#0366FF] text-base placeholder:text-[#D4D4D4]"
                          placeholder="Masukan nama anda"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="mb-3 text-[#212121] font-bold text-base">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          className="rounded-[20px] px-4 py-6 border-[#D4D4D4] focus-visible:ring-[#0366FF] text-base placeholder:text-[#D4D4D4]"
                          placeholder="Email anda"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="mb-3 text-[#212121] font-bold text-base">
                        Nomor Hp
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          className="rounded-[20px] px-4 py-6 border-[#D4D4D4] focus-visible:ring-[#0366FF] text-base placeholder:text-[#D4D4D4]"
                          placeholder="08XXXXXXXXXX"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="topic"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="mb-3 text-[#212121] font-bold text-base">
                        Topik Pertanyaan
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="tel"
                          className="rounded-[20px] px-4 py-6 border-[#D4D4D4] focus-visible:ring-[#0366FF] text-base placeholder:text-[#D4D4D4]"
                          placeholder="Sales"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="question"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormLabel className="mb-3 text-[#212121] font-bold text-base">
                        Pesan
                      </FormLabel>
                      <FormControl>
                        <Input
                          className="rounded-[20px] px-4 py-6 border-[#D4D4D4] focus-visible:ring-[#0366FF] text-base placeholder:text-[#D4D4D4]"
                          placeholder="Ketikan..."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Button
                    className="mt-4 bg-[#0366FF] hover:bg-[#0366FF]/70 text-sm lg:text-base"
                    type="submit"
                  >
                    Kirim Pertanyaan
                  </Button>
                </div>
              </form>
            </Form>
          </div>
        </div>
        <img
          className="absolute -bottom-20 right-0 z-0"
          src={contactHero3}
          alt=""
        />
        <img
          className="absolute top-36 right-0 lg:right-20 min-[1700px]:right-[600px] z-0"
          src={contactEllipse}
          alt=""
        />
      </section>

      <Faq />

      <Footer />
    </div>
  );
}
