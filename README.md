<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Kyoga TV Live</title>
  <style>
    * {
      box-sizing: border-box;
    }

    body {
      margin: 0;
      font-family: Arial, sans-serif;
      background-color: #f0f0f0;
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    header {
      background-color: #003366;
      color: white;
      padding: 15px 20px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    header img {
      height: 50px;
    }

    .datetime {
      font-size: 14px;
    }

    main {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 30px 10px;
      text-align: center;
    }

    iframe {
      width: 80%;
      max-width: 800px;
      height: 450px;
      border: none;
    }

    footer {
      background-color: #003366;
      color: white;
      padding: 20px;
      text-align: center;
    }

    .social-links a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
    }

    .social-links a:hover {
      text-decoration: underline;
    }
  </style>
</head>
<body>

  <!-- Header -->
  <header>
    <img src="KYOGA TV.jpg" alt="Kyoga TV Logo">
    <div class="datetime" id="datetime">Loading date & time...</div>
  </header>

  <!-- Main Content -->
  <main>
    <h1>Kyoga TV </h1>

    <iframe 
      src="https://www.youtube.com/embed/PTCrQj4KXhA" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
      allowfullscreen>
    </iframe>
  </main><!-- Blog Section -->
<section id="blog" style="margin-top: 50px; width: 90%; max-width: 1000px;">
  <h2>Latest News & Updates</h2>

  <!-- Blog Post 1 -->
  <div style="display: flex; gap: 20px; margin-bottom: 40px; align-items: flex-start;">
    <img src="KYOGA TV.jpg" alt="Blog Image 1" style="width: 200px; height: auto; border-radius: 8px;">
    <div>
      <h3>Kyoga TV Launches New Program</h3>
      <p>We're excited to introduce our brand-new community segment focusing on youth innovation and local talent. Tune in every Friday at 7PM!</p>
    </div><!-- Blog Post -->
<div style="display: flex; gap: 20px; margin-bottom: 40px;">
  <img src="blog1.jpg" alt="Blog Image" style="width: 200px;">
  <div>
    <h3>New Program Launch</h3>
    <p>Kyoga TV is excited to launch a new youth-focused program every Friday at 7PM.</p>

    <!-- Share Links -->
    <p>Share this: 
      <a href="https://wa.me/?text=Check%20out%20this%20news%20on%20Kyoga%20TV:%20https://kyogatv.github.io/kyoga-tv/" target="_blank">WhatsApp</a> | 
      <a href="https://www.facebook.com/sharer/sharer.php?u=https://kyogatv.github.io/kyoga-tv/" target="_blank">Facebook</a> | 
      <a href="https://twitter.com/intent/tweet?text=Check%20this%20news%20from%20Kyoga%20TV&url=https://kyogatv.github.io/kyoga-tv/" target="_blank">Twitter</a>
    </p>
  </div>
</div>

  </div>

  <!-- Blog Post 2 -->
  <div style="display: flex; gap: 20px; margin-bottom: 40px; align-items: flex-start;">
    <img src="poster.jpg" alt="Blog Image 2" style="width: 200px; height: auto; border-radius: 8px;">
    <div>
      <h3>Inside Kyoga: Behind the Scenes</h3>
      <p>Ever wondered what goes on behind the scenes at Kyoga TV? Take a peek into the studio and meet the crew making it all happen.</p>
    </div>
  </div>
</section>


  <!-- Footer -->
  <footer>
    <div class="social-links">
      <a href="https://www.facebook.com/kyogatv" target="_blank">Facebook</a> |
      <a href="https://x.com/kyogatv" target="_blank">X Twitter</a> |
      <a href="https://www.tiktok.com/@kyogatv?" target="_blank">TikTok</a><p>
  <a href="mailto:info@kyogatv.com" style="color:white;">info@kyogatv.com</a> |
  <a href="https://wa.me/256789223294" target="_blank" style="color:white;">WhatsApp</a> |
  <a href="https://www.youtube.com/@kyogatv" target="_blank" style="color:white;">YouTube Channel</a>
</p>

    </div>
    <p>Contact us: <a href="olicafelix95@gmail.com" style="color:white;">info@kyogatv.com</a> | +256789223294</p>
    <p>&copy; 2025 Kyoga TV. All rights reserved.</p>
  </footer>

  <!-- JavaScript for Date and Time -->
  <script>
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
      };
      document.getElementById('datetime').innerText = now.toLocaleString('en-GB', options);
    }

    // Update every second
    setInterval(updateDateTime, 1000);
    updateDateTime();
  </script>

</body>
</html>

