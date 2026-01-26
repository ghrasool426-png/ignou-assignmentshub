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

      function addNotices() {
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

      // duplicate for smooth slow scroll
      addNotices();
      addNotices();

      const speed = 30; // 🔥 slow speed (change 20–40)
      const width = ticker.scrollWidth / 2;
      const duration = width / speed;

      ticker.style.animationDuration = duration + "s";
      noticeBar.style.display = "block";
    })
    .catch(() => {
      noticeBar.style.display = "none";
    });

})();
