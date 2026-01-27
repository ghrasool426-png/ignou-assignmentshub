// Simple, guaranteed solution - text visible IMMEDIATELY
document.addEventListener('DOMContentLoaded', function() {
    const tickerWrap = document.querySelector('.ticker-wrap');
    const defaultText = document.querySelector('.default-text');
    const ticker = document.querySelector('.ticker');
    
    // Content array
    const items = [
        "🔥 Important: System update completed",
        "🎉 New feature: Enhanced security",
        "⚠️ Alert: Maintenance scheduled",
        "📢 News: Monthly report available"
    ];
    
    // STEP 1: Show default text IMMEDIATELY
    if (defaultText) {
        defaultText.style.display = 'inline-block';
    }
    
    // STEP 2: Build ticker content with duplicates
    let html = '';
    for (let i = 0; i < 8; i++) { // Lots of duplicates
        items.forEach((item, idx) => {
            html += `<a href="#">${item}</a>`;
            if (idx < items.length - 1 || i < 7) {
                html += '<span class="sep">|</span>';
            }
        });
    }
    
    ticker.innerHTML = html;
    
    // STEP 3: Wait ONE frame, then animate
    requestAnimationFrame(() => {
        // Get dimensions
        const tickerWidth = ticker.offsetWidth;
        const firstItem = ticker.querySelector('a');
        const segmentWidth = firstItem ? firstItem.offsetWidth * items.length : 500;
        
        // Hide default text
        if (defaultText) {
            defaultText.style.display = 'none';
        }
        ticker.style.display = 'inline-flex';
        
        // Set starting position - FULLY VISIBLE
        ticker.style.transform = 'translateX(0)';
        
        // Start animation with requestAnimationFrame
        let position = 0;
        let lastTime = null;
        const speed = 15; // pixels per second (adjust for speed)
        
        function animate(currentTime) {
            if (!lastTime) lastTime = currentTime;
            
            const delta = currentTime - lastTime;
            lastTime = currentTime;
            
            // Move based on speed
            position -= (speed * delta) / 1000;
            
            // Reset when we've moved one segment
            if (Math.abs(position) >= segmentWidth) {
                position += segmentWidth;
            }
            
            ticker.style.transform = `translateX(${position}px)`;
            
            requestAnimationFrame(animate);
        }
        
        // START ANIMATION IMMEDIATELY - NO DELAY
        requestAnimationFrame(animate);
    });
});
