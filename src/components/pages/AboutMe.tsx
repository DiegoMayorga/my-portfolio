import "../../styles/pages/aboutme.scss";
import Card from "../organisms/Card";
import { MEDIUM_CARD_INFO, SMALL_CARD_INFO } from "../../data/data";
import { useState } from "react";

const Home: React.FC = () => {
  const [selectedTopic, setselectedTopic] = useState("");

  const handleButtonClick = (buttonPressed: string) => {
    setselectedTopic(buttonPressed);
  };

  return (
    <div>
      <h1>About me</h1>
      <div className="about-me">
        {SMALL_CARD_INFO.map((cardInfo) => (
          <Card
            key={cardInfo.id}
            {...cardInfo}
            onButtonClick={() => handleButtonClick(cardInfo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
