(function () {

  const noticeBar = document.getElementById("noticeBar");
  const ticker = document.getElementById("noticeTicker");

  if (!noticeBar || !ticker) return;

  fetch('./notice.json?v=' + Date.now())
    .then(res => res.json())
    .then(data => {

      if (data.status !== "on") return;

      ticker.innerHTML = "";

      // add content
      for(let i=0;i<3;i++){
        data.notices.forEach(n=>{
          const a=document.createElement("a");
          a.href=n.link;
          a.target="_blank";
          a.rel="noopener noreferrer";
          a.textContent=n.text;

          const s=document.createElement("span");
          s.className="sep";
          s.textContent=" | ";

          ticker.appendChild(a);
          ticker.appendChild(s);
        });
      }

      // 🔥 KEY FIX: start animation AFTER first paint
      requestAnimationFrame(()=>{
        setTimeout(()=>{
          ticker.classList.add("run");
        }, 300); // 0.3 sec only
      });

    });

})();
