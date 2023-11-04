import React, { useState } from "react";

const ImageUpload = ({ setImage }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
      setImage(file); // Pass the selected file to the parent component
    }
  };

  return (
    <div>
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        style={{ display: "none" }}
        id="image-upload"
      />
      <label htmlFor="image-upload" className="cursor-pointer">
        <div className="image-container">
          {selectedImage && <img src={selectedImage} alt="Selected" />}
        </div>
       
      </label>
    </div>
  );
};

export default ImageUpload;
