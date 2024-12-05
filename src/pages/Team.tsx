import Personnel from "../components/Personnel";
import Slider from "react-slick";
import Profile from "../assets/ProfileImg.jpeg";

const Team = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  const settings2 = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    rtl: true,
  };

  return (
    <div className="bg-white ">
      <div className="lg:max-w-[90%] lg:mx-auto">
        <div className="py-4">
          <h1 className="font-semibold text-2xl">Senior Developers</h1>
          <div className="py-4">
            <Slider {...settings}>
              <Personnel img={Profile} name="PaaRich" position="Web designer" />
              <Personnel img={Profile} name="PaaRich" position="Web designer" />
              <Personnel img={Profile} name="PaaRich" position="Web designer" />
            </Slider>
          </div>
        </div>
        <div className="py-4">
          <h1 className="font-semibold text-2xl">Junior Developers</h1>
          <div className="py-4">
            <Slider {...settings2}>
              <Personnel img={Profile} name="PaaRich" position="Web designer" />
              <Personnel img={Profile} name="PaaRich" position="Web designer" />
              <Personnel img={Profile} name="PaaRich" position="Web designer" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
