document.addEventListener('DOMContentLoaded', function() {
    // スムーズスクロール
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // FAQアコーディオン
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // フォーム送信
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // ここでフォームデータを処理（実際にはサーバーに送信）
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData.entries());
            console.log('フォーム送信:', formObject);
            
            // 送信後の処理（モーダル表示など）
            alert('お問い合わせありがとうございます。担当者よりご連絡いたします。');
            this.reset();
        });
    }

    // ヘッダースクロール時のスタイル変更
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '10px 0';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            header.style.padding = '15px 0';
        }
    });
});

// ヘッダーの高さに応じてヒーローセクションのpaddingを動的に調整
function adjustHeroPadding() {
    if (window.innerWidth <= 768) {
        const header = document.querySelector('.header');
        const hero = document.querySelector('.hero');
        if (header && hero) {
            const headerHeight = header.offsetHeight;
            hero.style.paddingTop = `${headerHeight + 15}px`;
        }
    }
}

// ページ読み込み時とリサイズ時に実行
window.addEventListener('load', function() {
    adjustHeroPadding();
    
    // 既存のDOMContentLoaded処理をここに移動
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 既存のFAQアコーディオン処理
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            item.classList.toggle('active');
        });
    });

    // 既存のフォーム処理
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const formData = new FormData(this);
            const formObject = Object.fromEntries(formData.entries());
            console.log('フォーム送信:', formObject);
            alert('お問い合わせありがとうございます。担当者よりご連絡いたします。');
            this.reset();
        });
    }

    // 既存のヘッダースクロール処理
    window.addEventListener('scroll', function() {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.9)';
            header.style.padding = '10px 0';
        } else {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
            header.style.padding = '15px 0';
        }
    });
});

// リサイズ時にも実行
window.addEventListener('resize', adjustHeroPadding);

// ヘッダーの高さに応じてスペーサーを動的に調整
function adjustHeaderSpacer() {
    const header = document.querySelector('.header');
    const spacer = document.querySelector('.header-spacer');
    if (header && spacer) {
        spacer.style.height = `${header.offsetHeight}px`;
    }
}

// ページ読み込み時とリサイズ時に実行
window.addEventListener('load', adjustHeaderSpacer);
window.addEventListener('resize', adjustHeaderSpacer);
