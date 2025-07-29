'use client';
import { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function CalmButton() {
  const [open, setOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (open && audioRef.current) {
      audioRef.current.play();
    } else if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }
  }, [open]);

  return (
    <>
      {/* Moved to bottom-left */}
      <Button
        onClick={() => setOpen(true)}
        className="fixed bottom-4 left-4 z-50 bg-blue-600 text-white hover:bg-blue-700"
      >
        Calm Me Down
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>🧘 Breathe with me</DialogTitle>
          </DialogHeader>

          <div className="flex flex-col items-center justify-center mt-4 space-y-4">
            {/* Breathing Circle */}
            <div className="w-24 h-24 rounded-full bg-blue-200 animate-breathe"></div>
            <p className="text-center text-gray-700">Inhale 4s → Hold 7s → Exhale 8s</p>
            <p className="text-sm text-gray-500">If you need urgent help, call your local helpline.</p>
          </div>
        </DialogContent>
      </Dialog>

      {/* Calming Sound */}
      <audio ref={audioRef} loop>
        <source src="/calm.mp3" type="audio/mpeg" />
      </audio>
    </>
  );
}
