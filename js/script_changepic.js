const avatar = document.getElementById('avatar');
  
  avatar.addEventListener('mouseenter', () => {
    avatar.src = '/picture/avatar2.png';
  });

  avatar.addEventListener('mouseleave', () => {
    avatar.src = '/picture/avatar3.png';
  });