import TextInputForm from "./TextInputForm";
import { useState } from "react";

  // container component for TextInputForm
function TextInputFormContainer({onSubmit}){
    const[value, setValue] = useState('');
    const[inputType, setInputType] = useState('password');

    function handleFormSubmit(event){
        event.preventDefault();
        console.log("Form submitted", value);
        onSubmit ?. (value); // if onSubmit is defined then call it with value
    }

    function handleTextInputChange(event){
        console.log("input text changed");
        console.log(event.target.value);
        setValue(event.target.value);
        
    }

    return(
        // calling presentation layer component
        <TextInputForm
            handleFormSubmit = {handleFormSubmit}
            handleTextInputChange = {handleTextInputChange}
            value = {value}
            inputType={inputType}
            setInputType= {setInputType}
        />
    );

}
export default TextInputFormContainer;