'use client';

import { useEffect } from 'react';
import type { StaticImageData } from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface ImageViewerProps {
  image: string | StaticImageData | null;
  alt: string;
  onClose: () => void;
}

export function ImageViewer({ image, alt, onClose }: ImageViewerProps) {
  useEffect(() => {
    if (!image) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [image, onClose]);

  return (
    <AnimatePresence>
      {image && (
        <motion.button
          type="button"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[140] flex cursor-zoom-out items-center justify-center bg-black/85 p-4 backdrop-blur-sm sm:p-8"
          onClick={onClose}
          aria-label="Close image viewer"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
            className="relative h-full max-h-[88vh] w-full max-w-6xl"
          >
            <ImageWithFallback
              src={image}
              alt={alt}
              fill
              sizes="100vw"
              className="object-contain"
              priority
            />
          </motion.div>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
