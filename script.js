(function(){
  const el = document.getElementById('ticket');
  if(!el) return;
  function randomPrize(){
    const r = Math.random();
    if(r < 0.6){ return Math.floor(750 + Math.random()*2000); }
    else if(r < 0.9){ return Math.floor(2000 + Math.random()*5000); }
    else{ return Math.floor(7000 + Math.random()*8000); }
  }
  function step(){ el.textContent = 'Ganador de $' + randomPrize().toLocaleString('es-AR'); }
  step(); setInterval(step, 3000);
})();