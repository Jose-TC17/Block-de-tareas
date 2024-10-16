import linkSetting from "./CSS/LinkSettings.module.css";

type Props = {
  children: string;
  icono: string;
  key: number;
  theme: boolean;
  funcVerifyTheme: (theme: boolean, styleT: string, dark: string) => string;
};

function Links(props: Props) {
  const { children, icono, theme, funcVerifyTheme } = props;

  return (
    <li className={linkSetting.li}>
      <a
        className={funcVerifyTheme(theme, linkSetting.links, linkSetting.dark)}
        href=""
      >
        <img
          className={funcVerifyTheme(theme, linkSetting.img, linkSetting.dark)}
          src={icono}
          alt="iconos"
        />
        <p
          className={funcVerifyTheme(theme, linkSetting.paf, linkSetting.dark)}
        >
          {children}
        </p>
      </a>
    </li>
  );
}

export default Links;
