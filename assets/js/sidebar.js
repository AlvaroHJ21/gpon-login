const btnMenu = document.getElementById('btn-menu');

btnMenu.addEventListener('click', () => {
  const menu = document.getElementById('responsive-menu');
  menu.classList.toggle('hidden');
});
