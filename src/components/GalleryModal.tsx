import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const GalleryModal = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 bg-black border-0">
        <div className="relative h-full flex items-center justify-center">
          {/* Close button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
            onClick={onClose}
          >
            <X className="w-6 h-6" />
          </Button>

          {/* Navigation arrows */}
          {images.length > 1 && (
            <>
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 z-50 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 z-50 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}

          {/* Image display */}
          <div className="relative w-full h-full flex items-center justify-center">
            <img
              src={`${import.meta.env.NEXT_PUBLIC_STORAGE_URL}${images[currentIndex].image_path}`}
              alt={images[currentIndex].caption || `Gallery image ${currentIndex + 1}`}
              className="max-w-full max-h-full object-contain"
            />
            
            {/* Caption */}
            {images[currentIndex].caption && (
              <div className="absolute bottom-4 left-0 right-0 text-center">
                <p className="text-white bg-black/50 px-4 py-2 rounded-lg mx-auto inline-block">
                  {images[currentIndex].caption}
                </p>
              </div>
            )}

            {/* Image counter */}
            {images.length > 1 && (
              <div className="absolute top-4 left-4 text-white bg-black/50 px-3 py-1 rounded-lg">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default GalleryModal;