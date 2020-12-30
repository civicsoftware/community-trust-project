import React from "react";
import { array } from "prop-types";
import "./Carousel.css";

function Carousel({ photos }) {
  return (
    <>
      <section className="carousel" aria-label="Images">
        <ol className="carousel__viewport">
          <li id="carousel__slide1" className="carousel__slide">
            <img src={photos[0].url} alt={photos[0].description} />
            <div className="carousel__snapper">
              <a href="#carousel__slide4" className="carousel__prev">
                Go to last slide
              </a>
              <a href="#carousel__slide2" className="carousel__next">
                Go to next slide
              </a>
            </div>
          </li>
          <li id="carousel__slide2" className="carousel__slide">
            <img src={photos[1].url} alt={photos[1].description} />
            <div className="carousel__snapper" />
            <a href="#carousel__slide1" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide3" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide3" className="carousel__slide">
            <img src={photos[2].url} alt={photos[2].description} />
            <div className="carousel__snapper" />
            <a href="#carousel__slide2" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide4" className="carousel__next">
              Go to next slide
            </a>
          </li>
          <li id="carousel__slide4" className="carousel__slide">
            <img src={photos[3].url} alt={photos[3].description} />
            <div className="carousel__snapper" />
            <a href="#carousel__slide3" className="carousel__prev">
              Go to previous slide
            </a>
            <a href="#carousel__slide1" className="carousel__next">
              Go to first slide
            </a>
          </li>
        </ol>
        <aside className="carousel__navigation">
          <ol className="carousel__navigation-list">
            <li className="carousel__navigation-item">
              <a href="#carousel__slide1" className="carousel__navigation-button">
                Go to slide 1
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide2" className="carousel__navigation-button">
                Go to slide 2
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide3" className="carousel__navigation-button">
                Go to slide 3
              </a>
            </li>
            <li className="carousel__navigation-item">
              <a href="#carousel__slide4" className="carousel__navigation-button">
                Go to slide 4
              </a>
            </li>
          </ol>
        </aside>
      </section>
    </>
  );
}

Carousel.propTypes = {
  photos: array.isRequired
};

export default Carousel;
