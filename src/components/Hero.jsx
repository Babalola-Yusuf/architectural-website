import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import client from '../contentful';

const Hero = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [error, setError] = useState(false);
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const taglines = [
    'Design Matters',
    'Function Meets Elegance',
    'Award-Winning Architecture',
  ];

  const navigate = useNavigate();

  useEffect(() => {
    const fetchVideo = async () => {
      try {
        const response = await client.getEntries({ content_type: 'heroVideo' });
        const video = response.items[0]?.fields?.video?.fields?.file?.url;
        if (video) {
          setVideoUrl(`https:${video}`);
        } else {
          setError(true);
        }
      } catch (error) {
        console.error('Error fetching hero video:', error);
        setError(true);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVideo();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTaglineIndex((prevIndex) => (prevIndex + 1) % taglines.length);
    }, 3000); // Change tagline every 3 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[75vh] lg:h-screen overflow-hidden">
      {isLoading ? (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-300 animate-pulse"></div>
      ) : videoUrl && !error ? (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          src={videoUrl}
          autoPlay
          loop
          muted
        />
      ) : (
        <div className="absolute top-0 left-0 w-full h-full bg-gray-900 flex items-center justify-center">
          <p className="text-white text-center">Video not available. Please try again later.</p>
        </div>
      )}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/50 to-black/80 z-0"></div>
      <div className="relative z-10 text-white text-center flex flex-col items-center justify-center h-full px-4">
        {isLoading ? (
          <div className="space-y-4">
            <div className="w-3/4 h-10 bg-gray-400 animate-pulse rounded"></div>
            <div className="w-1/2 h-6 bg-gray-400 animate-pulse rounded"></div>
            <div className="flex space-x-4 mt-6">
              <div className="w-32 h-10 bg-gray-400 animate-pulse rounded"></div>
              <div className="w-32 h-10 bg-gray-400 animate-pulse rounded"></div>
            </div>
          </div>
        ) : (
          <>
            <h1 className="text-4xl lg:text-6xl font-bold animate-fadeIn">
              {taglines[taglineIndex]}
            </h1>
            <p className="mt-4 text-lg lg:text-xl">
              Minale + Mann is an award-winning architectural studio based in London.
            </p>
            <div className="mt-6 flex space-x-4">
              <button
                className="px-6 py-3 bg-accent text-black rounded hover:bg-yellow-500"
                onClick={() => {
                  const galleryElement = document.getElementById('gallery');
                  galleryElement?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Our Portfolio
              </button>
              <button
                className="px-6 py-3 bg-white text-black rounded hover:bg-gray-200"
                onClick={() => navigate('/contact')}
              >
                Get a Free Consultation
              </button>
            </div>
          </>
        )}
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <span className="text-white text-2xl">↓</span>
      </div>
    </div>
  );
};

export default Hero;
