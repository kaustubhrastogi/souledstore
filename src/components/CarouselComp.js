import Carousel from "react-bootstrap/Carousel";
const WomenBannerData = [
  {
    uri: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage-banner_22_1qB155u.jpg?format=webp&w=1366&dpr=1.0",
  },
  {
    uri: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/web-banner1_1.jpg?format=webp&w=1366&dpr=1.0",
  },
  {
    uri: "https://prod-img.thesouledstore.com/public/theSoul/storage/mobile-cms-media-prod/banner-images/Homepage--Banner--Shirts_JI8v3qP.jpg?format=webp&w=1366&dpr=1.0",
  },
];

function CarouselComp() {
  return (
    <div>
      <Carousel>
        {WomenBannerData.map((i) => {
          return (
            <Carousel.Item>
              <img src={i.uri} alt="No Image" />
              {/* <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption> */}
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselComp;
