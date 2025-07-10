import { setupHeaderScrollEffect, setupMobileMenuToggle, setupNavLinkClick, setupSmoothScroll } from './utils.js';

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    // 获取DOM元素
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-link');

    // 调用工具函数
    setupHeaderScrollEffect(header);
    setupMobileMenuToggle(menuToggle, navLinks);
    setupNavLinkClick(navLinksItems, menuToggle, navLinks);
    setupSmoothScroll();
});