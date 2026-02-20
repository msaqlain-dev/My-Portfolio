import { useState, useEffect } from 'react';

export function useTypewriter(
  words: string[],
  typeSpeed = 90,
  deleteSpeed = 45,
  pauseMs = 2200,
): string {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[wordIndex % words.length];

    if (isPaused) {
      const id = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pauseMs);
      return () => clearTimeout(id);
    }

    if (!isDeleting && charIndex < currentWord.length) {
      const id = setTimeout(() => {
        setText(currentWord.slice(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      }, typeSpeed);
      return () => clearTimeout(id);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      setIsPaused(true);
      return;
    }

    if (isDeleting && charIndex > 0) {
      const id = setTimeout(() => {
        setText(currentWord.slice(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      }, deleteSpeed);
      return () => clearTimeout(id);
    }

    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setWordIndex((w) => (w + 1) % words.length);
    }
  }, [charIndex, isDeleting, isPaused, wordIndex, words, typeSpeed, deleteSpeed, pauseMs]);

  return text;
}
