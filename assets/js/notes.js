import {NOTES_CONFIG} from './notes-config.js';

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', function () {
    // 获取DOM元素
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const navLinks = document.getElementById('navLinks');
    const navLinksItems = document.querySelectorAll('.nav-link');
    const categoriesList = document.getElementById('categoriesList');
    const noteContent = document.getElementById('noteContent');

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

        // 显示加载状态
        noteContent.innerHTML = `
        <div class="loading-indicator">
            <i class="fas fa-spinner fa-spin"></i> 加载中...
        </div>
    `;

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

                // 渲染 Mermaid 图表
                const mermaidBlocks = container.querySelectorAll('pre code.language-mermaid');
                const mermaidPromises = [];

                mermaidBlocks.forEach((block) => {
                    const parent = block.parentNode;
                    const graphDefinition = block.textContent;

                    // 创建临时容器
                    const tempDiv = document.createElement('div');
                    tempDiv.className = 'mermaid-container';
                    parent.parentNode.replaceChild(tempDiv, parent);

                    // 渲染Mermaid并保存Promise
                    const renderMermaid = () => {
                        return mermaid.mermaidAPI.render(
                            'mermaid-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9),
                            graphDefinition
                        )
                            .then(svgCode => {
                                tempDiv.innerHTML = svgCode.svg;
                            })
                            .catch(error => {
                                if (error.message.includes('already registered')) {
                                    // 重置 Mermaid 环境
                                    mermaid.mermaidAPI.reset();
                                    mermaid.mermaidAPI.initialize({
                                        startOnLoad: false,
                                        flowchart: { useMaxWidth: true, htmlLabels: true },
                                        securityLevel: 'loose'
                                    });
                                    // 重新尝试渲染
                                    return renderMermaid();
                                }
                                console.error('Mermaid渲染错误:', error);
                                tempDiv.innerHTML = `<div class="mermaid-error">图表渲染错误: ${error.message}</div>`;
                            });
                    };

                    mermaidPromises.push(renderMermaid());
                });

                // 代码高亮
                Promise.all(mermaidPromises).then(() => {
                    // 代码高亮（排除mermaid代码块）
                    container.querySelectorAll('pre code:not(.language-mermaid)').forEach((block) => {
                        hljs.highlightElement(block);
                    });
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

    // 导航栏滚动效果
    window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
            header.style.padding = '10px 0';
        } else {
            header.classList.remove('scrolled');
            header.style.padding = '15px 0';
        }
    });

    // 移动端菜单切换
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

    // 导航链接点击关闭菜单（移动端）
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

    // 平滑滚动
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

    // 初始化分类列表
    initCategoriesList(NOTES_CONFIG, categoriesList);
});