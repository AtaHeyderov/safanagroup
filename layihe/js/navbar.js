
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const flags = document.querySelector('.flags');
    const socialIcons = document.querySelector('.social-icons');
    const navbarLinks = document.querySelectorAll('.navbar-link');
    const logo = document.querySelector('.navbar-brand img');
  
    if (window.scrollY > 0) {
      navbar.style.backgroundColor = '#ffffff'; 
      flags.style.display = 'flex';
      socialIcons.style.display = 'none';
      navbarLinks.forEach(link => {
        link.style.color = '#000';
      });
      logo.style.filter = 'hue-rotate(5deg)'; 
    } else {
      navbar.style.backgroundColor = 'rgba(0, 0, 0, 0)';
      flags.style.display = 'none';
      socialIcons.style.display = 'flex';
      navbarLinks.forEach(link => {
        link.style.color = '#fff';
      });
      logo.style.filter = 'none'; 
    }
  });
  

  function toggleMenu() {
    var mobileMenu = document.querySelector('.mobile-menu');
    var overlay = document.querySelector('.mobile-overlay');
 
    if (mobileMenu.style.transform === 'translateX(0%)') {
        mobileMenu.style.transform = 'translateX(100%)';
        overlay.style.opacity = '0';
        overlay.style.visibility = 'hidden';
        document.body.style.overflowY = 'auto'; 
        mobileMenu.style.color = '#666'; 
    } else {
        mobileMenu.style.transform = 'translateX(0%)';
        overlay.style.opacity = '1';
        overlay.style.visibility = 'visible';
        document.body.style.overflowY = 'hidden'; 
        mobileMenu.style.color = '#fff'; 
    }
}




  