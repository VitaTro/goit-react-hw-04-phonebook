import React, { useState } from "react";


export const useFormValue = initValue => {
    const [value, setValue] = useState(initValue);

    return {
        value, 
        onChange: e => {
            setValue(e.target.value || e.target.innerText);
        }
    };
};