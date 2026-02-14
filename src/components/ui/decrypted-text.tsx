import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface DecryptedTextProps {
  text: string;
  speed?: number;
  maxIterations?: number;
  sequential?: boolean;
  revealDirection?: 'start' | 'end' | 'center';
  useOriginalCharsOnly?: boolean;
  characters?: string;
  className?: string;
  parentClassName?: string;
  animateOn?: 'view' | 'hover';
}

export const DecryptedText = ({
  text,
  speed = 50,
  maxIterations = 10,
  sequential = false,
  revealDirection = 'start',
  useOriginalCharsOnly = false,
  characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+',
  className = '',
  parentClassName = '',
  animateOn = 'hover',
  ...props
}: DecryptedTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [isRevealed, setIsRevealed] = useState(false);
  const containerRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let interval: any;
    let iteration = 0;

    const startAnimation = () => {
      interval = setInterval(() => {
        setDisplayText((prevText) =>
          text
            .split('')
            .map((char, index) => {
              if (char === ' ') return char;
              if (index < iteration / (maxIterations / text.length)) {
                return text[index];
              }
              return characters[Math.floor(Math.random() * characters.length)];
            })
            .join('')
        );

        if (iteration >= maxIterations) {
          clearInterval(interval);
          setDisplayText(text);
          setIsRevealed(true);
        }

        iteration++;
      }, speed);
    };

    if (animateOn === 'view' && !isRevealed) {
      startAnimation();
    } else if (animateOn === 'hover' && isHovering) {
      startAnimation();
    }

    return () => clearInterval(interval);
  }, [isHovering, text, speed, maxIterations, characters, animateOn, isRevealed]);

  return (
    <span
      ref={containerRef}
      className={`inline-block ${parentClassName}`}
      onMouseEnter={() => animateOn === 'hover' && setIsHovering(true)}
      onMouseLeave={() => animateOn === 'hover' && setIsHovering(false)}
      {...props}
    >
      <span className={className}>{displayText}</span>
    </span>
  );
};