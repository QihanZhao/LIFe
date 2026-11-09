(() => {
  const video = document.getElementById('demo-video');
  const launch = document.getElementById('video-launch');
  const chapters = [...document.querySelectorAll('.chapter')];
  const moments = [...document.querySelectorAll('[data-seek]')];
  document.getElementById('year').textContent = new Date().getFullYear();
  const hideLaunch = () => launch.classList.add('hidden');
  const showLaunch = () => { if (video.paused && video.currentTime === 0) launch.classList.remove('hidden'); };
  launch.addEventListener('click', () => { hideLaunch(); video.play().catch(() => { launch.classList.remove('hidden'); }); });
  video.addEventListener('play', hideLaunch);
  video.addEventListener('ended', () => { video.currentTime = 0; launch.classList.remove('hidden'); });
  video.addEventListener('pause', showLaunch);
  function seekTo(seconds) {
    video.currentTime = seconds;
    video.scrollIntoView({behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',block: 'center'});
    hideLaunch();
    video.play().catch(() => { launch.classList.remove('hidden'); });
  }
  chapters.forEach(b => b.addEventListener('click', () => seekTo(Number(b.dataset.time))));
  moments.forEach(a => a.addEventListener('click', (event) => {event.preventDefault();seekTo(Number(a.dataset.seek));}));
  video.addEventListener('timeupdate', () => {
    let current = chapters.find(b => Number(b.dataset.time) === Math.min(...chapters.map(x => Number(x.dataset.time)))) || chapters[0];
    for (const b of chapters) if (Number(b.dataset.time) <= video.currentTime && Number(b.dataset.time) >= Number(current.dataset.time)) current = b;
    chapters.forEach(b => b.classList.toggle('active', b === current));
  });
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {if (entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}});
    },{threshold:.07,rootMargin:'0px 0px 45px 0px'});
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  } else document.querySelectorAll('.reveal').forEach(el=>el.classList.add('visible'));
})();
