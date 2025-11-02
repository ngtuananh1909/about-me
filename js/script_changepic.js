const avatar = document.getElementById('avatar');
  
  avatar.addEventListener('mouseenter', () => {
    avatar.src = 'picture/avatar4.png';
  });

  avatar.addEventListener('mouseleave', () => {
    avatar.src = 'picture/avatar2.png';
  });