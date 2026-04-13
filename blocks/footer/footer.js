export default function decorate(block) {
  // Footer block decoration logic
  block.classList.add('footer');
  
  // Wrap content in footer-content div for proper grid layout
  const content = document.createElement('div');
  content.classList.add('footer-content');
  
  while (block.firstChild) {
    content.appendChild(block.firstChild);
  }
  
  block.appendChild(content);
}
