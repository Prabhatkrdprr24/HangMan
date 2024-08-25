import getButtonStyling from "./getButtonStyleType"

function Button({text, buttonType = "button", styleType, onClickHandler}){
    return(
        <button
            type={buttonType}
            onClick={onClickHandler}
            className={`px=5px py=5px ${getButtonStyling(styleType)} rounded-md transition-all`}
        >
            {text}
        </button>
    );
}
export default Button;