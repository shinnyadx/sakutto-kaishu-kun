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

// スクロールで .section-title に .visible を付ける
document.addEventListener('DOMContentLoaded', function() {
    function showOnScroll() {
        document.querySelectorAll('.section-title').forEach(function(title) {
            const rect = title.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.83) {
                title.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', showOnScroll);
    showOnScroll(); // 初回実行
});

document.querySelectorAll('.review-card').forEach(card => {
  card.addEventListener('click', function(e) {
    const ripple = document.createElement('span');
    ripple.className = 'ripple';
    ripple.style.left = `${e.offsetX}px`;
    ripple.style.top = `${e.offsetY}px`;
    this.appendChild(ripple);
    setTimeout(() => ripple.remove(), 800);
  });
});

// 改善版JavaScript
document.addEventListener('DOMContentLoaded', function() {
  const el = document.querySelector('.problem-text');
  if (!el) return;

  function showProblemText() {
    const rect = el.getBoundingClientRect();
    // より緩やかな表示条件に変更
    if (rect.top < window.innerHeight * 0.9) {
      el.classList.add('visible');
      window.removeEventListener('scroll', showProblemText);
    }
  }

  // Intersection Observerを使用したより確実な方法
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(el);
  } else {
    // フォールバックとして従来の方法を使用
    window.addEventListener('scroll', showProblemText);
    showProblemText(); // 初期チェック
  }
});