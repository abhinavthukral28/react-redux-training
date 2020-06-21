import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  buttonRender(color) {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {({ language }) => (language === "english" ? "Submit" : "प्रस्तुत")}
        </LanguageContext.Consumer>
      </button>
    );
  }
  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.buttonRender(color)}
      </ColorContext.Consumer>
    );
  }
}
export default Button;
