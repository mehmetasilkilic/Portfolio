import "./footer.scss";
import { Person, Mail } from "@material-ui/icons";

const Footer = () => {
  return (
    <footer>
      <div className="left">
          <div className="itemContainer">
            <Person className="icon" />
            <span>+90 542 387 00 87</span>
          </div>
          <div className="itemContainer">
            <Mail className="icon" />
            <span>mehmetasil96@gmail.com</span>
          </div>
        </div>
    </footer>
  );
}

export default Footer

