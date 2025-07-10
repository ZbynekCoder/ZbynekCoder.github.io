// 导航栏滚动效果
export function setupHeaderScrollEffect(header) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.padding = '10px 0';
        } else {
            header.classList.remove('scrolled');
            header.style.padding = '15px 0';
        }
    });
}

// 移动端菜单切换
export function setupMobileMenuToggle(menuToggle, navLinks) {
    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('open');
        const icon = menuToggle.querySelector('i');
        if (icon.classList.contains('fa-bars')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// 导航链接点击关闭菜单（移动端）
export function setupNavLinkClick(navLinksItems, menuToggle, navLinks) {
    navLinksItems.forEach(link => {
        link.addEventListener('click', function () {
            if (window.innerWidth <= 768) {
                navLinks.classList.remove('open');
                const icon = menuToggle.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });
}

// 平滑滚动
export function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}