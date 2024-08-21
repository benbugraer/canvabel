"use client";

import Image from "next/image";
import React, { useState } from "react";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <input
        type="file"
        accept="image/*"
        onChange={handleImageChange}
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      {selectedImage && (
        <Image
          src={URL.createObjectURL(selectedImage)}
          alt="Selected"
          className="w-64 h-64 object-cover mt-4"
        />
      )}
    </div>
  );
};

export default ImageUpload;
