import Link from 'next/link';
import { useState } from 'react';

const Download = ({ icon }) => {
  const [hoverColor, setHoverColor] = useState('text-Snow');
  const [bgColor, setBgColor] = useState('bg-transparent');
  const [textColor, setTextColor] = useState('text-white');

  const randomColor = () => {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500', 'text-pink-500', 'text-orange-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <Link
        href='/Akshat.resume%20(2).pdf'
        target='_blank'
        className={`flex flex-row items-center gap-x-4 pb-14 pt-4 px-6 rounded-lg transition-colors duration-300 ${bgColor} ${textColor}`}
        onMouseEnter={() => {
          setHoverColor(randomColor());
          setBgColor('bg-green-500');
          setTextColor('text-black');
        }}
        onMouseLeave={() => {
          setHoverColor('text-Snow');
          setBgColor('bg-transparent');
          setTextColor('text-white');
        }}
      >
        <span>Download Resume</span>
        <span className={`${hoverColor}`}>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
