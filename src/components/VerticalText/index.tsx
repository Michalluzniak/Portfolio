import React from 'react';

interface VerticalTextProps {
  text: string;
  color: 'text-soft-white' | 'text-dark';
}

const VerticalText = ({ text, color }: VerticalTextProps) => {
  const splittedText = text.split('');
  return (
    <p className={`${color} flex flex-col uppercase text-3xl self-center items-center col-start-1 font-bold`}>
      {splittedText.map((char) => (
        <span key={char}>{char}</span>
      ))}
    </p>
  );
};

export default VerticalText;
