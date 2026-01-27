(function(){

  const ticker = document.getElementById("noticeTicker");
  const noticeBar = document.getElementById("noticeBar");
  if(!ticker || !noticeBar) return;

  let pos = 0;
  let speed = 0.3; // 👈 slow speed (0.2–0.5)

  fetch('/notice.json?v=' + Date.now())
    .then(r => r.json())
    .then(data => {

      if(data.status !== "on") return;

      ticker.innerHTML = "";

      // repeat content to make loop
      for(let i=0;i<3;i++){
        data.notices.forEach(n=>{
          const a = document.createElement("a");
          a.href = n.link;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = n.text;

          const s = document.createElement("span");
          s.className = "sep";
          s.textContent = " | ";

          ticker.appendChild(a);
          ticker.appendChild(s);
        });
      }

      noticeBar.style.display = "block";

      requestAnimationFrame(move);
    });

  function move(){
    pos -= speed;
    ticker.style.transform = `translateX(${pos}px)`;

    // reset when fully gone
    if(Math.abs(pos) > ticker.scrollWidth / 2){
      pos = 0;
    }
    requestAnimationFrame(move);
  }

})();
