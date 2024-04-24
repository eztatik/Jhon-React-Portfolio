function Carousel() {
  return (
    <div className="Carousel">
      <section>
        <>
          {/*Carousel Header Start*/}
          <div
            id="carouselExampleSlidesOnly"
            className="carousel slide"
            data-ride="carousel"
            data-interval={3000}
          >
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img
                  className="d-block w-100"
                  src="/images/carousel-1.png"
                  alt="First slide"
                />
                <h1>Jhonnatan Portfolio</h1>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/images/carousel-2.png"
                  alt="Second slide"
                />
                <h1>FIND THE INSURANCE YOU NEED</h1>
              </div>
              <div className="carousel-item">
                <img
                  className="d-block w-100"
                  src="/images/carousel-3.png"
                  alt="Third slide"
                />
                <h1>AFFORDABLE PRICES</h1>
              </div>
            </div>
          </div>
          {/*Carousel Header End*/}
        </>
      </section>
    </div>
  );
}

export default Carousel;
