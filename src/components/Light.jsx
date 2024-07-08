import { useState } from "react"
function Light() {

    const [color, setColor] = useState ("")
    const [isOn, setIsOn] = useState (false)

    //updateON
    const handleON = () => {
        setColor("yellow")
        setIsOn(true)
    }
    //uodateOFF
    const handleOFF = () => {
        setColor("white")
        setIsOn(false)
    }
    
    return <div className="flex justify-center mt-10">

        <div>
            <div style={{backgroundColor: color}}  className="w-[300px] h-[300px] rounded-full mb-5"></div>

            <button style={{backgroundColor: isOn == true ? "green" : ""}} onClick={handleON} className="bg-yellow-500 ml-20 px-3 py-3 text-3xl m-1">ON</button>
            <button style={{backgroundColor: isOn == false ? "red" : ""}} onClick={handleOFF} className="bg-yellow-500 py-3 px-3 text-3xl m-1">OF</button>
        </div>
    </div>
}

export default Light