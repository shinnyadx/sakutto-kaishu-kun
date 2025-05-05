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
