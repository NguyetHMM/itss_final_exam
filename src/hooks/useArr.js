import { useState } from "react";

function useArr(arr)  {
    console.log(arr)
    const [selectedItem, setselecedItem] = useState()
    const [selectedIndex, setSelectedIndex] = useState()

    const handleChange = event => {
        setselecedItem(event.target.value)
    }


    const findSelectedIndex = () => {
        let index = arr.indexOf(selectedItem)
        if (index !== -1) 
            setSelectedIndex(index+1)
        else setSelectedIndex(NaN)
    }

    const printArr = () =>{
        let arrPrint = '[';

        for(let i = 0; i < arr.length; i++)
            arrPrint = arrPrint + arr[i] + ","

        arrPrint = arrPrint.substring(0, arrPrint.length-1);
        arrPrint = arrPrint + "]"
        return arrPrint
    }

    return [selectedItem, selectedIndex, handleChange, findSelectedIndex, printArr]

}

export default useArr;