/**
 * DATABASE PILKASIS
 * (visualisasi dengan model json)
 */

NOSQL = {
  tabel_user: [
    {
      nama: 'Anonymous',
      email: 'nasyikhqusyairy@gmail.com',
      password: '111',
      role: '0'
    },
    {
      nama: 'Wafy',
      kelas: 'X DKV',
      gender: 'l',
      derajat: 'sma',
      password: '70536',
      role: '1'
    },
    {
      nama: 'Pak Moslem',
      jabatan: 'Pembina OSIS',
      gender: 'l',
      password: '000',
      role: '2'
    }
  ]
}

// Dapat disimpulkan 
//  bahwa perbedaan role pada user membutuhkan skema data yang berbeda,
//  sedangkan tujuannya adalah sama , yaitu untuk mengidentifikasi pengguna

SQL = {
  tabel_user: [
    {
      nama: 'Anonymous',
      email: 'nasyikhqusyairy@gmail.com',
      jabatan: '',
      kelas: '',
      gender: '',
      derajat: '',
      password: '111',
      role: '0'
    },
    {
      nama: 'Wafy',
      email: '',
      jabatan: '',
      kelas: 'X DKV',
      gender: 'l',
      derajat: 'sma',
      password: '70536',
      role: '1'
    },
    {
      nama: 'Pak Moslem',
      email: '',
      jabatan: 'Pembina OSIS',
      kelas: '',
      gender: 'l',
      derajat: '',
      password: '000',
      role: '2'
    },
  ]
}

// Menyamakan skema akan membuat data terlihat berantakan


/**
 * @SQL
 * Kelebihan :
 *  -syntax yang jelas
 *  -dapat mengambil data tertentu dalam sekali proses
 *  -dapat memiliki relasi
 *  -cocok dengan laravel
 * 
 * Kekurangan :
 *  -membutuhkan syntax yang panjang untuk memperoleh data yang spesifik
 *  -memerlukan waktu yang lama untuk menyaring data
 *  -tidak fleksibel
 *  -tidak dapat melakukan nesting
 * 
 * @NOSQL
 * Kelebihan :
 *  -query menyesuaikan bahasa pemrograman
 *  -dapat menyaring data spesifik dengan cepat
 *  -cocok dengan express, GraphQL, dan NextJS
 *  -tidak memiliki skema, namun memiliki atribut yang fleksibel
 *  -bisa memiliki nesting
 * 
 * Kekurangan :
 *  -kecepatan hanya unggul di proses read
 *  -tidak dapat berelasi
 * 
 * 
 * @Laravel
 * Kelebihan :
 *  -memiliki banyak fitur yang siap pakai
 *  -sederhana dan scaleable
 *  -modularitas yang mudah
 *  -set up ke hosting yang mudah
 * 
 * Kekurangan
 *  -ukuran yang sangat besar dan berat
 *  -biasanya banyak fitur yang tak terpakai
 * 
 * @ExpressJS
 * Kelebihan :
 *  -ringan dan mudah digunakan
 *  -menggunakan bahasa yang sama dengan client (JavaScript)
 * 
 * Kekurangan :
 *  -minim fitur
 *  -membutuhkan pengaturan tambahan untuk melakukan hosting
 * 
 * 
 */