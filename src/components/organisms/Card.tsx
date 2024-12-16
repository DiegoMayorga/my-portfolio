import "../../styles/organisms/card.scss";
import Button from "../atoms/Button";

interface CardProps {
  title: string;
  description: string;
  image?: string;
  buttonLabel?: string;
  buttonVariant?: "primary" | "secondary" | "danger";
  onButtonClick?: () => void;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  buttonLabel,
  buttonVariant = "primary",
  onButtonClick,
}) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="card__image" />
      <h4 className="card__title">{title}</h4>
      <p className="card__description">{description}</p>
      {buttonLabel && (
        <Button variant={buttonVariant} onClick={onButtonClick}>
          {buttonLabel}
        </Button>
      )}
    </div>
  );
};

export default Card;
