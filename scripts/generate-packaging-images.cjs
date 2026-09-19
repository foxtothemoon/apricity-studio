const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const aquaArenaHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 1000px;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      overflow: hidden;
    }
    .container {
      width: 1200px;
      height: 1000px;
      position: relative;
      background: #ffffff;
    }
  </style>
</head>
<body>
  <div class="container">
    <svg width="1200" height="1000" viewBox="0 0 1200 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Ocean Gradients -->
        <linearGradient id="oceanSurface" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#7dd3fc" />
          <stop offset="40%" stop-color="#38bdf8" />
          <stop offset="80%" stop-color="#0284c7" />
          <stop offset="100%" stop-color="#0369a1" />
        </linearGradient>

        <linearGradient id="deepOcean" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#38bdf8" />
          <stop offset="35%" stop-color="#0284c7" />
          <stop offset="70%" stop-color="#075985" />
          <stop offset="90%" stop-color="#0c4a6e" />
          <stop offset="100%" stop-color="#1c1917" />
        </linearGradient>

        <linearGradient id="sunbeams" x1="20%" y1="0%" x2="60%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.45" />
          <stop offset="30%" stop-color="#bae6fd" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0" />
        </linearGradient>

        <linearGradient id="coralGlow" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#ea580c" />
          <stop offset="50%" stop-color="#f43f5e" />
          <stop offset="80%" stop-color="#fda4af" />
          <stop offset="100%" stop-color="#38bdf8" />
        </linearGradient>

        <radialGradient id="bubbleGrad" cx="35%" cy="35%" r="65%">
          <stop offset="0%" stop-color="#ffffff" stop-opacity="0.9" />
          <stop offset="40%" stop-color="#e0f2fe" stop-opacity="0.5" />
          <stop offset="80%" stop-color="#38bdf8" stop-opacity="0.2" />
          <stop offset="100%" stop-color="#0284c7" stop-opacity="0.7" />
        </radialGradient>

        <!-- Clip Path for the box dieline -->
        <clipPath id="dielineClip">
          <path d="
            M 245 300
            L 245 700
            L 288 700
            L 288 860 Q 288 865 293 865 L 490 865 Q 495 865 495 860 L 495 780
            L 600 780 L 620 700
            L 720 700 L 740 780 L 845 780 L 845 700
            L 950 700
            L 950 300
            L 935 220 L 845 220 L 845 300
            L 825 300 L 825 145 Q 825 140 820 140 L 625 140 Q 620 140 620 145 L 620 300
            L 515 220 L 495 220 L 495 300
            L 288 300
            L 288 300
            L 245 300 Z
          " />
        </clipPath>
      </defs>

      <!-- DIE-CUT NET OUTLINE & ARTWORK -->
      <!-- Main artwork group -->
      <g>
        <!-- Continuous Underwater Panorama spanning panels -->
        <!-- Glue flap: x:245 to 288 -->
        <polygon points="288,300 245,315 245,685 288,700" fill="#f8fafc" stroke="#52525b" stroke-width="1.2" />
        
        <!-- Main box body: x:288 to 950, y:300 to 700 -->
        <!-- Panel 1 (Left window panel): 288 to 495 (w=207) -->
        <!-- Panel 2 (Back panel): 495 to 620 (w=125) -->
        <!-- Panel 3 (Front main panel): 620 to 827 (w=207) -->
        <!-- Panel 4 (Right panel): 827 to 950 (w=123) -->

        <!-- Ocean backdrop for panels -->
        <rect x="288" y="300" width="662" height="400" fill="url(#deepOcean)" />

        <!-- Sunbeam rays in water -->
        <polygon points="400,300 480,300 560,700 420,700" fill="url(#sunbeams)" />
        <polygon points="680,300 770,300 890,700 740,700" fill="url(#sunbeams)" />
        <polygon points="320,300 370,300 440,650 370,650" fill="url(#sunbeams)" opacity="0.7" />

        <!-- Coral Reef Structures (Seafloor) -->
        <!-- Panel 1 seafloor & corals -->
        <path d="M 288,580 Q 340,540 380,590 T 450,560 T 495,600 L 495,700 L 288,700 Z" fill="#b45309" opacity="0.9" />
        <path d="M 288,620 Q 350,580 410,630 T 495,640 L 495,700 L 288,700 Z" fill="#9a3412" />
        <path d="M 330,700 L 330,620 Q 360,590 390,620 L 400,700 Z" fill="#ea580c" />

        <!-- Sea fan corals (pink & orange branching) -->
        <g stroke="#f43f5e" stroke-width="2.5" fill="none" opacity="0.85">
          <path d="M 460,650 Q 470,580 450,530 Q 430,490 410,470" />
          <path d="M 460,620 Q 480,560 500,520" />
          <path d="M 450,580 Q 420,540 390,520" />
          <path d="M 440,540 Q 410,510 380,490" />
          <path d="M 455,510 Q 470,480 480,450" />
        </g>
        <g stroke="#fda4af" stroke-width="1.5" fill="none" opacity="0.9">
          <path d="M 470,640 Q 485,570 475,520 Q 460,480 430,460" />
          <path d="M 475,560 Q 510,510 520,470" />
          <path d="M 440,520 Q 410,480 390,460" />
        </g>

        <!-- Panel 2 & 3 corals (center & front reef) -->
        <path d="M 495,620 Q 550,530 620,570 T 700,540 T 780,560 T 827,590 L 827,700 L 495,700 Z" fill="#c2410c" />
        <path d="M 520,640 Q 580,570 650,610 T 740,590 T 827,620 L 827,700 L 520,700 Z" fill="#831843" />
        <path d="M 680,700 Q 720,600 780,630 T 827,650 L 827,700 Z" fill="#ea580c" />

        <!-- Large branching pink sea fan in front panel -->
        <g stroke="#fb7185" stroke-width="3" fill="none" opacity="0.9">
          <path d="M 660,680 Q 640,590 600,520 Q 560,460 520,440" />
          <path d="M 650,630 Q 610,570 580,510" />
          <path d="M 630,580 Q 590,520 550,480" />
          <path d="M 640,650 Q 670,580 690,530" />
          <path d="M 650,590 Q 690,530 710,480" />
        </g>
        <g stroke="#fecdd3" stroke-width="1.8" fill="none" opacity="0.95">
          <path d="M 660,670 Q 630,580 590,510 Q 550,450 510,430" />
          <path d="M 620,560 Q 580,500 540,460" />
          <path d="M 650,610 Q 680,550 710,500" />
        </g>

        <!-- Right panel reef continuation -->
        <path d="M 827,590 Q 880,550 950,570 L 950,700 L 827,700 Z" fill="#9a3412" />
        <path d="M 840,620 Q 900,580 950,610 L 950,700 L 840,700 Z" fill="#7c2d12" />

        <!-- Marine Fish Swimming -->
        <!-- Fish school 1 -->
        <g fill="#fef08a" opacity="0.85">
          <ellipse cx="780" cy="380" rx="9" ry="3" />
          <polygon points="788,380 796,376 796,384" />
          <ellipse cx="800" cy="395" rx="7" ry="2.5" />
          <polygon points="806,395 813,392 813,398" />
          <ellipse cx="760" cy="365" rx="8" ry="3" />
          <polygon points="767,365 774,361 774,369" />
          <ellipse cx="740" cy="390" rx="6" ry="2" />
          <polygon points="745,390 751,387 751,393" />
          <ellipse cx="820" cy="370" rx="9" ry="3.5" />
          <polygon points="828,370 836,366 836,374" />
        </g>
        <!-- Fish school in side panel -->
        <g fill="#fed7aa" opacity="0.75">
          <ellipse cx="360" cy="420" rx="6" ry="2" />
          <polygon points="365,420 371,417 371,423" />
          <ellipse cx="380" cy="435" rx="7" ry="2.5" />
          <polygon points="386,435 393,432 393,438" />
          <ellipse cx="340" cy="410" rx="5" ry="2" />
          <polygon points="344,410 349,408 349,412" />
        </g>

        <!-- 3D Refractive Water Bubbles -->
        <!-- Front panel bubbles -->
        <circle cx="690" cy="345" r="14" fill="url(#bubbleGrad)" stroke="#ffffff" stroke-width="0.8" opacity="0.9" />
        <ellipse cx="686" cy="341" rx="4" ry="2" fill="#ffffff" opacity="0.9" />

        <circle cx="790" cy="355" r="16" fill="url(#bubbleGrad)" stroke="#ffffff" stroke-width="0.8" opacity="0.85" />
        <ellipse cx="785" cy="350" rx="5" ry="2.5" fill="#ffffff" opacity="0.9" />

        <circle cx="735" cy="330" r="9" fill="url(#bubbleGrad)" stroke="#ffffff" stroke-width="0.6" opacity="0.8" />
        <circle cx="760" cy="370" r="11" fill="url(#bubbleGrad)" stroke="#ffffff" stroke-width="0.7" opacity="0.8" />

        <!-- Giant Glass Dewdrop / Caustic bubble near coral -->
        <ellipse cx="612" cy="640" rx="34" ry="48" transform="rotate(-30 612 640)" fill="url(#bubbleGrad)" stroke="#e0f2fe" stroke-width="1.2" opacity="0.95" />
        <ellipse cx="598" cy="624" rx="12" ry="5" transform="rotate(-30 598 624)" fill="#ffffff" opacity="0.9" />

        <ellipse cx="828" cy="600" rx="26" ry="38" transform="rotate(25 828 600)" fill="url(#bubbleGrad)" stroke="#e0f2fe" stroke-width="1.2" opacity="0.95" />
        <ellipse cx="820" cy="588" rx="8" ry="3.5" transform="rotate(25 820 588)" fill="#ffffff" opacity="0.9" />

        <!-- PANEL 1: DIE-CUT DIE CUT WINDOW (Left Panel) -->
        <!-- Clear transparent window cutout with soft white shine inside -->
        <rect x="315" y="340" width="150" height="320" rx="4" fill="#ffffff" fill-opacity="0.65" stroke="#bae6fd" stroke-width="1.5" />
        <line x1="315" y1="340" x2="465" y2="660" stroke="#ffffff" stroke-width="1.5" opacity="0.4" />
        <text x="390" y="505" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="11" fill="#0369a1" letter-spacing="2" font-weight="600" opacity="0.8">
          CLEAR DIE-CUT WINDOW
        </text>

        <!-- PANEL 3: FRONT MAIN LOGO & BRANDING -->
        <!-- Central white square frame box for AQUA ARENA -->
        <rect x="635" y="420" width="180" height="170" fill="none" stroke="#ffffff" stroke-width="3.5" />
        
        <!-- Typography: AQUA ARENA -->
        <text x="725" y="485" text-anchor="middle" font-family="'Cinzel', 'Trajan Pro', 'Bodoni MT', 'Didot', 'Georgia', serif" font-size="34" font-weight="700" fill="#ffffff" letter-spacing="8">
          AQUA
        </text>
        <text x="725" y="540" text-anchor="middle" font-family="'Cinzel', 'Trajan Pro', 'Bodoni MT', 'Didot', 'Georgia', serif" font-size="34" font-weight="700" fill="#ffffff" letter-spacing="6">
          ARENA
        </text>

        <!-- Sub-brand: LA PEARLY with SWAN LOGO -->
        <text x="725" y="620" text-anchor="middle" font-family="'Helvetica Neue', Arial, sans-serif" font-size="13" font-weight="700" fill="#ffffff" letter-spacing="3">
          LA PEARLY
        </text>
        <!-- Swan Logo Icon -->
        <g transform="translate(712, 634) scale(0.65)" fill="#ffffff">
          <path d="M 12,2 C 10,2 6,4 4,8 C 2,12 3,16 6,18 C 9,20 14,20 18,17 C 22,14 26,10 27,6 C 27,4 25,3 23,4 C 21,5 18,8 16,8 C 14,8 14,5 14,3 C 14,2 13,2 12,2 Z M 5,19 C 8,22 15,22 20,19 C 24,16 28,12 30,8 C 30,11 26,17 21,21 C 16,25 7,24 5,19 Z" />
        </g>

        <!-- TOP TUCK FLAP (Above Front Panel, x:620 to 825) -->
        <!-- Tuck flap attached at top -->
        <path d="M 620,300 L 620,175 Q 620,140 655,140 L 790,140 Q 825,140 825,175 L 825,300 Z" fill="url(#oceanSurface)" stroke="#52525b" stroke-width="1.2" />
        <rect x="620" y="140" width="205" height="40" fill="#ffffff" opacity="0.2" />
        <!-- Top flap crease line -->
        <line x1="620" y1="180" x2="825" y2="180" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="5,4" />

        <!-- Dust flaps on top -->
        <polygon points="495,300 495,220 515,220 620,300" fill="#bae6fd" stroke="#52525b" stroke-width="1.2" />
        <polygon points="825,300 930,220 950,220 950,300" fill="#bae6fd" stroke="#52525b" stroke-width="1.2" />

        <!-- BOTTOM TUCK FLAPS (Below Panels) -->
        <!-- Front panel bottom auto-lock tab -->
        <polygon points="620,700 600,780 720,780 740,700" fill="#7c2d12" stroke="#52525b" stroke-width="1.2" />
        <polygon points="740,700 760,780 845,780 825,700" fill="#9a3412" stroke="#52525b" stroke-width="1.2" />
        <!-- Left panel bottom flap -->
        <path d="M 288,700 L 288,860 Q 288,865 293,865 L 490,865 Q 495,865 495,860 L 495,700 Z" fill="#b45309" stroke="#52525b" stroke-width="1.2" />
        <line x1="288" y1="825" x2="495" y2="825" stroke="#38bdf8" stroke-width="1.5" stroke-dasharray="5,4" />

        <!-- DIELINE CREASE & FOLD LINES (Dashed Blue Lines) -->
        <!-- Horizontal main folds -->
        <line x1="288" y1="300" x2="950" y2="300" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5,4" />
        <line x1="288" y1="700" x2="950" y2="700" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5,4" />

        <!-- Vertical panel folds -->
        <line x1="288" y1="300" x2="288" y2="700" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5,4" />
        <line x1="495" y1="300" x2="495" y2="700" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5,4" />
        <line x1="620" y1="300" x2="620" y2="700" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5,4" />
        <line x1="827" y1="300" x2="827" y2="700" stroke="#38bdf8" stroke-width="1.8" stroke-dasharray="5,4" />
        
        <!-- Outer cut line border around main body -->
        <line x1="950" y1="300" x2="950" y2="700" stroke="#52525b" stroke-width="1.2" />
      </g>
    </svg>
  </div>
</body>
</html>
`;

const prettyPonyHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      width: 1200px;
      height: 1000px;
      background: #ffffff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Helvetica Neue', Arial, sans-serif;
      overflow: hidden;
    }
    .container {
      width: 1200px;
      height: 1000px;
      position: relative;
      background: #ffffff;
    }
  </style>
</head>
<body>
  <div class="container">
    <svg width="1200" height="1000" viewBox="0 0 1200 1000" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <!-- Gradients -->
        <linearGradient id="pinkSpine" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#fbcfe8" />
          <stop offset="30%" stop-color="#f472b6" />
          <stop offset="70%" stop-color="#ec4899" />
          <stop offset="100%" stop-color="#be185d" />
        </linearGradient>

        <linearGradient id="softWhitePink" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stop-color="#ffffff" />
          <stop offset="65%" stop-color="#ffffff" />
          <stop offset="90%" stop-color="#fce7f3" />
          <stop offset="100%" stop-color="#fbcfe8" />
        </linearGradient>

        <linearGradient id="magentaTopFlap" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#db2777" />
          <stop offset="60%" stop-color="#e11d48" />
          <stop offset="100%" stop-color="#f43f5e" />
        </linearGradient>

        <linearGradient id="sidePanelPink" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#fbcfe8" />
          <stop offset="50%" stop-color="#fdf2f8" />
          <stop offset="100%" stop-color="#fbcfe8" />
        </linearGradient>
      </defs>

      <g>
        <!-- 1. LEFT GLUE TAB (x:245 to 288) -->
        <polygon points="288,300 245,315 245,685 288,700" fill="#ffffff" stroke="#52525b" stroke-width="1.2" />

        <!-- 2. LEFT SIDE PANEL (x:288 to 495, w:207) -->
        <rect x="288" y="300" width="207" height="400" fill="url(#softWhitePink)" />
        
        <!-- Delicate Ornamental Baroque Corner Flourishes (Left Panel) -->
        <!-- Top Left Corner -->
        <g transform="translate(294, 306) scale(0.65)" stroke="#db2777" stroke-width="1.5" fill="none">
          <path d="M 0,0 Q 25,5 35,25 Q 45,45 25,55 Q 5,65 0,40 Q 15,30 20,15 Q 10,10 0,0" />
          <circle cx="18" cy="18" r="3" fill="#db2777" />
          <path d="M 15,0 Q 35,10 45,30 Q 55,50 35,65 Q 15,75 5,50" opacity="0.6" />
          <path d="M 0,15 Q 10,35 30,45 Q 50,55 65,35" opacity="0.6" />
        </g>
        <!-- Top Right Corner -->
        <g transform="translate(489, 306) scale(-0.65, 0.65)" stroke="#db2777" stroke-width="1.5" fill="none">
          <path d="M 0,0 Q 25,5 35,25 Q 45,45 25,55 Q 5,65 0,40 Q 15,30 20,15 Q 10,10 0,0" />
          <circle cx="18" cy="18" r="3" fill="#db2777" />
          <path d="M 15,0 Q 35,10 45,30 Q 55,50 35,65 Q 15,75 5,50" opacity="0.6" />
        </g>
        <!-- Bottom Left Corner -->
        <g transform="translate(294, 694) scale(0.65, -0.65)" stroke="#db2777" stroke-width="1.5" fill="none">
          <path d="M 0,0 Q 25,5 35,25 Q 45,45 25,55 Q 5,65 0,40 Q 15,30 20,15 Q 10,10 0,0" />
          <circle cx="18" cy="18" r="3" fill="#db2777" />
          <path d="M 15,0 Q 35,10 45,30 Q 55,50 35,65" opacity="0.6" />
        </g>
        <!-- Bottom Right Corner -->
        <g transform="translate(489, 694) scale(-0.65, -0.65)" stroke="#db2777" stroke-width="1.5" fill="none">
          <path d="M 0,0 Q 25,5 35,25 Q 45,45 25,55 Q 5,65 0,40 Q 15,30 20,15 Q 10,10 0,0" />
          <circle cx="18" cy="18" r="3" fill="#db2777" />
          <path d="M 15,0 Q 35,10 45,30 Q 55,50 35,65" opacity="0.6" />
        </g>

        <!-- 3. CENTER SPINE PANEL (x:495 to 620, w:125) -->
        <rect x="495" y="300" width="125" height="400" fill="url(#pinkSpine)" />
        <!-- Small Swan Logo near bottom of spine -->
        <g transform="translate(545, 638) scale(0.55)" fill="#ffffff">
          <path d="M 12,2 C 10,2 6,4 4,8 C 2,12 3,16 6,18 C 9,20 14,20 18,17 C 22,14 26,10 27,6 C 27,4 25,3 23,4 C 21,5 18,8 16,8 C 14,8 14,5 14,3 C 14,2 13,2 12,2 Z M 5,19 C 8,22 15,22 20,19 C 24,16 28,12 30,8 C 30,11 26,17 21,21 C 16,25 7,24 5,19 Z" />
          <text x="17" y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-size="8" fill="#ffffff" text-anchor="middle" font-weight="600">La Pearly</text>
        </g>

        <!-- 4. FRONT FACE PANEL (x:620 to 827, w:207) -->
        <rect x="620" y="300" width="207" height="400" fill="url(#softWhitePink)" />

        <!-- Rococo / Baroque Flourish Corner Borders on Front Panel -->
        <!-- Top Left Corner -->
        <g transform="translate(625, 306) scale(0.7)" stroke="#db2777" stroke-width="1.5" fill="none">
          <path d="M 0,0 Q 25,5 35,25 Q 45,45 25,55 Q 5,65 0,40 Q 15,30 20,15 Q 10,10 0,0" />
          <circle cx="18" cy="18" r="3" fill="#db2777" />
          <path d="M 15,0 Q 35,10 45,30 Q 55,50 35,65 Q 15,75 5,50" opacity="0.7" />
          <path d="M 0,15 Q 10,35 30,45 Q 50,55 65,35" opacity="0.7" />
          <path d="M 30,5 Q 50,20 60,40" opacity="0.5" />
          <path d="M 5,30 Q 20,50 40,60" opacity="0.5" />
        </g>
        <!-- Top Right Corner -->
        <g transform="translate(822, 306) scale(-0.7, 0.7)" stroke="#db2777" stroke-width="1.5" fill="none">
          <path d="M 0,0 Q 25,5 35,25 Q 45,45 25,55 Q 5,65 0,40 Q 15,30 20,15 Q 10,10 0,0" />
          <circle cx="18" cy="18" r="3" fill="#db2777" />
          <path d="M 15,0 Q 35,10 45,30 Q 55,50 35,65 Q 15,75 5,50" opacity="0.7" />
          <path d="M 0,15 Q 10,35 30,45 Q 50,55 65,35" opacity="0.7" />
          <path d="M 30,5 Q 50,20 60,40" opacity="0.5" />
        </g>
        <!-- Bottom Left Corner -->
        <g transform="translate(625, 694) scale(0.7, -0.7)" stroke="#db2777" stroke-width="1.5" fill="none">
          <path d="M 0,0 Q 25,5 35,25 Q 45,45 25,55 Q 5,65 0,40 Q 15,30 20,15 Q 10,10 0,0" />
          <circle cx="18" cy="18" r="3" fill="#db2777" />
          <path d="M 15,0 Q 35,10 45,30 Q 55,50 35,65" opacity="0.7" />
        </g>
        <!-- Bottom Right Corner -->
        <g transform="translate(822, 694) scale(-0.7, -0.7)" stroke="#db2777" stroke-width="1.5" fill="none">
          <path d="M 0,0 Q 25,5 35,25 Q 45,45 25,55 Q 5,65 0,40 Q 15,30 20,15 Q 10,10 0,0" />
          <circle cx="18" cy="18" r="3" fill="#db2777" />
          <path d="M 15,0 Q 35,10 45,30 Q 55,50 35,65" opacity="0.7" />
        </g>

        <!-- Typography: "Pretty Pony" script font -->
        <g transform="translate(723, 375)">
          <text x="0" y="0" text-anchor="middle" font-family="'Great Vibes', 'Playfair Display', 'Brush Script MT', cursive" font-size="52" fill="#be123c" font-weight="600" letter-spacing="1">
            Pretty
          </text>
          <text x="12" y="44" text-anchor="middle" font-family="'Great Vibes', 'Playfair Display', 'Brush Script MT', cursive" font-size="48" fill="#be123c" font-weight="600" letter-spacing="1">
            Pony
          </text>
        </g>

        <!-- BEAUTIFUL SILHOUETTE: Woman in profile with flowing magenta hair -->
        <g transform="translate(642, 470)">
          <!-- Flowing Voluminous Magenta Hair -->
          <path d="
            M 35,45
            C 40,20 65,0 95,0
            C 130,0 155,20 180,35
            C 210,50 250,55 260,95
            C 270,130 230,125 210,120
            C 240,140 255,160 235,180
            C 205,200 170,165 145,150
            C 160,170 170,200 140,215
            C 115,225 85,180 75,155
            C 70,140 65,115 60,100
            Z
          " fill="#e11d48" />

          <!-- Additional hair strand layers for dynamism -->
          <path d="
            M 95,15
            C 135,15 175,40 215,65
            C 245,85 270,95 285,125
            C 270,130 245,115 220,105
            C 250,135 265,155 240,170
            C 215,185 185,160 160,145
            Z
          " fill="#be123c" />

          <path d="
            M 45,55
            C 65,30 105,20 145,35
            C 185,50 225,90 255,120
            C 240,115 220,100 195,90
            Z
          " fill="#f43f5e" />

          <!-- Cherry Blossoms in Hair -->
          <!-- Flower 1 -->
          <g transform="translate(130, 70) scale(0.65)" fill="#fbcfe8" stroke="#be123c" stroke-width="0.8">
            <circle cx="0" cy="-10" r="7" />
            <circle cx="9.5" cy="-3" r="7" />
            <circle cx="6" cy="8" r="7" />
            <circle cx="-6" cy="8" r="7" />
            <circle cx="-9.5" cy="-3" r="7" />
            <circle cx="0" cy="0" r="3.5" fill="#f43f5e" />
          </g>
          <!-- Flower 2 -->
          <g transform="translate(70, 75) scale(0.55)" fill="#fbcfe8" stroke="#be123c" stroke-width="0.8">
            <circle cx="0" cy="-10" r="7" />
            <circle cx="9.5" cy="-3" r="7" />
            <circle cx="6" cy="8" r="7" />
            <circle cx="-6" cy="8" r="7" />
            <circle cx="-9.5" cy="-3" r="7" />
            <circle cx="0" cy="0" r="3.5" fill="#f43f5e" />
          </g>
          <!-- Flower 3 -->
          <g transform="translate(170, 145) scale(0.5)" fill="#fbcfe8" stroke="#be123c" stroke-width="0.8">
            <circle cx="0" cy="-10" r="7" />
            <circle cx="9.5" cy="-3" r="7" />
            <circle cx="6" cy="8" r="7" />
            <circle cx="-6" cy="8" r="7" />
            <circle cx="-9.5" cy="-3" r="7" />
            <circle cx="0" cy="0" r="3.5" fill="#f43f5e" />
          </g>

          <!-- Elegant Feminine Profile Silhouette (Face, Neck, Hand on Chin) -->
          <path d="
            M 42,60
            C 35,68 25,75 16,80
            C 12,82 6,86 0,88
            C 3,92 12,94 15,96
            C 7,100 4,103 0,105
            C 4,108 12,110 16,112
            C 8,116 3,120 0,123
            C 5,127 15,130 18,135
            C 16,142 8,155 10,165
            C 14,175 25,185 35,190
            C 45,195 55,200 65,210
            L 70,210
            C 60,195 52,175 48,155
            C 45,140 40,125 38,110
            C 42,95 45,80 42,60 Z
          " fill="#f472b6" opacity="0.65" />

          <!-- Lips & Eye hint -->
          <path d="M 0,105 Q 8,103 14,105 Q 8,108 0,105 Z" fill="#9f1239" />
          <path d="M 12,85 Q 18,80 24,84" stroke="#9f1239" stroke-width="2" fill="none" />
          <!-- Graceful hand touching chin -->
          <path d="
            M -5,140
            C -2,130 5,125 15,124
            C 18,124 22,128 20,135
            C 15,145 10,160 8,175
            C 5,190 2,205 0,215
            Z
          " fill="#f472b6" opacity="0.8" />
        </g>

        <!-- Bottom Swan Logo on Front Panel -->
        <g transform="translate(685, 638) scale(0.55)" fill="#e11d48">
          <path d="M 12,2 C 10,2 6,4 4,8 C 2,12 3,16 6,18 C 9,20 14,20 18,17 C 22,14 26,10 27,6 C 27,4 25,3 23,4 C 21,5 18,8 16,8 C 14,8 14,5 14,3 C 14,2 13,2 12,2 Z M 5,19 C 8,22 15,22 20,19 C 24,16 28,12 30,8 C 30,11 26,17 21,21 C 16,25 7,24 5,19 Z" />
          <text x="17" y="32" font-family="'Helvetica Neue', Arial, sans-serif" font-size="8" fill="#e11d48" text-anchor="middle" font-weight="600">La Pearly</text>
        </g>

        <!-- 5. RIGHT SIDE PANEL (x:827 to 950, w:123) -->
        <rect x="827" y="300" width="123" height="400" fill="url(#sidePanelPink)" />
        <line x1="950" y1="300" x2="950" y2="700" stroke="#52525b" stroke-width="1.2" />

        <!-- TOP TUCK FLAP (Above Front Panel, x:620 to 825) -->
        <path d="M 620,300 L 620,175 Q 620,140 655,140 L 790,140 Q 825,140 825,175 L 825,300 Z" fill="url(#magentaTopFlap)" stroke="#52525b" stroke-width="1.2" />
        <rect x="620" y="140" width="205" height="40" fill="#ffffff" opacity="0.9" />
        <line x1="620" y1="180" x2="825" y2="180" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,4" />

        <!-- Top dust flaps -->
        <polygon points="495,300 495,220 515,220 620,300" fill="#fce7f3" stroke="#52525b" stroke-width="1.2" />
        <polygon points="825,300 930,220 950,220 950,300" fill="#fce7f3" stroke="#52525b" stroke-width="1.2" />

        <!-- BOTTOM TUCK FLAPS (Below Panels) -->
        <!-- Center panel bottom flap -->
        <polygon points="495,700 495,780 620,780 620,700" fill="#db2777" stroke="#52525b" stroke-width="1.2" />
        <!-- Front panel bottom tuck tabs -->
        <polygon points="620,700 600,780 720,780 740,700" fill="#e11d48" stroke="#52525b" stroke-width="1.2" />
        <polygon points="740,700 760,780 845,780 825,700" fill="#be123c" stroke="#52525b" stroke-width="1.2" />
        <!-- Left panel bottom flap -->
        <path d="M 288,700 L 288,860 Q 288,865 293,865 L 490,865 Q 495,865 495,860 L 495,700 Z" fill="#e11d48" stroke="#52525b" stroke-width="1.2" />
        <rect x="288" y="820" width="207" height="45" fill="#ffffff" opacity="0.9" />
        <line x1="288" y1="825" x2="495" y2="825" stroke="#60a5fa" stroke-width="1.5" stroke-dasharray="5,4" />

        <!-- DIELINE CREASE & FOLD LINES (Dashed Blue Lines) -->
        <line x1="288" y1="300" x2="950" y2="300" stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="5,4" />
        <line x1="288" y1="700" x2="950" y2="700" stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="5,4" />

        <line x1="288" y1="300" x2="288" y2="700" stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="5,4" />
        <line x1="495" y1="300" x2="495" y2="700" stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="5,4" />
        <line x1="620" y1="300" x2="620" y2="700" stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="5,4" />
        <line x1="827" y1="300" x2="827" y2="700" stroke="#60a5fa" stroke-width="1.8" stroke-dasharray="5,4" />
      </g>
    </svg>
  </div>
</body>
</html>
`;

async function renderImages() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1200, height: 1000, deviceScaleFactor: 1.5 });

  console.log('Generating Aqua-Arena.jpg...');
  await page.setContent(aquaArenaHTML, { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: path.join(__dirname, '../public/Aqua-Arena.jpg'), type: 'jpeg', quality: 95 });
  console.log('Aqua-Arena.jpg saved!');

  console.log('Generating Pretty-Pony.jpg...');
  await page.setContent(prettyPonyHTML, { waitUntil: 'domcontentloaded' });
  await page.screenshot({ path: path.join(__dirname, '../public/Pretty-Pony.jpg'), type: 'jpeg', quality: 95 });
  console.log('Pretty-Pony.jpg saved!');

  await browser.close();
  console.log('Finished rendering packaging images successfully!');
}

renderImages().catch(err => {
  console.error('Error generating images:', err);
  process.exit(1);
});
