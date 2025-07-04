// Mobile Menu Toggle
        const menuBtn = document.querySelector('.menu-btn');
        const navMenu = document.querySelector('nav ul');

        menuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            menuBtn.querySelector('i').classList.toggle('fa-bars');
            menuBtn.querySelector('i').classList.toggle('fa-times');
        });

        // Close menu when clicking on a link
        document.querySelectorAll('nav ul li a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuBtn.querySelector('i').classList.add('fa-bars');
                menuBtn.querySelector('i').classList.remove('fa-times');
            });
        });

        // Sticky header on scroll
        window.addEventListener('scroll', () => {
            const header = document.querySelector('header');
            header.classList.toggle('sticky', window.scrollY > 0);
        });

        // Portfolio filtering
        const filterBtns = document.querySelectorAll('.filter-btn');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterBtns.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                btn.classList.add('active');
                
                const filter = btn.getAttribute('data-filter');
                
                portfolioItems.forEach(item => {
                    if (filter === 'all' || item.getAttribute('data-category') === filter) {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            });
        });

        // Form submission
        const contactForm = document.getElementById('contactForm');
        
        // Initialize EmailJS
        emailjs.init('77jOiREGiD11YiOeU'); // Replace with your actual public key

        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            sendEmail(); // Call your sendEmail function
        });

        // Set current year in footer
        document.querySelector('.copyright p').innerHTML = 
            document.querySelector('.copyright p').innerHTML.replace('2023', new Date().getFullYear());

             function sendEmail() {
                let params = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    message: document.getElementById('message').value,
                    subject: document.getElementById('subject').value,
                };
                emailjs.send('service_ak0a1c4', 'template_no445kd', params)
                    .then(function(response) {
                        alert('Thank you for your message! I will get back to you soon.');
                        contactForm.reset();
                    }, function(error) {
                        alert('Failed to send message. Please try again later.');
                    });
            }
