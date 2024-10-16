import styleSocial from "../CSS/Social.module.css";
import imgGoogle from "../../images/google.webp";
import imgGitHub from "../../images/github.webp";

type Props = {};

export default function BtnSocial({}: Props) {
  return (
    <div className={styleSocial.containerSocial}>
      <button className={styleSocial.btnGoogle}>
        <img
          className={styleSocial.imgGoogle}
          src={imgGoogle}
          draggable="false"
          alt="Google"
        />
        <p className={styleSocial.pGoogle}>Google</p>
      </button>
      <button className={styleSocial.btnGitHub}>
        <img
          className={styleSocial.imgGitHub}
          src={imgGitHub}
          draggable="false"
          alt="Git Hub"
        />
        <p className={styleSocial.pGitHub}>GitHub</p>
      </button>
    </div>
  );
}
