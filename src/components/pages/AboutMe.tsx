import "../../styles/pages/aboutme.scss";
import Section from "../molecules/Section";
import Title from "../atoms/Title";
import AboutMeCard from "../organisms/AboutMeCard";
import Divider from "../atoms/Divider";

const AboutMe: React.FC = () => {
  return (
    <>
      <Title title="About me" />
      <Divider />
      <div className="sections">
        <Section title="hola" description="hola">
          <AboutMeCard item={0} />
          <AboutMeCard item={1} />
        </Section>
        <Section title="hola" description="hola"></Section>
      </div>
    </>
  );
};

export default AboutMe;
