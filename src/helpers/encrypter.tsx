import crypto from 'crypto';

// Fungsi untuk melakukan enkripsi token akses
export function encrypt(data: any) {
  const algorithm = 'aes-256-cbc';
  const key = crypto.randomBytes(32); // Generate random key
  const iv = crypto.randomBytes(16); // Generate random initialization vector

  const cipher = crypto.createCipheriv(algorithm, key, iv);
  let encrypted = cipher.update(data, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const encryptedData = {
    iv: iv.toString('hex'),
    key: key.toString('hex'),
    encrypted: encrypted
  };

  return encryptedData;
}

// Fungsi untuk melakukan dekripsi token akses
export function decrypt(encryptedData: any) {
  const algorithm = 'aes-256-cbc';
  const iv = Buffer.from(encryptedData.iv, 'hex');
  const key = Buffer.from(encryptedData.key, 'hex');
  const encrypted = encryptedData.encrypted;

  const decipher = crypto.createDecipheriv(algorithm, key, iv);
  let decrypted = decipher.update(encrypted, 'hex', 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}
