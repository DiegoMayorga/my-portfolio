import { useState } from "react";
import { SMALL_CARD_INFO, MEDIUM_CARD_INFO } from "../../data/data";
import Card from "../molecules/Card";
import "../../styles/templates/aboutme-card.scss";

const AboutMeCard: React.FC = () => {
  const [selectedTopic, setselectedTopic] = useState("");

  const handleButtonClick = (buttonPressed: string) => {
    setselectedTopic(buttonPressed);
  };

  let cardSelected = SMALL_CARD_INFO.map((smallItem) => (
    <Card
      {...smallItem}
      onButtonClick={() => handleButtonClick(smallItem.id)}
    />
  ));

  if (selectedTopic === "about-me") {
    cardSelected = MEDIUM_CARD_INFO.map((mediumItem) => (
      <Card
        cardSize="medium"
        {...mediumItem}
        onButtonClick={() => handleButtonClick(mediumItem.id)}
      />
    ));
  }
  return <div className="about-me">{cardSelected}</div>;
};

export default AboutMeCard;
