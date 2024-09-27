import { useState } from 'react'
import { getSticker } from './stickers.data.js';
import styles from './StickerPad.module.css';
import Sticker from './Sticker.jsx';

function StickerPad() {
  const [stickers, setStickers] = useState([]);
  // let stickers = []
  function addSticker(event) {
    const stickerData = getSticker()
    const newSticker = {
      ...stickerData,
      x: event.clientX,
      y: event.clientY,
      // key: `${stickerData.src}-${event.clientX}-${event.clientY}`
      // key: `${Math.random()}-${stickerData.src}-${event.clientX}-${event.clientY}`
      key: Math.random()
    }
    const nextStickers = [...stickers, newSticker];
    console.log(nextStickers)
    setStickers(nextStickers)
  }

  return (
    <button className={styles.stickerPad} onClick={addSticker} >
      {stickers.map((sticker) => (
        <Sticker key={sticker.key} srcProp={sticker.src} posX={sticker.x} posY={sticker.y}/>
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