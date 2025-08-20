// Stars Canvas
const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let w, h, stars;
function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
  stars = Array.from({length: Math.floor(w*h/9000)}, () => ({
    x: Math.random()*w,
    y: Math.random()*h,
    r: Math.random()*1.4 + 0.2,
    a: Math.random()*0.7 + 0.3,
    d: Math.random()*0.02 + 0.002
  }));
}
function draw() {
  ctx.clearRect(0,0,w,h);
  for(const s of stars){
    s.a += s.d;
    const twinkle = 0.5 + Math.sin(s.a)*0.5;
    ctx.globalAlpha = twinkle*0.8;
    ctx.fillStyle = '#ffffff';
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.r, 0, Math.PI*2);
    ctx.fill();
  }
  requestAnimationFrame(draw);
}
window.addEventListener('resize', resize);
resize(); draw();

// Typed Roles Animation
const rolesEl = document.getElementById('typed-roles');
const cursorEl = document.querySelector('.cursor');
const roles = rolesEl.dataset.roles.split('|');
let ri = 0, ci = 0, deleting = false;

function typeLoop(){
  const full = roles[ri];
  if(!deleting){
    rolesEl.textContent = full.slice(0, ++ci);
    if(ci === full.length){ setTimeout(()=> deleting = true, 1000); }
  } else {
    rolesEl.textContent = full.slice(0, --ci);
    if(ci === 0){ deleting = false; ri = (ri+1)%roles.length; }
  }
  setTimeout(typeLoop, deleting ? 40 : 80);
}
typeLoop();

// Blink cursor
setInterval(()=> cursorEl.style.opacity = cursorEl.style.opacity === '0' ? '1' : '0', 500);

// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();
