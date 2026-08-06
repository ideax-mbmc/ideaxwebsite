import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AOSInit() {
  const location = useLocation();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,        
      offset: 80,        
      easing: 'ease-out'
    });
  }, []);


  useEffect(() => {
    AOS.refreshHard();
  }, [location.pathname]);

  return null; 
}
