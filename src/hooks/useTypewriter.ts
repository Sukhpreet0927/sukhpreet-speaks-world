import { useState, useEffect } from 'react';

interface TypewriterOptions {
  words: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
  loop?: boolean;
}

export const useTypewriter = ({
  words,
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000,
  loop = true
}: TypewriterOptions) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (words.length === 0) return;

    const currentWord = words[currentWordIndex];
    
    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === currentWord) {
        // Finished typing current word
        setIsTyping(false);
        if (loop && words.length > 1) {
          setTimeout(() => setIsDeleting(true), delayBetweenWords);
        }
      } else if (isDeleting && currentText === '') {
        // Finished deleting current word
        setIsDeleting(false);
        setIsTyping(true);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      } else if (isDeleting) {
        // Continue deleting
        setCurrentText(currentWord.substring(0, currentText.length - 1));
      } else {
        // Continue typing
        setIsTyping(true);
        setCurrentText(currentWord.substring(0, currentText.length + 1));
      }
    }, isDeleting ? deleteSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, currentWordIndex, isDeleting, words, typeSpeed, deleteSpeed, delayBetweenWords, loop, isTyping]);

  return {
    text: currentText,
    currentWordIndex,
    isTyping,
    isDeleting
  };
};