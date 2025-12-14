        // Menu Mobile - Funcionalidade
        document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
            document.querySelector('.nav-links').classList.toggle('active');
        });

        // Fechar menu ao clicar em um link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                document.querySelector('.nav-links').classList.remove('active');
            });
        });

        // Animação de contagem dos stats
        function animateStats() {
            const statNumbers = document.querySelectorAll('.stat-number');
            const speed = 200;
            
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-count'));
                const count = parseInt(stat.textContent);
                const increment = target / speed;
                
                if (count < target) {
                    stat.textContent = Math.floor(count + increment);
                    setTimeout(animateStats, 1);
                } else {
                    stat.textContent = target;
                }
            });
        }

        // Observador de interseção para animações ao rolar
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (entry.target.classList.contains('stats')) {
                        animateStats();
                    }
                    entry.target.classList.add('animate');
                }
            });
        }, { threshold: 0.1 });

        // Elementos a serem observados
        document.querySelectorAll('.stats, .step, .tech-item, .testimonial-card').forEach(el => {
            observer.observe(el);
        });