<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>IGNOU MSc Assignments (Free) | Course-wise Solutions</title>
<meta name="description" content="IGNOU MSc 1st and 2nd Year assignment guidance with subject-wise and course-wise solutions.">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<style>
body{
  margin:0;
  font-family:'Segoe UI', Roboto, Arial, sans-serif;
  background:#f6f8fb;
  color:#222;
}

/* HERO */
.hero{
  background:linear-gradient(135deg,#1e3c72,#2a5298);
  color:#fff;
  padding:70px 20px;
  text-align:center;
}
.hero h1{font-size:38px;margin-bottom:10px;}
.hero p{font-size:18px;max-width:900px;margin:auto;}

/* SECTION */
.assignment-section{padding:60px 20px;}
.assignment-section h2{
  text-align:center;
  font-size:30px;
  margin-bottom:40px;
}

/* GRID */
.subject-grid{
  display:grid;
  grid-template-columns:repeat(auto-fit,minmax(300px,1fr));
  gap:28px;
  max-width:1200px;
  margin:auto;
}

/* CARD */
.subject-card{
  background:#fff;
  border-radius:14px;
  padding:26px 22px;
  box-shadow:0 10px 30px rgba(0,0,0,.08);
}
.subject-card h3{
  text-align:center;
  margin-bottom:15px;
  font-size:20px;
}

/* COURSE LIST */
.course-list{margin-top:10px;}
.course-item{
  display:flex;
  justify-content:space-between;
  padding:8px 0;
  border-bottom:1px dashed #e5e7eb;
  font-size:15px;
}
.course-item:last-child{border-bottom:none;}
.course-item span{font-weight:600;}
.course-item a{
  color:#1e88e5;
  font-weight:600;
  text-decoration:none;
}
.course-item a:hover{text-decoration:underline;}

/* FOOTER */
.footer{
  background:#0f172a;
  color:#cbd5e1;
  padding:40px 20px;
  margin-top:70px;
  text-align:center;
  font-size:14px;
}
</style>
</head>

<body>

<!-- HERO -->
<section class="hero">
  <h1>IGNOU MSc Assignments (Free)</h1>
  <p>Auto-generated Subject-wise & Course-wise Assignment Guidance</p>
</section>

<!-- CONTAINERS -->
<section class="assignment-section">
  <h2>IGNOU MSc 1st Year Assignments</h2>
  <div class="subject-grid" id="msc-1st"></div>
</section>

<section class="assignment-section">
  <h2>IGNOU MSc 2nd Year Assignments</h2>
  <div class="subject-grid" id="msc-2nd"></div>
</section>

<footer class="footer">
  © 2026 IGNOU Assignments Hub · All Rights Reserved
</footer>

<!-- ================= JSON DATA ================= -->
<script>
const mscData = {
  "1stYear": [
    {
      "name": "MSc Zoology",
      "year": "1st Year",
      "baseUrl": "/msc/zoology/",
      "codes": ["MZO-001", "MZO-002", "MZO-003"]
    },
    {
      "name": "MSc Environmental Science",
      "year": "1st Year",
      "baseUrl": "/msc/environment/",
      "codes": ["MEV-011", "MEV-012", "MEV-013", "MEV-014", "MEV-015", "MEV-016"]
    },
    {
  "name":"MSc Geography",
  "year":"1st Year",
  "baseUrl":"/msc/geography/",
  "codes":["MGP-001","MGP-002","MGP-003"]
    }
  ],
  "2ndYear": [
    {
      "name": "MSc Zoology",
      "year": "2nd Year",
      "baseUrl": "/msc/zoology/",
      "codes": ["MZO-004", "MZO-005", "MZO-006"]
    },
    {
      "name": "MSc Environmental Science",
      "year": "2nd Year",
      "baseUrl": "/msc/environment/",
      "codes": ["MEV-017", "MEV-018", "MEV-019"]
    }
  ]
};
</script>

<!-- ================= AUTO GENERATOR SCRIPT ================= -->
<script>
function generateSubjects(data, targetId){
  const container = document.getElementById(targetId);

  data.forEach(subject => {
    let html = `
      <div class="subject-card">
        <h3>${subject.name} – ${subject.year}</h3>
        <div class="course-list">
    `;

    subject.codes.forEach(code => {
      const slug = code.toLowerCase();
      html += `
        <div class="course-item">
          <span>${code}</span>
          <a href="${subject.baseUrl}${slug}.html">View</a>
        </div>
      `;
    });

    html += `
        </div>
      </div>
    `;

    container.insertAdjacentHTML("beforeend", html);
  });
}

generateSubjects(mscData["1stYear"], "msc-1st");
generateSubjects(mscData["2ndYear"], "msc-2nd");
</script>

</body>
</html>
