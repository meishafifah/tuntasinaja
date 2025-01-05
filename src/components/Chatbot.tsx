import { useState } from "react";
import chatBot from "../assets/img/chatBot.svg";
import logo from "../assets/img/logo.svg";
import sent from "../assets/img/sent.svg";
import { User } from "lucide-react";

export default function Chatbot() {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <div className="relative z-20">
      <button
        className="z-20"
        type="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <img
          className="bg-black p-[6px] rounded-full fixed right-4 bottom-4 md:right-12 md:bottom-10 w-12 h-12"
          src={chatBot}
          alt=""
        />
      </button>

      <div
        onClick={() => setOpenMenu(false)}
        className={`duration-500 fixed inset-0 bg-black z-50 ${
          openMenu
            ? "opacity-50 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {openMenu && (
        <div className="duration-500 fixed z-50 md:right-12 bottom-10 rounded-3xl m-4 md:m-0 text-[#212121] bg-[#E6F0FF]">
          <div className="bg-[#023D99] rounded-t-3xl p-4">
            <div className="relative">
              <div
                className="z-50 absolute -right-5 md:left-[390px] -top-8 lg:-top-10 w-8 lg:w-11"
                onClick={() => setOpenMenu(!openMenu)}
              >
                <img src={""} alt="" />
              </div>
            </div>
            <div className="flex flex-row gap-3 items-center justify-start">
              <div className="w-10 h-10 p-2 bg-white rounded-full">
                <img className="" src={logo} alt="" />
              </div>
              <h4 className="text-base font-semibold text-white">
                Admin TuntasiAja
              </h4>
            </div>
          </div>
          <div className="rounded-b-3xl p-4">
            <div className="w-full h-[200px] md:w-[400px] lg:h-[400px] overflow-y-auto">
              <div className="flex flex-col gap-4">
                <div className="rounded-[32px] w-4/5 bg-white p-4">
                  <div className="flex flex-row gap-4 items-center">
                    <img
                      className="w-11 h-11 p-2 bg-white border rounded-full"
                      src={logo}
                      alt=""
                    />
                    <div>
                      <h4 className="text-base font-bold">Admin</h4>
                      <h4 className="text-sm">1 minute ago</h4>
                    </div>
                  </div>
                  <p className="mt-4 text-sm md:text-base">
                    Hai! Saya Admin TuntasinAja. Ada yang ingin kamu tanyakan?
                  </p>
                </div>

                <div className="flex justify-end">
                  <div className="rounded-[32px] w-4/5 bg-white p-4">
                    <div className="flex flex-row gap-4 items-center">
                      <User className="w-11 h-11 p-2 bg-white border rounded-full" />
                      <div>
                        <h4 className="text-base font-bold">Customer</h4>
                        <h4 className="text-sm">1 minute ago</h4>
                      </div>
                    </div>
                    <p className="mt-4 text-sm md:text-base">
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi ad culpa fuga illo! Maxime voluptas, quam enim explicabo incidunt facilis voluptates, neque ipsa fugit, id ex debitis! Aspernatur, hic possimus?
                    </p>
                  </div>
                </div>

                <div className="rounded-[32px] w-4/5 bg-white p-4">
                  <div className="flex flex-row gap-4 items-center">
                    <img
                      className="w-11 h-11 p-2 bg-white border rounded-full"
                      src={logo}
                      alt=""
                    />
                    <p className="text-sm md:text-base">Sedang Berpikir...</p>
                  </div>
                </div>
              </div>
            </div>
            <form action="" className="relative">
              <input
                className="p-4 mt-4 w-full rounded-2xl text-sm md:text-base text-white bg-landing pr-14 focus:outline-none focus:bg-landing focus:text-gray-900"
                type="text"
                name=""
                id=""
                placeholder="Ketikan sesuatu..."
              />
              <button className="absolute top-6 right-3">
                <img className="w-9" src={sent} alt="" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
