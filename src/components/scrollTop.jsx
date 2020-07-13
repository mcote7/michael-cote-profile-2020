import React, { useEffect } from 'react';
import '../css/react.css';

const ScrollTop = () => {
  useEffect(() => {
    window.scrollTo({top: 0, behavior: 'smooth'})
  },[]);
  return (
    <div className="hidden">
    </div>
  );
}
export default ScrollTop;