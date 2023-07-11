export default function (text: string) {
  if (text) {
    // Mencari URL menggunakan ekspresi reguler
    const urlRegex = /(http:\/\/[^\s]+)/g;

    // // Mengganti URL dengan tautan HTML
    return text
      .replace(urlRegex, '<a href="$1">$1</a>')
      .replace(/\n/g, '<br>')
      .replace(/#(\w+)/g, '<a href="https://www.instagram.com/explore/tags/$1/">#$1</a>')
      .replace(/@(\w+)/g, '<a href="https://www.instagram.com/$1/">@$1</a>')
  }
  return ''
}