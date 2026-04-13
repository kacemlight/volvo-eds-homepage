export default function decorate(block) {
  // CTA banner block decoration logic
  const cta = block.querySelector('a');
  
  if (cta) {
    cta.classList.add('button');
  }
  
  block.classList.add('cta-banner');
}
