import { Note1 } from "../../../Data/notes";
import imgProcess from "../../images/process.svg";
import imgImportant from "../../images/important.svg";
import imgComents from "../../images/coment.svg";
import imgFavorites from "../../images/favorites.svg";
import imgSaved from "../../images/Keep.svg";

import styleNote from "./CSS/notes.module.css";

export default function Notes() {
  return (
    <div className={styleNote.cardNote}>
      <div className={styleNote.fechHour}>
        <p className="fech">{Note1.hour}</p>
        <p className="hour">{Note1.fecha}</p>
      </div>
      <p className={styleNote.notes}>{Note1.notes}</p>
      <div className={styleNote.containerIcons}>
        <img className={styleNote.img} src={imgImportant} alt="importantes" />
        <img className={styleNote.img} src={imgProcess} alt="proceso" />
        <img className={styleNote.img} src={imgComents} alt="comentarios" />
        <img className={styleNote.img} src={imgFavorites} alt="favoritos" />
        <img className={styleNote.img} src={imgSaved} alt="guardados" />
      </div>
    </div>
  );
}
