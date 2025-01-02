// Gallery Component with Skeleton Loaders and Lightbox Animations (Gallery.jsx)
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useSwipeable } from 'react-swipeable';
import client from '../contentful';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [lightboxImageIndex, setLightboxImageIndex] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await client.getEntries({ content_type: 'galleryImage' });
        const galleryImages = response.items.map((item) => ({
          url: item.fields.image.fields.file.url,
          title: item.fields.title || 'Untitled',
        }));
        setImages(galleryImages);

        // Preload images
        galleryImages.forEach((image) => {
          const img = new Image();
          img.src = image.url;
        });
      } catch (error) {
        console.error('Error fetching gallery images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, []);

  const openLightbox = (index) => {
    setLightboxImageIndex(index);
  };

  const closeLightbox = () => {
    setLightboxImageIndex(null);
  };

  const showNextImage = () => {
    setLightboxImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const showPreviousImage = () => {
    setLightboxImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: showNextImage,
    onSwipedRight: showPreviousImage,
    preventDefaultTouchmoveEvent: true,
    trackTouch: true,
  });

  return (
    <div id="gallery" className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Our Portfolio</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-8">
        {isLoading
          ? Array(6) // Display skeleton loaders while fetching images
              .fill(0)
              .map((_, index) => (
                <div
                  key={index}
                  className="w-full h-48 bg-gray-300 animate-pulse rounded"
                ></div>
              ))
          : images.map((image, index) => (
              <motion.div
                key={index}
                className="overflow-hidden rounded shadow aspect-w-4 aspect-h-3 cursor-pointer"
                whileHover={{ scale: 1.05 }}
                onClick={() => openLightbox(index)}
              >
                <img src={image.url} alt={image.title} className="w-full h-full object-cover" />
                <div className="box-content">
                  <p className="text-center text-sm text-gray-600 bg-gray-200">{image.title}</p>
                </div>
              </motion.div>
            ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImageIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            {...swipeHandlers}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="relative max-w-3xl mx-auto"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
            >
              <button
                className="absolute top-2 right-2 bg-white text-black rounded-full px-3 py-1"
                onClick={closeLightbox}
              >
                Close
              </button>
              <button
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full px-3 py-1"
                onClick={showPreviousImage}
              >
                Previous
              </button>
              <img
                src={images[lightboxImageIndex].url}
                alt={images[lightboxImageIndex].title}
                className="max-w-full max-h-screen"
              />
              <p className="text-white text-center mt-4">{images[lightboxImageIndex].title}</p>
              <button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white text-black rounded-full px-3 py-1"
                onClick={showNextImage}
              >
                Next
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
