// import f1 from "../../assets/page_one/f3.png";
// import f12 from "../../assets/page_one/f12.png";

const Carousal = ({image1,image2}) => {
  return (
    <>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={image1} className="d-block w-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={image2} className="d-block w-100" alt="..." />
          </div>
        </div>
      </div>
    </>
  );
};

export default Carousal;
