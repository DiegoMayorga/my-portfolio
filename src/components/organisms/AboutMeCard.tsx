import { useState } from "react";
import { SMALL_CARD_INFO, MEDIUM_CARD_INFO } from "../../data/data";
import Card from "../molecules/Card";
import "../../styles/organisms/aboutme-card.scss";

interface CardInfo {
  item: number;
}

const AboutMeCard: React.FC<CardInfo> = ({ item }) => {
  const [selectedTopic, setselectedTopic] = useState("");

  const handleButtonClick = (buttonPressed: string) => {
    setselectedTopic(buttonPressed);
  };

  return (
    <div className="about-me">
      {selectedTopic === "about-me" ? (
        <Card
          cardSize="medium"
          {...MEDIUM_CARD_INFO[`${item}`]}
          onButtonClick={() =>
            handleButtonClick(MEDIUM_CARD_INFO[`${item}`].id)
          }
        />
      ) : (
        <Card
          cardSize="small"
          {...SMALL_CARD_INFO[`${item}`]}
          onButtonClick={() => handleButtonClick(SMALL_CARD_INFO[`${item}`].id)}
        />
      )}
    </div>
  );
};

export default AboutMeCard;
