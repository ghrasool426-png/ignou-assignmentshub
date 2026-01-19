document.addEventListener("DOMContentLoaded", function () {

  const linkMap = [
    { keyword: "IGNOU admission", url: "/ignou-admission-2026.html" },
    { keyword: "IGNOU assignment", url: "/ignou-assignment-submission-last-date.html" },
    { keyword: "IGNOU re-registration", url: "/ignou-re-registration-january-2026.html" },
    { keyword: "IGNOU exam form", url: "/ignou-exam-form.html" },
    { keyword: "IGNOU result", url: "/ignou-result-not-showing.html" }
  ];

  const content = document.querySelector("main");
  if (!content) return;

  linkMap.forEach(item => {
    const regex = new RegExp(`\\b(${item.keyword})\\b`, "i");

    content.innerHTML = content.innerHTML.replace(regex, function(match){
      return `<a href="${item.url}">${match}</a>`;
    });
  });

});
