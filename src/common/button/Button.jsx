import ButtonWrapper from "./Button.style";

import buttonHoverShape from "../../assets/images/icon/button-hover-shape.svg";

const Button = ({ children, ...props }) => {
  return (
    <ButtonWrapper type="submit" className="bithu-btn" {...props}>
      {children}

      <img
        src={buttonHoverShape}
        className="hover-shape shape-left"
        alt="bithu nft button hover shape"
      />
      <img
        src={buttonHoverShape}
        className="hover-shape shape-right"
        alt="bithu nft button hover shape"
      />
    </ButtonWrapper>
  );
};

export default Button;
