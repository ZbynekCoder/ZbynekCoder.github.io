import {NOTES_CONFIG} from './notes-config.js';
import { setupHeaderScrollEffect, setupMobileMenuToggle, setupNavLinkClick, setupSmoothScroll } from './utils.js';

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 全局初始化Mermaid
    mermaid.initialize({
        startOnLoad: false,
        theme: 'default',
        flowchart: { useMaxWidth: true, htmlLabels: true },
        securityLevel: 'loose'
    });

    // 获取DOM元素
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const categoriesList = document.getElementById('categoriesList');
    const noteContent = document.getElementById('noteContent');

    // 调用工具函数
    setupHeaderScrollEffect(header);
    setupMobileMenuToggle(menuToggle, navLinks);
    setupNavLinkClick(navLinksItems, menuToggle, navLinks);
    setupSmoothScroll();

    // 初始化分类列表
    function initCategoriesList(config, parentContainer) {
        config.forEach(category => {
            const categoryContainer = document.createElement('div');
            categoryContainer.className = 'category-container';

            // 创建分类标题
            const categoryHeader = document.createElement('div');
            categoryHeader.className = 'category-header';
            categoryHeader.innerHTML = `
                <h3>${category.category}</h3>
                <i class="fas fa-chevron-down category-icon"></i>
            `;

            // 创建笔记列表容器
            const notesList = document.createElement('ul');
            notesList.className = 'notes-list';
            notesList.style.display = 'none'; // 默认隐藏

            // 添加该分类下的所有笔记
            if (category.notes) {
                category.notes.forEach(note => {
                    const li = document.createElement('li');
                    li.className = 'note-item';
                    li.textContent = note.title;
                    li.dataset.id = note.id;
                    li.dataset.file = note.file;
                    li.dataset.category = category.category;

                    li.addEventListener('click', function () {
                        // 更新URL参数
                        const url = new URL(window.location.href);
                        url.searchParams.set('category', this.dataset.category);
                        url.searchParams.set('note', this.dataset.id);
                        window.history.pushState({}, '', url);

                        // 加载对应笔记
                        loadNote(this.dataset.file);

                        // 设置当前笔记为激活状态
                        setActiveNote(this.dataset.id);
                    });

                    notesList.appendChild(li);
                });
            }

            // 点击分类标题切换展开/折叠状态
            categoryHeader.addEventListener('click', function () {
                const icon = this.querySelector('.category-icon');
                const list = this.nextElementSibling;

                if (list.style.display === 'none') {
                    list.style.display = 'block';
                    icon.classList.remove('fa-chevron-down');
                    icon.classList.add('fa-chevron-up');

                    // 检查该分类是否有说明文档
                    if (category.description) {
                        loadNote(category.description);
                    }
                } else {
                    list.style.display = 'none';
                    icon.classList.remove('fa-chevron-up');
                    icon.classList.add('fa-chevron-down');
                }
            });

            categoryContainer.appendChild(categoryHeader);
            categoryContainer.appendChild(notesList);
            parentContainer.appendChild(categoryContainer);

            // 递归处理子分类
            if (category.children) {
                initCategoriesList(category.children, notesList);
            }
        });

        // 处理URL参数，自动展开对应分类并加载笔记
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        const noteParam = urlParams.get('note');

        if (categoryParam && noteParam) {
            // 找到对应的分类并展开
            const categoryHeaders = document.querySelectorAll('.category-header');
            categoryHeaders.forEach(header => {
                if (header.querySelector('h3').textContent === categoryParam) {
                    header.click(); // 触发点击事件展开分类

                    // 找到对应的笔记并加载
                    const noteItems = header.nextElementSibling.querySelectorAll('.note-item');
                    noteItems.forEach(item => {
                        if (item.dataset.id === noteParam) {
                            item.click(); // 触发点击事件加载笔记
                        }
                    });
                }
            });
        }
    }

    // 设置激活的笔记项
    function setActiveNote(noteId) {
        document.querySelectorAll('.note-item').forEach(item => {
            if (item.dataset.id === noteId) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }

    // 加载笔记内容
    function loadNote(filePath) {
        if (filePath === 'todo') {
            noteContent.innerHTML = `
            <div class="todo-message">
                <i class="fas fa-hourglass-half"></i> 该笔记正在整理中，敬请期待...
            </div>
        `;
            return;
        }

        // 显示骨架屏
        noteContent.innerHTML = `
        <div class="skeleton-screen">
            <!-- 骨架屏内容 -->
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
            <div class="skeleton-line"></div>
        </div>
    `;

    //     // 显示加载状态
    //     noteContent.innerHTML = `
    //     <div class="loading-indicator">
    //         <i class="fas fa-spinner fa-spin"></i> 加载中...
    //     </div>
    // `;

        // 异步加载 Markdown 文件
        fetch(filePath)
            .then(response => {
                if (!response.ok) {
                    throw new Error('笔记文件加载失败');
                }
                return response.text();
            })
            .then(markdown => {
                // 使用 marked.js 解析 Markdown
                const html = marked.parse(markdown);

                // 创建容器元素
                const container = document.createElement('div');
                container.className = 'markdown-preview';
                container.innerHTML = html;

                // 计算Markdown文件的基础目录
                const basePath = filePath.substring(0, filePath.lastIndexOf('/') + 1);

                // 修正所有图片的src
                const images = container.querySelectorAll('img');
                images.forEach(img => {
                    const src = img.getAttribute('src');
                    // 仅处理相对路径（非http/https/data开头的路径）
                    if (!src.startsWith('http') && !src.startsWith('data') && !src.startsWith('/')) {
                        // 拼接正确的图片路径
                        img.src = `${basePath}${src}`;
                    }
                });

                // 清空容器并添加修正后的内容
                noteContent.innerHTML = '';
                noteContent.appendChild(container);

                // 生成并显示大纲
                generateOutline(container);

                // 渲染 Mermaid 图表
                const mermaidBlocks = container.querySelectorAll('pre code.language-mermaid');

                // 转换所有Mermaid代码块为div容器
                mermaidBlocks.forEach((block) => {
                    const graphDefinition = block.textContent;
                    const tempDiv = document.createElement('div');
                    tempDiv.className = 'mermaid';
                    tempDiv.textContent = graphDefinition;

                    // 替换原始代码块
                    block.parentNode.replaceWith(tempDiv);
                });

                // 使用Mermaid的run方法渲染所有图表
                mermaid.run({
                    querySelector: '.mermaid',
                    nodes: container.querySelectorAll('.mermaid'),
                }).catch(error => {
                    console.error('Mermaid渲染错误:', error);
                    container.querySelectorAll('.mermaid').forEach(el => {
                        el.innerHTML = `<div class="mermaid-error">图表渲染错误: ${error.message}</div>`;
                    });
                });

                // 代码高亮（排除mermaid代码块）
                container.querySelectorAll('pre code:not(.language-mermaid)').forEach((block) => {
                    hljs.highlightElement(block);
                });

                // 渲染LaTeX公式
                renderMathInElement(container, {
                    delimiters: [
                        {left: '$$', right: '$$', display: true},
                        {left: '$', right: '$', display: false},
                        {left: '\\(', right: '\\)', display: false},
                        {left: '\\[', right: '\\]', display: true}
                    ],
                    throwOnError: false
                });
            })
            .catch(error => {
                console.error('加载笔记时出错:', error);
                noteContent.innerHTML = `
                <div class="error-message">
                    <i class="fas fa-exclamation-triangle"></i> 笔记加载失败：${error.message}
                </div>
            `;
            });
    }

    // 生成大纲
    function generateOutline(container) {
        const outlineContainer = document.getElementById('outlineContainer');
        const headings = container.querySelectorAll('h1, h2, h3, h4, h5, h6');

        // 如果没有标题，隐藏大纲容器
        if (headings.length === 0) {
            outlineContainer.innerHTML = '';
            return;
        }

        // 创建大纲标题
        const outlineTitle = document.createElement('div');
        outlineTitle.className = 'outline-title';
        outlineTitle.textContent = '大纲';

        // 创建大纲列表
        const outlineList = document.createElement('ul');
        outlineList.className = 'outline-list';

        // 遍历所有标题，添加到大纲
        headings.forEach(heading => {
            // 为每个标题添加唯一ID（如果没有）
            if (!heading.id) {
                heading.id = 'heading-' + Date.now() + '-' + Math.floor(Math.random() * 1000);
            }

            // 获取标题级别 (1-6)
            const level = parseInt(heading.tagName.replace('H', ''));

            // 创建大纲项
            const listItem = document.createElement('li');
            listItem.className = 'outline-item';

            // 创建大纲链接
            const link = document.createElement('a');
            link.className = `outline-link outline-level-${level}`;
            link.href = '#' + heading.id;
            link.textContent = heading.textContent;

            // 添加点击事件，平滑滚动到对应标题
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    window.scrollTo({
                        top: target.offsetTop - 100, // 考虑导航栏高度
                        behavior: 'smooth'
                    });
                }
            });

            listItem.appendChild(link);
            outlineList.appendChild(listItem);
        });

        // 更新大纲容器内容
        outlineContainer.innerHTML = '';
        outlineContainer.appendChild(outlineTitle);
        outlineContainer.appendChild(outlineList);

        // 设置滚动监听，高亮当前可见的标题
        setupOutlineScrollHighlight(headings);
    }

    // 设置滚动监听，高亮当前可见的标题
    function setupOutlineScrollHighlight(headings) {
        // 移除之前的滚动监听
        window.removeEventListener('scroll', updateActiveOutlineItem);

        // 添加新的滚动监听
        function updateActiveOutlineItem() {
            const scrollPosition = window.scrollY + 120; // 考虑导航栏高度
            let activeHeading = null;

            // 找到当前可见的标题
            headings.forEach(heading => {
                const headingTop = heading.offsetTop;
                if (headingTop <= scrollPosition) {
                    activeHeading = heading;
                }
            });

            // 更新大纲链接的激活状态
            if (activeHeading) {
                document.querySelectorAll('.outline-link').forEach(link => {
                    if (link.getAttribute('href') === '#' + activeHeading.id) {
                        link.classList.add('active');
                    } else {
                        link.classList.remove('active');
                    }
                });
            }
        }

        // 初始执行一次，设置初始状态
        updateActiveOutlineItem();

        // 添加滚动监听
        window.addEventListener('scroll', updateActiveOutlineItem);
    }

    // 初始化分类列表
    initCategoriesList(NOTES_CONFIG, categoriesList);
});