(function () {

  const noticeBar = document.getElementById("noticeBar");
  const ticker = document.getElementById("noticeTicker");

  if (!noticeBar || !ticker) return;

  fetch('./notice.json?v=' + Date.now())
    .then(res => res.json())
    .then(data => {

      if (data.status !== "on") {
        noticeBar.style.display = "none";
        return;
      }

      ticker.innerHTML = "";

      function addOnce() {
        data.notices.forEach(n => {
          const a = document.createElement("a");
          a.href = n.link;
          a.target = "_blank";
          a.rel = "noopener noreferrer";
          a.textContent = n.text;

          const sep = document.createElement("span");
          sep.className = "sep";
          sep.textContent = " | ";

          ticker.appendChild(a);
          ticker.appendChild(sep);
        });
      }

      // 🔁 ADD 4 TIMES (THIS IS THE REAL FIX)
      addOnce();
      addOnce();
      addOnce();
      addOnce();

      /* 🔥 TRUE SPEED CONTROL */
      const pixelsPerSecond = 15; // 👈 VERY SLOW (10–20 range)
      const totalWidth = ticker.scrollWidth / 2;
      const duration = totalWidth / pixelsPerSecond;

      ticker.style.animationDuration = duration + "s";
      noticeBar.style.display = "block";
    })
    .catch(() => {
      noticeBar.style.display = "none";
    });

})();
