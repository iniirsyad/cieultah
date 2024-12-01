const heart = document.querySelector('.heart');
let animationCount = 0;

// Fungsi untuk mendeteksi akhir animasi hati
heart.addEventListener('animationiteration', () => {
  animationCount++;
  if (animationCount === 1) {
    heart.style.animation = 'none'; // Hentikan animasi setelah 1 kali
    showFinalButton(); // Tampilkan tombol "Pencet Disini"
  }
});

// Fungsi untuk menampilkan tombol "Pencet Disini"
function showFinalButton() {
  const finalButton = document.createElement('button');
  finalButton.textContent = 'Pencet Disini';
  finalButton.style.position = 'absolute';
  finalButton.style.bottom = '20px';
  finalButton.style.padding = '10px 20px';
  finalButton.style.fontSize = '16px';
  finalButton.style.backgroundColor = '#6a0572';
  finalButton.style.color = 'white';
  finalButton.style.border = 'none';
  finalButton.style.borderRadius = '5px';
  finalButton.style.cursor = 'pointer';

  // Fungsi saat tombol diklik
  finalButton.addEventListener('click', () => {
    finalButton.remove(); // Hilangkan tombol setelah diklik
    startBlackoutSequence(); // Mulai transisi ke amplop
  });

  document.body.appendChild(finalButton);
}

// Fungsi untuk memulai layar hitam dan amplop
function startBlackoutSequence() {
  document.body.style.backgroundColor = 'white'; // Ganti warna menjadi putih
  setTimeout(() => {
    showEnvelope(); // Tampilkan amplop
  }, 500);
}

// Fungsi untuk menampilkan amplop
function showEnvelope() {
  const envelope = document.createElement('div');
  envelope.style.position = 'absolute';
  envelope.style.width = '150px';
  envelope.style.height = '100px';
  envelope.style.backgroundColor = '#6495ED';
  envelope.style.border = '5px solid #7FFFD4';
  envelope.style.borderRadius = '5px';
  envelope.style.top = '50%';
  envelope.style.left = '50%';
  envelope.style.transform = 'translate(-50%, -50%)';
  envelope.style.cursor = 'pointer';
  envelope.style.display = 'flex';
  envelope.style.justifyContent = 'center';
  envelope.style.alignItems = 'center';
  envelope.textContent = '📩 Klik untuk Buka';

  // Saat amplop diklik, tampilkan surat
  envelope.addEventListener('click', () => {
    showLetter();
    envelope.remove(); // Hapus amplop setelah diklik
  });

  document.body.appendChild(envelope);
}

// Fungsi untuk membuat bintang jatuh
function showStars() {
  const colors = ['#FFD700', '#FF69B4', '#8A2BE2', '#00CED1', '#FF5733'];
  const body = document.body;

  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.setProperty('--color', colors[Math.floor(Math.random() * colors.length)]);
    star.style.left = Math.random() * 100 + 'vw';
    star.style.top = Math.random() * 50 + 'vh';
    star.style.animationDelay = Math.random() * 2 + 's';
    body.appendChild(star);

    // Hapus bintang setelah animasi selesai
    setTimeout(() => star.remove(), 4000);
  }
}

// Modifikasi fungsi showLetter untuk memanggil animasi bintang
function showLetter() {
  const letter = document.createElement('div');
  letter.style.position = 'absolute';
  letter.style.width = '80%';
  letter.style.height = '60%';
  letter.style.backgroundColor = 'white';
  letter.style.border = '2px solid #7FFFD4';
  letter.style.boxShadow = '0 0 20px rgba(0,0,0,0.2)';
  letter.style.borderRadius = '10px';
  letter.style.padding = '20px';
  letter.style.top = '50%';
  letter.style.left = '50%';
  letter.style.transform = 'translate(-50%, -50%)';
  letter.style.overflow = 'auto';
  letter.innerHTML = `
    <h1 style="color: #D9534F; text-align: center;">Selamat Ulang Tahun Ayraa!</h1>
    <p style="font-size: 18px; text-align: justify; color: #333;">
      Hari ini adalah hari yang penuh dengan kebahagiaan dan harapan baru. Setiap tahun, kamu semakin bersinar, dan setiap senyummu menghangatkan dunia di sekitarmu. Kini, di usia 18 tahun, kamu memasuki babak baru dalam hidup, sebuah perjalanan yang penuh dengan impian dan kesempatan.

Di antara segala pencapaian dan kebahagiaan yang kamu raih, aku berharap kamu tahu bahwa ada seseorang yang selalu mendoakan yang terbaik untukmu, yang selalu mengingat setiap momen indah yang kita lalui bersama. Kamu adalah sosok yang luar biasa, dan aku sangat bersyukur pernah menjadi bagian dari cerita hidupmu.

Aku ingin memberimu sebuah puisi yang mungkin bisa sedikit menggambarkan perasaan ini:

<br>Puisi Ulang Tahun:</br>
<p style="font-size: 18px; text-align: justify; color: #333;">"Di Balik Senyummu"</p>
<p style="font-size: 18px; text-align: justify; color: #333;">
<br>Di balik senyummu yang cerah,</br>
<br>Tersimpan sejuta harapan,</br>
<br>Setiap langkah yang kau ambil,</br>
<br>Menjadi jejak yang tak terlupakan.</br>
</p>
<p style="font-size: 18px; text-align: justify; color: #333;">
<br>Usia 18, sebuah langkah baru,</br>
<br>Namun hati ini tak pernah berhenti mengenang,</br>
<br>Momen-momen yang kita lewati,</br>
<br>Di sana, ada cinta yang tak pernah pudar.</br>
</p>
<p style="font-size: 18px; text-align: justify; color: #333;">
<br>Ada rindu yang tak terucapkan,</br>
<br>Dan harapan yang tersembunyi di setiap doa,</br>
<br>Semoga perjalanan hidupmu membawa kebahagiaan,</br>
<br>Tapi, jika suatu saat, takdir mempertemukan kita lagi,</br>
<br>Aku akan tetap ada, seperti dulu...</br>
<br>Menunggumu dengan sepenuh hati.</br>
</p>
<p style="font-size: 18px; text-align: justify; color: #333;">
Setiap detik yang kamu jalani adalah kesempatan baru untuk tumbuh, belajar, dan menemukan kebahagiaan yang sejati. Semoga segala impianmu terwujud dan tak ada yang menghalangi langkahmu menuju masa depan yang cerah.

Ingatlah, bahwa di sini, ada seseorang yang selalu mendukungmu, apapun yang terjadi. 💖
</p>
    </p>
    <p style="text-align: right; font-style: italic; color: #555;">- Dari Irsyad</p>
  `;

  document.body.appendChild(letter);

  // Tampilkan bintang saat surat muncul
  showStars();

  // Setelah surat muncul, tampilkan balon
  setTimeout(() => {
    showBalloons();
  }, 1000);
}

// Fungsi untuk menampilkan balon
function showBalloons() {
  const body = document.body;

  for (let i = 0; i < 50; i++) {
    const balloon = document.createElement('div');
    balloon.className = 'balloon';
    balloon.style.backgroundColor = getRandomColor();
    balloon.style.left = Math.random() * 100 + 'vw';
    balloon.style.animationDelay = Math.random() * 2 + 's';
    body.appendChild(balloon);
  }
}

// Fungsi untuk menghasilkan warna acak
function getRandomColor() {
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#FFD700', '#FF69B4', '#8A2BE2', '#00CED1'];
  return colors[Math.floor(Math.random() * colors.length)];
}

// Musik otomatis
const music = new Audio('A THOUSAND YEAR.2.mp3');
music.loop = true;
music.play();
