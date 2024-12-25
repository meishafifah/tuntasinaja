import Slider from "react-slick";
import logo from "../assets/img/homeLogo.png";

export default function Autoplay() {
  const logoSlider = {
    dots: false,
    infinite: true,
    draggable: false,
    focusOnSelect: false,
    slidesToShow: 8,
    slidesToScroll: 2,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 0,
    cssEase: "linear",
    initialSlide: 0,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 8,
        },
      },
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 4,
        },
      },
    ],
  };

  return (
    <Slider {...logoSlider}>
      {[...Array(8)].map((_, index) => (
        <div key={index}>
          <img
            className="h-[50px] sm:h-[75px] md:h-[100px] lg:h-[120px]"
            src={logo}
            alt={`Logo ${index + 1}`}
          />
        </div>
      ))}
    </Slider>
  );
}
