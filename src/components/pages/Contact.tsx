import Divider from "../atoms/Divider";
import "../../styles/pages/contact.scss";

const Contact: React.FC = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <Divider />
      <form className="form">
        <div>
          <label>Email address</label>
          <input type="email" placeholder="name@example.com" />
        </div>
        <div>
          <label>Example select</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <label>Example multiple select</label>
          <select>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div>
          <label>Example textarea</label>
          <textarea></textarea>
        </div>
      </form>
    </div>
  );
};

export default Contact;
