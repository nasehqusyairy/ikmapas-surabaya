import mammoth from 'mammoth';

export default async function convertDocxToHtml(file: File): Promise<string> {
  const fileBuffer = await file.arrayBuffer();

  const options = {
    styleMap: [
      "p[style-name='Centered'] => p.text-center", // Mengatur kelas CSS untuk paragraf yang rata tengah
      "span[style-name='Centered'] => span.text-center", // Mengatur kelas CSS untuk elemen span yang rata tengah
      "u => u",
    ]
  };

  return new Promise<string>((resolve, reject) => {
    mammoth.convertToHtml({ arrayBuffer: fileBuffer }, options)
      .then((result) => {
        resolve(result.value);
      })
      .catch((error) => {
        reject(error);
      });
  });
}
