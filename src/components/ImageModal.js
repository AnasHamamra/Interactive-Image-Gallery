// src/components/ImageModal.js
import React, { useEffect } from "react";
import "./Gallery.css";

const ImageModal = ({ images, selectedIndex, setSelectedIndex, closeModal }) => {
  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleKeyDown = (e) => {
    if (e.key === "Escape") closeModal();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "ArrowLeft") handlePrev();
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="modal-overlay" onClick={closeModal}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={closeModal}>
          ✖
        </button>
        <img
          src={images[selectedIndex].url}
          alt={images[selectedIndex].title}
          className="modal-image"
        />
        <p className="modal-caption">{images[selectedIndex].title}</p>
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          ◀
        </button>
        <button className="nav-btn next-btn" onClick={handleNext}>
          ▶
        </button>
      </div>
    </div>
  );
};

export default ImageModal;
