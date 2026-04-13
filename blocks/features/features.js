export default function decorate(block) {
  // Features block decoration logic
  const ul = block.querySelector('ul');
  
  if (ul) {
    const grid = document.createElement('div');
    grid.classList.add('features-grid');
    
    ul.querySelectorAll('li').forEach(item => {
      const featureDiv = document.createElement('div');
      featureDiv.classList.add('feature-item');
      featureDiv.innerHTML = item.innerHTML;
      grid.appendChild(featureDiv);
    });
    
    ul.parentNode.replaceChild(grid, ul);
  }
  
  block.classList.add('features');
}
