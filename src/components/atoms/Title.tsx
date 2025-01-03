interface TitleProps {
  title: string;
}

const Title: React.FC<TitleProps> = ({ title, ...props }) => {
  return <h1 className="title" {...props}>{title}</h1>;
};

export default Title;
