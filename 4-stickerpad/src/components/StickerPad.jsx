import { useState } from 'react'
import styles from './StickerPad.module.css'

function StickerPad() {
  const [stickers, setStickers] = useState([]);

  function addSticker() {
    const newSticker = {
      src: "./src/assets/sticker-1.png"
    }
    const nextStickers = [...stickers, newSticker];
    setStickers(nextStickers)
  }

  return (
    <button className={styles.stickerPad} onClick={addSticker} >
      {stickers.map((sticker) => (
        <img src={sticker.src} />
      ))}
    </button>
  )
}

export default StickerPad


/* 
* On Click
  * -> Entregue un sticker
  * -> Se agregue a un arreglo
  * -> Recorrer el arreglo
  * -> Imprimir cada uno de los elemntos en el navegador (adentro del boton)
*/