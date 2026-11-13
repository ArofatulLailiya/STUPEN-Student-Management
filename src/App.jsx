
import { useEffect, useState } from 'react';
import './App.css';

function App() {
  // Data dummy mahasiswa menggunakan useState
  const [students] = useState([
    {
      nim: '230101001',
      nama: 'Alya Putri Ramadhani',
      noHp: '081234567801',
      email: 'alya.putri@email.com',
      alamat: 'Surabaya, Jawa Timur',
      prodi: 'Sistem Informasi',
      tahunMasuk: '2023',
    },
    {
      nim: '230101002',
      nama: 'Fajar Maulana',
      noHp: '081234567802',
      email: 'fajar.maulana@email.com',
      alamat: 'Sidoarjo, Jawa Timur',
      prodi: 'Informatika',
      tahunMasuk: '2023',
    },
    {
      nim: '230101003',
      nama: 'Nadia Safitri',
      noHp: '081234567803',
      email: 'nadia.safitri@email.com',
      alamat: 'Gresik, Jawa Timur',
      prodi: 'Sistem Informasi',
      tahunMasuk: '2022',
    },
    {
      nim: '230101004',
      nama: 'Rizky Aditya Pratama',
      noHp: '081234567804',
      email: 'rizky.aditya@email.com',
      alamat: 'Mojokerto, Jawa Timur',
      prodi: 'Teknik Informatika',
      tahunMasuk: '2023',
    },
    {
      nim: '230101005',
      nama: 'Dinda Maharani',
      noHp: '081234567805',
      email: 'dinda.maharani@email.com',
      alamat: 'Surabaya, Jawa Timur',
      prodi: 'Sistem Informasi',
      tahunMasuk: '2024',
    },
    {
      nim: '230101006',
      nama: 'Ilham Ramadhan',
      noHp: '081234567806',
      email: 'ilham.ramadhan@email.com',
      alamat: 'Lamongan, Jawa Timur',
      prodi: 'Informatika',
      tahunMasuk: '2024',
    },
  ]);

  // State untuk menyimpan waktu saat ini
  const [currentTime, setCurrentTime] = useState(new Date());

  // useEffect untuk memperbarui jam setiap 1 detik
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Membersihkan interval ketika komponen di-unmount
    return () => clearInterval(timer);
  }, []);

  // Format tanggal dan jam
  const formattedDate = currentTime.toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  const formattedTime = currentTime.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  });

  return (
    <div className="app-container">
      {/* Header */}
      <header className="top-header">
        <div className="brand">
          <div className="brand-icon">S</div>
          <span>Student<span className="brand-highlight">Hub</span></span>
        </div>

        <div className="header-label">
          Student Management System
        </div>
      </header>

      <main className="main-content">
        {/* Page Heading */}
        <section className="page-heading">
          <div>
            <p className="eyebrow">DASHBOARD</p>
            <h1>Student Management</h1>
            <p className="page-description">
              Kelola dan lihat informasi data mahasiswa dalam satu tempat.
            </p>
          </div>
        </section>

        {/* Summary and Live Clock */}
        <section className="info-cards">
          <div className="info-card student-card">
            <div className="info-card-icon">👥</div>
            <div>
              <p className="info-label">Total Mahasiswa</p>
              <h2>{students.length}</h2>
              <p className="info-note">Data mahasiswa terdaftar</p>
            </div>
          </div>

          <div className="info-card clock-card">
            <div className="info-card-icon">🕒</div>
            <div>
              <p className="info-label">Waktu Sekarang</p>
              <h2 className="clock-text">{formattedTime}</h2>
              <p className="info-note">{formattedDate}</p>
            </div>
          </div>
        </section>

        {/* Student Table */}
        <section className="table-section">
          <div className="table-heading">
            <div>
              <h2>Daftar Data Mahasiswa</h2>
              <p>Informasi lengkap mahasiswa yang terdaftar.</p>
            </div>

            <span className="data-count">
              {students.length} Mahasiswa
            </span>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>NIM</th>
                  <th>Nama Mahasiswa</th>
                  <th>No. HP</th>
                  <th>Email</th>
                  <th>Alamat</th>
                  <th>Program Studi</th>
                  <th>Tahun Masuk</th>
                </tr>
              </thead>

              <tbody>
                {students.map((student) => (
                  <tr key={student.nim}>
                    <td className="nim-cell">{student.nim}</td>
                    <td className="name-cell">{student.nama}</td>
                    <td>{student.noHp}</td>
                    <td>{student.email}</td>
                    <td>{student.alamat}</td>
                    <td>
                      <span className="prodi-badge">
                        {student.prodi}
                      </span>
                    </td>
                    <td>{student.tahunMasuk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            Menampilkan {students.length} data mahasiswa
          </div>
        </section>

        {/* Footer */}
        <footer className="page-footer">
          © 2026 StudentHub. Student Management Dashboard.
        </footer>
      </main>
    </div>
  );
}

export default App;
