export default function (inputDate: string) {
  const date = new Date(inputDate);

  // Daftar nama hari
  const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];

  // Daftar nama bulan
  const months = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

  // Mendapatkan hari, tanggal, bulan, tahun, jam, dan menit dari objek Date
  const dayOfWeek = daysOfWeek[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  // Format waktu sesuai dengan format yang diinginkan
  const formattedDate = `${dayOfWeek}, ${day} ${month} ${year} - ${hours}:${minutes} WIB`;

  return formattedDate;
}