import React from 'react';

interface VerticalTextProps {
  text: string;
  color: 'text-soft-white' | 'text-dark';
}

const VerticalText = ({ text, color }: VerticalTextProps) => {
  const splittedText = text.split('');
  return (
    <p
      className={`${color} xl:text-2xl  2xl:text-3xl flex flex-col uppercase self-center items-center col-start-1 font-bold`}
    >
      {splittedText.map((char, index) => (
        <span key={index}>{char}</span>
      ))}
    </p>
  );
};

export default VerticalText;
