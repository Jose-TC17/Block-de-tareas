type Props = {
  classN: string;
  children: JSX.Element;
};

export default function ContentLogin(props: Props) {
  const { classN, children } = props;

  return <div className={classN}>{children}</div>;
}
