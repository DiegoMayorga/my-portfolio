import "../../styles/molecules/section.scss";

interface SectionProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

const Section: React.FC<SectionProps> = ({ children, title, description }) => {
  return (
    <section className="section">
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </section>
  );
};

export default Section;
