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
// script.jsの一番下でOK
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const logo = document.getElementById('site-logo');
        if (logo) logo.classList.add('visible');
    }, 400);
});

// ハンバーガー・ドロワーの制御
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const drawer = document.getElementById('drawerMenu');
    const overlay = document.getElementById('drawerOverlay');
    // 開閉イベント
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        drawer.classList.toggle('open');
        overlay.classList.toggle('open');
    });
    // オーバーレイ or メニュークリックで閉じる
    overlay.addEventListener('click', function() {
        hamburger.classList.remove('active');
        drawer.classList.remove('open');
        overlay.classList.remove('open');
    });
    drawer.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', function(e) {
            hamburger.classList.remove('active');
            drawer.classList.remove('open');
            overlay.classList.remove('open');
            // スムーズスクロールは既存のJSがあればそちらでOK
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        const h2 = document.querySelector('.hero-animate');
        if (h2) h2.classList.add('visible');
    }, 320);  // 0.32秒ディレイ。好みで調整可
});

document.querySelectorAll('.hero-features li').forEach(li => {
    li.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});
