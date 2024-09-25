const STICKERS = [
  {src: './src/assets/sticker-1.png'},
  {src: './src/assets/sticker-2.png'},
  {src: './src/assets/sticker-3.png'},
  {src: './src/assets/sticker-4.png'},
  {src: './src/assets/sticker-5.png'}
]

function sample(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index]
}

export function getSticker() {
  return sample(STICKERS)
}