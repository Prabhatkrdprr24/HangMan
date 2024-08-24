function getButtonStyling(styleType){
    const primaryButtonstyling = "bg-blue-500 border-blue-700 text-white hover:bg-blue-600 hover:border-blue-900";
    const secondaryButtonStyling = "bg-red-500 border border-red-700 text-white hover:bg-red-600 hover:border-red-900";
    const warningButtonStyling = "bg-yellow-500 border border-yellow-700 text-white hover:bg-yellow-600 hover:border-yellow-900";
    const errorButtonStyling = "bg-red-500 border border-red-700 text-white hover:bg-red-600 hover:border-red-900";

    if(styleType === "primary"){
        return primaryButtonstyling;
    }
    else if(styleType === "secondary"){
        return secondaryButtonStyling;
    }
    else if(styleType === "warning"){
        return warningButtonStyling;
    }
    else if(styleType === "error"){
        return errorButtonStyling;
    }
    else return primaryButtonstyling;
}

export default getButtonStyling;