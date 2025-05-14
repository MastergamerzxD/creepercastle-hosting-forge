
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create animated loading effect before main render
const root = createRoot(document.getElementById("root")!);

// Add transition effect
const fadeIn = () => {
  const rootStyle = document.documentElement.style;
  rootStyle.setProperty('opacity', '0');
  setTimeout(() => {
    rootStyle.transition = 'opacity 500ms';
    rootStyle.opacity = '1';
  }, 50);
};

// Append transition style
const style = document.createElement('style');
style.innerHTML = `
  html {
    opacity: 0;
    transition: opacity 500ms;
  }
`;
document.head.appendChild(style);

// Render with animation
root.render(<App />);
fadeIn();
