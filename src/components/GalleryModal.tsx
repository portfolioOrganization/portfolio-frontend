import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const toStorageUrl = (path) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${import.meta.env.VITE_STORAGE_URL}${path}`;
};

const GalleryModal = ({ images, isOpen, onClose, initialIndex = 0 }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  useEffect(() => {
    if (isOpen) {
      const safeIndex = Math.min(Math.max(initialIndex, 0), Math.max(images.length - 1, 0));
      setCurrentIndex(safeIndex);
    }
  }, [isOpen, initialIndex, images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!images || images.length === 0) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl h-[80vh] p-0 bg-black border-0 overflow-hidden flex flex-col">
        <div className="relative flex-1 min-h-0">
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
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </>
          )}

          {/* Image display */}
          <div className="relative w-full h-full overflow-y-auto overflow-x-auto overscroll-contain px-4 py-14 sm:px-16">
            <img
              src={toStorageUrl(images[currentIndex].image_path)}
              alt={images[currentIndex].caption || `Gallery image ${currentIndex + 1}`}
              className="mx-auto h-auto max-w-full object-contain"
            />
            
            {/* Caption */}
            {images[currentIndex].caption && (
              <div className="sticky bottom-0 left-0 right-0 mt-4 pb-2 text-center bg-gradient-to-t from-black/65 to-transparent">
                <p className="text-white bg-black/55 px-4 py-2 rounded-lg mx-auto inline-block max-w-[90%] break-words">
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