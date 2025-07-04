

const themeButton = document.getElementById('theme');
const body = document.body;

themeButton.addEventListener('click', () => {
  // Toggle light mode on body (optional for other purposes)
  const isLight = body.classList.toggle('light-theme');

  if (isLight) {
    // ✅ Apply Light Theme Colors
    document.documentElement.style.setProperty('--title-color', '#000000');
    document.documentElement.style.setProperty('--text-color', '#333333');
    document.documentElement.style.setProperty('--background-color', '#ffffff');
    document.documentElement.style.setProperty('--container-color', '#f0f0f0');
    document.documentElement.style.setProperty('--body-color', '#ffffff');
    document.documentElement.style.setProperty('--form-color', '#f0f0f0');

    // 🌙 Switch icon to moon
    themeButton.classList.remove('ri-sun-line');
    themeButton.classList.add('ri-moon-line');
  } else {
    // ✅ Apply Dark Theme Colors (default)
    document.documentElement.style.setProperty('--title-color', '#fff');
    document.documentElement.style.setProperty('--text-color', ' #dbefff');
    document.documentElement.style.setProperty('--background-color', '#181c23');
    document.documentElement.style.setProperty('--container-color', '#112f41');
    document.documentElement.style.setProperty('--body-color', '#0b1d2b');
    document.documentElement.style.setProperty('--form-color', 'rgba(11, 29, 43, 0.98)');

    // ☀️ Switch icon to sun
    themeButton.classList.remove('ri-moon-line');
    themeButton.classList.add('ri-sun-line');
  }
});



document.addEventListener("DOMContentLoaded", function () {
  // === Contact Form with EmailJS ===
  const contactForm = document.getElementById('contact-form'),
        contactName = document.getElementById('contact-name'),
        contactEmail = document.getElementById('contact-email'),
        contactMessage = document.getElementById('contact-message'),
        message = document.getElementById('message');

  emailjs.init('Sgz48evsdVWgjqX--'); // Replace with your public key

  contactForm?.addEventListener('submit', function (e) {
    e.preventDefault();

    if (contactName.value === '' || contactEmail.value === '' || contactMessage.value === '') {
      message.textContent = "❗ Please fill in all input fields";
      message.style.color = "red";
      setTimeout(() => { message.textContent = ''; }, 3000);
    } else {
      emailjs.sendForm('service_z605bvt', 'template_uds0our', this)
        .then(() => {
          message.textContent = "✅ Message sent successfully!";
          message.style.color = "green";
          setTimeout(() => { message.textContent = ''; }, 3000);
          contactForm.reset();
        }, (error) => {
          alert("❌ Oops! Something went wrong.\n" + error.text);
        });
    }
  });

  // === MixItUp Filter ===
  var mixer = mixitup('.work-container', {
    selectors: { target: '.mix' },
    animation: { duration: 300 }
  });

  const filterBtns = document.querySelectorAll('.work-item');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelector('.active-work')?.classList.remove('active-work');
      btn.classList.add('active-work');
      const filterValue = btn.getAttribute('data-filter');
      mixer.filter(filterValue === 'all' ? 'all' : filterValue);
    });
  });

  // === CountUp ===
  const countElements = document.querySelectorAll('.count');
  countElements.forEach(el => {
    const endVal = parseInt(el.getAttribute('data-val'), 10);
    const countUp = new countUp.CountUp(el, endVal, {
      duration: 2,
      separator: ','
    });
    if (!countUp.error) {
      countUp.start();
    } else {
      console.error(countUp.error);
    }
  });

  // === Scroll Header Background Change ===
  const scrollHeader = () => {
    const header = document.getElementById('header');
    window.scrollY >= 20
      ? header.classList.add('scroll-header')
      : header.classList.remove('scroll-header');
  };
  window.addEventListener('scroll', scrollHeader);

  // === Scroll Spy ===
  const sections = document.querySelectorAll('section[id]');
  const scrollActive = () => {
    const scrollY = window.pageYOffset;
    sections.forEach(section => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 70;
      const sectionId = section.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        navLink?.classList.add('active-link');
      } else {
        navLink?.classList.remove('active-link');
      }
    });
  };
  window.addEventListener('scroll', scrollActive);

  // === Smooth Scroll ===
  document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      const headerOffset = 70;
      const elementPosition = targetSection.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    });
  });
});
  

document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show-menu");
  });
});


        // Add intersection observer for scroll animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                }
            });
        }, observerOptions);

        // Observe all resume items
        document.querySelectorAll('.resume-item').forEach(item => {
            observer.observe(item);
        });

        // Add smooth scroll behavior for better UX
        document.documentElement.style.scrollBehavior = 'smooth';

        // Optional: Add dynamic particle generation
        function createParticle() {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.left = Math.random() * 100 + '%';
            particle.style.animationDelay = '0s';
            particle.style.animationDuration = (Math.random() * 10 + 10) + 's';
            
            document.querySelector('.floating-particles').appendChild(particle);
            
            // Remove particle after animation
            setTimeout(() => {
                particle.remove();
            }, 20000);
        }

        // Generate particles periodically
        setInterval(createParticle, 3000);


