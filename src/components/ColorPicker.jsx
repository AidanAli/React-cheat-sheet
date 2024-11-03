import React, { useState } from "react"



function ColorPicker(){
    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(event){
        setColor(event.target.value)
    }

    return(
        <div>
            <h1>
                Select Color Picker

            </h1>
            <div className="color-display" style={{backgroundColor: color}}>
                <p>Select Color: {color}</p>
            </div>
            <label>
                Select a color
                <input type="color" value={color} onChange={handleColorChange}/>
            </label>
        </div>
        
    )

}
export default ColorPicker