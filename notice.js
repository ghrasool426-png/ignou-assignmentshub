class NoticeBarTicker {
  constructor() {
    this.container = document.querySelector('.ticker-wrap');
    this.ticker = document.querySelector('.ticker');
    this.defaultText = document.querySelector('.default-text');
    
    if (!this.ticker) return;
    
    this.init();
  }
  
  init() {
    // 1. First, show default text immediately
    if (this.defaultText) {
      this.defaultText.style.display = 'inline-block';
    }
    
    // 2. Clone content for seamless loop
    this.cloneContent();
    
    // 3. Wait for next frame to ensure DOM is ready
    requestAnimationFrame(() => {
      // 4. Calculate initial position (fully visible)
      const tickerWidth = this.ticker.offsetWidth;
      const containerWidth = this.container.offsetWidth;
      
      // 5. Hide default text
      if (this.defaultText) {
        this.defaultText.style.display = 'none';
      }
      
      // 6. Set initial position (fully visible)
      this.ticker.style.transform = 'translateX(0)';
      this.ticker.classList.add('initialized');
      
      // 7. Wait a tiny bit, then start animation
      setTimeout(() => {
        this.ticker.classList.add('animate');
      }, 50);
    });
  }
  
  cloneContent() {
    // Clone all children of the ticker
    const originalContent = this.ticker.innerHTML;
    // Append a separator and a duplicate
    this.ticker.innerHTML += '<span class="sep">|</span>' + originalContent;
  }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new NoticeBarTicker();
});

// Also initialize if page loads with content already ready
if (document.readyState === 'complete' || document.readyState === 'interactive') {
  setTimeout(() => new NoticeBarTicker(), 100);
}
