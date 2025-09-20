// generateNewsPages.js
const fs = require('fs');
const path = require('path');

// Load news.json
const newsFile = path.join(__dirname, 'news.json');
let newsData = JSON.parse(fs.readFileSync(newsFile, 'utf-8'));

// Sort newest first
newsData.sort((a, b) => new Date(b.date) - new Date(a.date));

// Function to create a URL-friendly slug from title
function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

// HTML template for each news page
function createNewsPage(newsItem) {
  const slug = slugify(newsItem.title);
  const paragraphs = newsItem.description.split('\n\n').map(p => `<p>${p}</p>`).join('\n');
  const shortDesc = newsItem.description.split('\n\n')[0];

  return `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${newsItem.title} – Kyoga TV</title>
<meta name="description" content="${shortDesc}">
<meta property="og:title" content="${newsItem.title}">
<meta property="og:description" content="${shortDesc}">
<meta property="og:image" content="${newsItem.image}">
<meta property="og:type" content="article">
<meta name="twitter:card" content="summary_large_image">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&family=Roboto+Slab:wght@400;600&display=swap" rel="stylesheet">
<style>
body { font-family:'Poppins', sans-serif; background:#f2f2f2; color:#333; line-height:1.6; padding:20px; }
.single-article { max-width:800px; margin:0 auto; background:#fff; padding:20px; border-radius:12px; box-shadow:0 4px 15px rgba(0,0,0,0.1); }
.single-article img { width:100%; border-radius:12px; margin-bottom:15px; }
.single-article h2 { font-family:'Roboto Slab', serif; color:#1d1147; margin-bottom:15px; }
.single-article p { margin-bottom:15px; }
a { color:#f0ac45; text-decoration:none; }
a:hover { color:#1d1147; }
</style>
</head>
<body>
<div class="single-article">
<img src="${newsItem.image}" alt="${newsItem.title}">
<h2>${newsItem.title}</h2>
${paragraphs}
<p><a href="news.html">← Back to News</a></p>
</div>
</body>
</html>
`;
}

// Generate pages
newsData.forEach(item => {
  const slug = slugify(item.title);
  const fileName = `news-${slug}.html`;
  const filePath = path.join(__dirname, fileName);
  fs.writeFileSync(filePath, createNewsPage(item), 'utf-8');
  console.log(`Generated: ${fileName}`);
});

console.log('All news pages generated successfully!');
