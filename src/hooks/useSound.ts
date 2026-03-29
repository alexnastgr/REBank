import { useEffect, useRef, useState } from "react";

type UseSoundOptions = {
  volume?: number;
  loop?: boolean;
  autoplay?: boolean;
};

type UseSoundReturn = {
  play: () => Promise<void> | void;
  stop: () => void;
  pause: () => void;
  isPlaying: boolean;
  audio: HTMLAudioElement | null;
};

export function useSound(
  src: string,
  options: UseSoundOptions = {},
): UseSoundReturn {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const { volume = 1, loop = false, autoplay = false } = options;

  useEffect(() => {
    const audio = new Audio(src);
    audio.volume = volume;
    audio.loop = loop;

    audioRef.current = audio;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    if (autoplay) {
      audio
        .play()
        .then(() => setIsPlaying(true))
        .catch(() => {});
    }

    return () => {
      audio.pause();
      audio.currentTime = 0;
      audio.removeEventListener("ended", handleEnded);
    };
  }, [src, volume, loop, autoplay]);

  const play = async () => {
    if (!audioRef.current) return;

    try {
      await audioRef.current.play();
      setIsPlaying(true);
    } catch (err) {
      console.warn("Audio play failed:", err);
    }
  };

  const pause = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    setIsPlaying(false);
  };

  const stop = () => {
    if (!audioRef.current) return;

    audioRef.current.pause();
    audioRef.current.currentTime = 0;
    setIsPlaying(false);
  };

  return {
    play,
    pause,
    stop,
    isPlaying,
    audio: audioRef.current,
  };
}
