import React from 'react';
import Image from './Image';

const Gallery = () => {
  const images = [
    { src: '/images/gallery-image-1.jpg', alt: 'Gallery Image 1' },
    { src: '/images/gallery-image-2.jpg', alt: 'Gallery Image 2' },
    { src: '/images/gallery-image-3.jpg', alt: 'Gallery Image 3' },
    { src: '/images/gallery-image-4.jpg', alt: 'Gallery Image 4' },
    { src: '/images/gallery-image-5.jpg', alt: 'Gallery Image 5' },
    { src: '/images/gallery-image-6.jpg', alt: 'Gallery Image 6' },
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative">
              <Image
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg"
                onClick={() => {
                  // Open the image in a lightbox or a new page
                  console.log(`Image ${index + 1} clicked`);
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;