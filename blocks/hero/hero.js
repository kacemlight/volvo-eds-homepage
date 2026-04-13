export default function decorate(block) {
  // Hero block decoration logic
  const h1 = block.querySelector('h1');
  const p = block.querySelector('p');
  const cta = block.querySelector('a');
  
  if (cta) {
    cta.classList.add('button');
  }
  
  block.classList.add('hero');
}
