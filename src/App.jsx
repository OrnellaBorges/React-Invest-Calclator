import { useState } from "react";
import { INPUT_DATA2 } from "./data/input-data.js";
/* export const INPUT_DATA2 = [
    {
        inputId: "initial",
        inputTitle: "Initial Investment",
        value: 1000,
        type: "number",
        inputName: "initial",
    },
    {
        inputId: "annual",
        inputTitle: "Annual Investment",
        value: 1200,
        type: "number",
        inputName: "annual",
    },] */

import UserInput from "./Component/UserInput";
import Result from "./Component/Result";

function App() {
    // Utilisez l'objet `inputData` directement dans le state initial
    const [inputValues, setInputValues] = useState(INPUT_DATA2);

    // Utilisez l'ID pour identifier l'input sur lequel on tape et la propriété à mettre à jour la nouvelle valeur à mettre a jour
    /*  function handleChange(inputId, newValue) {
        setInputValues((prevValues) => {
            return { ...prevValues, [inputId]: newValue };
        });
        console.log("inputValues", inputValues);
    } */

    function handleChange(inputId, newValue) {
        setInputValues((prevValues) => {
            return prevValues.map((input) =>
                input.inputId === inputId
                    ? { ...input, value: newValue }
                    : input
            );
        });
    }

    return (
        <>
            <h1>React Investment Calculator</h1>
            <UserInput
                prop={jdjd}
                data2={inputValues}
                onChange={handleChange}
            />
            {/* Dans la prop input on lui passe inputvalue qui est la valeur mise a jour par le client */}
            <Result input={inputValues} />
        </>
    );
}

export default App;
