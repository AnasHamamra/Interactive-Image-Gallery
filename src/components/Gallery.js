import React, { useState, useEffect } from "react";
import ImageModal from "./ImageModal";
import "./Gallery.css";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    const imgs = [
      { id: 1, url: "https://picsum.photos/id/1018/600/400", title: "Mountain View" , liked: false},
      { id: 2, url: "https://picsum.photos/id/1025/600/400", title: "Cute Puppy" , liked: false},
      { id: 3, url: "https://picsum.photos/id/1043/600/400", title: "Jungle Lights" , liked: false},
      { id: 4, url: "https://picsum.photos/id/1069/600/400", title: "Golden Jellyfish" , liked: false},
      { id: 5, url: "https://picsum.photos/id/1074/600/400", title: "Beautiful Eyes" , liked: false},
      { id: 6, url: "https://picsum.photos/id/1084/600/400", title: "Towering Seal" , liked: false},
      { id: 7, url: "https://picsum.photos/id/255/600/400", title: "Forest Path" , liked: false},
      { id: 8, url: "https://picsum.photos/id/299/600/400", title: "City Downtown" , liked: false}
    ];
    setImages(imgs);
  }, []);

  const openModal = (index) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const toggleLike = (id) => {
    setImages((prev) =>
      prev.map((img) =>
        img.id == id ? { ...img, liked: !img.liked } : img
      )
    );
  };

  return (
    <div className="gallery-container">
      <h1 className="gallery-title">Interactive Image Gallery</h1>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={image.id} className="gallery-card">
            <div className="image-wrapper" onClick={() => openModal(index)}>
              <img src={image.url} alt={image.title} className="gallery-image" />
            </div>
            <div className="image-footer">
              <p className="image-title">{image.title}</p>
              
              <button
                onClick={() => toggleLike(image.id)}
              >
                <i className={`fa-solid fa-heart ${image.liked ? "red" : ""}`}></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedIndex !== null && (
        <ImageModal
          images={images}
          selectedIndex={selectedIndex}
          setSelectedIndex={setSelectedIndex}
          closeModal={closeModal}
        />
      )}
    </div>
  );
};

export default Gallery;
