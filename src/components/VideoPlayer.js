import { useState, useRef, useEffect } from 'react';

const VideoPlayer = ({ src, poster, alt, className = '' }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const videoRef = useRef(null);
  const containerRef = useRef(null);

  // Intersection Observer for lazy loading with improved performance
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { 
        threshold: 0.1, 
        rootMargin: '100px' // Start loading when video is 100px away from viewport
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setIsLoading(false);
    setHasError(true);
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  return (
    <div ref={containerRef} className={`video-container ${className}`}>
      {/* Loading skeleton */}
      {isLoading && (
        <div className="video-skeleton">
          <div className="skeleton-content">
            <div className="skeleton-spinner"></div>
            <p>Loading video...</p>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="video-error">
          <div className="error-content">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <p>Video unavailable</p>
          </div>
        </div>
      )}

      {/* Video element - only render when in view */}
      {isInView && (
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          poster={poster}
          onLoadStart={handleLoadStart}
          onCanPlay={handleCanPlay}
          onLoadedData={handleLoadedData}
          onError={handleError}
          style={{ 
            opacity: isLoading || hasError ? 0 : 1
          }}
        >
          <source src={src} type="video/mp4" />
          <source src={src} type="video/quicktime" />
          Your browser does not support the video tag.
        </video>
      )}
    </div>
  );
};

export default VideoPlayer;