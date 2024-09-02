import Link from 'next/link';
import { useState } from 'react';

const Download = ({ icon }) => {
  const [hoverColor, setHoverColor] = useState('text-Snow');

  const randomColor = () => {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500', 'text-pink-500', 'text-orange-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  return (
    <>
      <Link
        href='/Akshat.resume%20(2).pdf'
        target='_blank'
        className='flex flex-row text-Snow items-center gap-x-4 pb-14 pt-4 px-6 bg-transparent rounded-lg transition-colors duration-300'
        onMouseEnter={() => setHoverColor(randomColor())}
        onMouseLeave={() => setHoverColor('text-Snow')}
      >
        <span>Download Resume</span>
        <span className={`${hoverColor}`}>{icon}</span>
      </Link>
    </>
  );
};

export default Download;
