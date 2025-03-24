const sections = document.querySelectorAll('.section');
        let options = {
            root: null,
            threshold: 0.5,
        };

        let observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                } else {
                    entry.target.style.opacity = '0';
                }
            });
        }, options);

        sections.forEach(section => {
            section.style.opacity = '0';
            observer.observe(section);
        });