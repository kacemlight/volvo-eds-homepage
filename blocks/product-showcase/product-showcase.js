export default function decorate(block) {
  // Product showcase block decoration logic
  const image = block.querySelector('img');
  const content = block.querySelector('div:not(:has(img))');
  
  if (image) {
    image.classList.add('product-image');
  }
  
  // Create product container for layout
  const container = document.createElement('div');
  container.classList.add('product-container');
  
  // Reorganize content structure
  const allChildren = Array.from(block.children);
  allChildren.forEach(child => {
    container.appendChild(child.cloneNode(true));
  });
  
  block.innerHTML = '';
  block.appendChild(container);
  block.classList.add('product-showcase');
}
