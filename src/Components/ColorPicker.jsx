import React, { useState } from 'react';
import { MdContentCopy } from "react-icons/md";

function ColorPicker({ getcolor }) {

    const [pickColor, setPickColor] = useState('#93c6fc');
    const [alert, setAlert] = useState(false);

    const handleColorPicker = (e) => {
        const value = e.target.value;
        setPickColor(value);
        getcolor(value); // Changed to value to get the updated color
    }

    const copyToClipboard = async () => {
        try {
            setAlert(true);
            await navigator.clipboard.writeText(pickColor);
            setTimeout(() => {
                setAlert(false);
            }, 2000);
        } catch (error) {
            console.error('Failed to copy: ', error);
        }
    }

    return (
        <div className='flex flex-col items-center'>
            <div className='flex items-center space-x-4'>
                <input
                    className='border bg-white cursor-pointer w-12 h-12'
                    value={pickColor}
                    type="color"
                    onChange={handleColorPicker}
                />
                <p className='text-lg text-gray-900 border px-4 py-1 rounded-md'>{pickColor}</p>
                <button
                    onClick={copyToClipboard}
                    className='hover:scale-110 duration-150 p-2 cursor-pointer'>
                    <span className='text-[20px] text-gray-500'><MdContentCopy /></span>
                </button>
            </div>
            {alert && <p className='font-medium text-green-600 mt-2'>Copied!</p>}
        </div>
    );
}

export default ColorPicker;
