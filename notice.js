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

      // Clear default text
      ticker.innerHTML = "";

      // Add notices multiple times (smooth + slow)
      for (let i = 0; i < 6; i++) {
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

      // 🔥 IMPORTANT: start animation AFTER content is ready
      ticker.classList.add("run");

      noticeBar.style.display = "block";
    })
    .catch(() => {
      noticeBar.style.display = "none";
    });

})();
