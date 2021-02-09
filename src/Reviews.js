import { React, useState } from "react";
import { data } from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";
const Reviews = () => {
  const [people, setPeople] = useState(data[0]);

  const handleForward = (id) => {
    let index = id % data.length;
    setPeople(data[index]);
  };

  const handleBackward = (id) => {
    let index = id - 1;
    if (index <= 0) {
      setPeople(data[data.length - 1]);
    } else {
      setPeople(data[index - 1]);
    }
  };

  const handleRandom = () => {
    let randomPerson = Math.floor(Math.random() * data.length);
    setPeople(data[randomPerson]);
  };
  const { id, name, image, post, desc } = people;
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>Our Reviews</h2>
          <div className="underline"></div>
        </div>
        <article className="review">
          <div className="img-container">
            <img src={image} alt={name} className="person-img" />
            <span className="quote-icon">
              <FaQuoteRight />
            </span>
          </div>
          <h4 className="author">{name}</h4>
          <p className="job">{post}</p>
          <p className="info">{desc}</p>
          <div className="button-container">
            <button className="prev-btn" onClick={() => handleBackward(id)}>
              <FaChevronLeft />
            </button>
            <button className="next-btn" onClick={() => handleForward(id)}>
              <FaChevronRight />
            </button>
          </div>
          <button className="random-btn" onClick={handleRandom}>
            surprise me
          </button>
        </article>
      </section>
    </main>
  );
};

export default Reviews;
