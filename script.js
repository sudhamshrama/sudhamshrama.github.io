document.getElementById('yr').textContent = new Date().getFullYear();
const burger = document.querySelector('.burger'), links = document.querySelector('.nav-links');
burger.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  burger.setAttribute('aria-expanded', open);
});
links.addEventListener('click', e => { if (e.target.tagName === 'A') { links.classList.remove('open'); burger.setAttribute('aria-expanded','false'); }});
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* phone: reveal + copy the number on click (native dialler on touch devices) */
(function(){
  const link = document.getElementById('phone'), pop = document.getElementById('phone-pop');
  const number = '+1 945-278-3783';
  const touch = window.matchMedia('(hover: none)').matches;
  let timer;
  link.addEventListener('click', function(e){
    if (touch) return;               // phones and tablets: let tel: open the dialler
    e.preventDefault();
    link.classList.add('show');
    clearTimeout(timer);
    if (navigator.clipboard) {
      navigator.clipboard.writeText(number).then(function(){
        pop.textContent = number + '  ·  copied';
      }).catch(function(){});
    }
    timer = setTimeout(function(){
      link.classList.remove('show');
      setTimeout(function(){ pop.textContent = number; }, 200);
    }, 2600);
  });
})();

/* hero subtitle typing effect */
(function(){
  const target = document.getElementById('typed');
  const full = document.querySelector('.hero .sub .ghost').textContent;
  if (reduce) { target.textContent = full; return; }
  const caret = document.createElement('span');
  caret.className = 'caret';
  target.after(caret);
  let i = 0;
  function step(){
    target.textContent = full.slice(0, ++i);
    if (i < full.length) { setTimeout(step, full[i] === ' ' ? 12 : 22); }
    else { caret.classList.add('done'); }
  }
  setTimeout(step, 420);
})();

if (!reduce) {
  const io = new IntersectionObserver((es) => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }}), {threshold:.08, rootMargin:'0px 0px -40px'});
  document.querySelectorAll('.rv').forEach(el => io.observe(el));
} else { document.querySelectorAll('.rv').forEach(el => el.classList.add('in')); }
const navA = [...document.querySelectorAll('.nav-links a')];
const spy = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) {
  navA.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id)); }}), {rootMargin:'-45% 0px -50%'});
document.querySelectorAll('section[id]').forEach(s => spy.observe(s));
