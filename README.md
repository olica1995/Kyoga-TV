<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Kyoga TV Live</title>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap" rel="stylesheet" />
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }

    body {
      font-family: 'Poppins', sans-serif;
      background-color: #f2f2f2;
      color: #333;
      line-height: 1.6;
    }

    header {
      background-color: #fff;
      color: #333;
      padding: 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid #ddd;
    }

    header img {
      height: 50px;
    }

    .datetime {
      font-size: 14px;
      color: #555;
    }

    nav.nav {
      background-color: #1d1147;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      flex-wrap: wrap;
    }

    .logo h2 a {
      color: #f0ac45;
      text-decoration: none;
      font-weight: 700;
      font-size: 24px;
    }

    ul.nav-links {
      list-style: none;
      display: flex;
      flex-wrap: wrap;
    }

    ul.nav-links li {
      margin: 0 10px;
    }

    ul.nav-links li a {
      color: #ffffff;
      font-weight: 600;
      font-size: 16px;
      padding: 10px 15px;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.3s ease, color 0.3s ease;
    }

    ul.nav-links li a:hover {
      background-color: #f0ac45;
      color: #1d1147;
    }

    #menu-toggle {
      display: none;
      font-size: 28px;
      color: #fff;
      background: none;
      border: none;
      cursor: pointer;
    }

    main {
      padding: 40px 20px;
      max-width: 1000px;
      margin: auto;
    }

    .radio-player, .video-section {
      background: #f0f3f2;
      padding: 20px;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
      margin-bottom: 30px;
      text-align: center;
    }

    .radio-player h2 {
      margin-bottom: 15px;
    }

    .radio-player audio {
      width: 100%;
    }

    .news-ticker {
      width: 100%;
      background-color: #8bc2ee;
      color: white;
      overflow: hidden;
      white-space: nowrap;
      padding: 10px 0;
      box-shadow: 0 2px 4px rgba(39, 3, 245, 0.2);
      margin: 30px 0;
      font-size: 16px;
      font-weight: bold;
      position: relative;
    }

    .ticker-content {
      display: inline-block;
      padding-left: 100%;
      animation: ticker 20s linear infinite;
    }

    @keyframes ticker {
      0% { transform: translateX(0%); }
      100% { transform: translateX(-100%); }
    }

    iframe {
      width: 100%;
      height: 450px;
      border-radius: 10px;
      border: none;
    }

    footer {
      background-color: #1d1147;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .social-links a {
      color: #f0ac45;
      margin: 0 10px;
      text-decoration: none;
    }

    .social-links a:hover {
      text-decoration: underline;
    }

    @media (max-width: 768px) {
      ul.nav-links {
        flex-direction: column;
        width: 100%;
        display: none;
        margin-top: 10px;
      }

      ul.nav-links.show {
        display: flex;
      }

      ul.nav-links li {
        margin: 10px 0;
      }

      #menu-toggle {
        display: block;
      }

      iframe {
        height: 250px;
      }
    }
  </style>
</head>
<body>

  <header>
    <img src="KYOGA TV.jpg" alt="Kyoga TV Logo" />
    <div class="datetime" id="datetime">Loading date & time...</div>
  </header>

  <nav class="nav">
    <div class="logo">
      <h2><a href="#">Kyoga TV</a></h2>
    </div>
    <button id="menu-toggle">&#9776;</button>
    <ul class="nav-links" id="nav-links">
      <li><a href="home.html">Home</a></li>
      <li><a href="about.html">About</a></li>
      <li><a href="our team.html">Our Team</a></li>
      <li><a href="our contacts.html">Our Contacts</a></li>
      <li><a href="Program Line Up.html">Program Line Up</a></li>
      <li><a href="live.html">Live</a></li>
    </ul>
  </nav>

  <main>
    <!-- Olix Radio -->
    <div class="radio-player">
      <h2>🎧 Olix Radio – Listen Live</h2>
      <img src="ChatGPT Image Jul 5, 2025, 10_01_33 PM.png" alt="Olix Radio" style="width: 300px; border-radius: 10px; margin-bottom: 15px;">
      <audio autoplay controls>
        <source src="https://stream.zeno.fm/4mb1wxhrefhvv" type="audio/mpeg">
        Your browser does not support the audio element.
      </audio>
    </div>

    <!-- News Ticker -->
    <div class="news-ticker">
      <div class="ticker-content">
        🎙️ We Are Here To Promote Music and Businesses | 📺 To Advertise here call us on 0789223294| 🎥 Please share this website to friends and family  | 🔴 Tune in Live on YouTube, Facebook & TikTok!
      </div>
    </div>

    <!-- YouTube Live -->
    <div class="video-section">
      <h2>📡 Kyoga TV – On YouTube</h2>
      <iframe src="https://www.youtube.com/embed/2QrzgMBYIgI?si=6R-M3gHifN1rFEth" allow="autoplay; encrypted-media" allowfullscreen></iframe>
    </div>
  </main>

  <footer>
    <div class="social-links">
      <a href="https://facebook.com/kyogatv" target="_blank">Facebook</a> |
      <a href="https://x.com/kyogatv" target="_blank">X (Twitter)</a> |
      <a href="https://tiktok.com/@kyogatv" target="_blank">TikTok</a> |
      <a href="https://youtube.com/@kyogatv" target="_blank">YouTube</a>
    </div>
    <p><a href="mailto:info@kyogatv.com" style="color:white;">info@kyogatv.com</a> | <a href="https://wa.me/256789223294" style="color:white;" target="_blank">WhatsApp: +256789223294</a></p>
    <p>&copy; 2025 Kyoga TV. All rights reserved.</p>
  </footer>

  <script>
    // Date & Time
    function updateDateTime() {
      const now = new Date();
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      document.getElementById('datetime').textContent = now.toLocaleString('en-US', options);
    }
    updateDateTime();
    setInterval(updateDateTime, 1000);

    // Mobile menu toggle
    const toggleBtn = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');
    toggleBtn.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  </script>
</body>
</html>
