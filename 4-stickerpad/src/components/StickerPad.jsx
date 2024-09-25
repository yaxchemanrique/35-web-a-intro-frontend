import { useState } from 'react'
import styles from './StickerPad.module.css'
import { getSticker } from './stickers.data';
import Sticker from './Sticker.jsx';

function StickerPad() {
  const [stickers, setStickers] = useState([]);

  function addSticker(event) {
    const stickerData = getSticker()
    const newSticker = {
      ...stickerData,
      x: event.clientX,
      y: event.clientY,
    }
    const nextStickers = [...stickers, newSticker];
    console.log(nextStickers)
    setStickers(nextStickers)
  }

  return (
    <button className={styles.stickerPad} onClick={addSticker} >
      {stickers.map((sticker) => (
        <Sticker srcProp={sticker.src} posX={sticker.x} posY={sticker.y}/>
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