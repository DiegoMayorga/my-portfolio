import "../../styles/pages/aboutme.scss";
import Card from "../organisms/Card";
import { PERSONAL_INFO } from "../../data/data";

const Home: React.FC = () => {
  const handleButtonClick = (buttonPressed: string) => {
    alert(buttonPressed);
  };

  return (
    <div>
      <h1>About me</h1>
      <div className="about-me">
        <Card
          {...PERSONAL_INFO[0]}
          buttonLabel="My Curriculum"
          buttonVariant="primary"
          onButtonClick={() => handleButtonClick("my-cv")}
        />
        {/* <Card
          {...PERSONAL_INFO[1]}
          buttonLabel="Work experience"
          buttonVariant="primary"
          onButtonClick={() => handleButtonClick("experience")}
        />
        <Card
          {...PERSONAL_INFO[1]}
          buttonLabel="Studies"
          buttonVariant="primary"
          onButtonClick={() => handleButtonClick("studies")}
        /> */}
      </div>
    </div>
  );
};

export default Home;
