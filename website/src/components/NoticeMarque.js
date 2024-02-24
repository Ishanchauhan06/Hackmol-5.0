import React from 'react';

const NoticeMarquee = ({notice}) => {
  return (
    <div className="bg-blue-300 py-2">
      <marquee behavior="alternate" direction="left">
        <p className="text-sm md:text-base font-semibold">
          {notice}
        </p>
      </marquee>
    </div>
  );
};

export default NoticeMarquee;
