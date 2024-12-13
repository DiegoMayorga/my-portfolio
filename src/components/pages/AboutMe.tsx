/* import Card from "../organisms/Card"; */
import "../../styles/pages/aboutme.scss";
import Card from "../organisms/Card";
import { PERSONAL_INFO } from "../../data/data";

const Home: React.FC = () => {
  const handleButtonClick = () => {
    alert("Card button clicked.");
  };

  return (
    <div>
      <h1>About me</h1>
      <div className="about-me">
        <Card
          {...PERSONAL_INFO[0]}
          buttonLabel="My Curriculum"
          buttonVariant="primary"
          onButtonClick={handleButtonClick}
        />
        <Card {...PERSONAL_INFO[1]} />
        <Card {...PERSONAL_INFO[1]} />
      </div>
    </div>
  );
};

export default Home;
