import React from 'react';

const MyPic = () => {
    return (
        <div className="flex relative w-[250px] h-[250px] rounded-[50%] bg-white overflow-hidden mt-14 p-4
            m-auto my-5 border-4 border-mainCol">
            <img src="/imgs/my-pic.jpg" alt="developer profile picture" className="w-full h-full rounded-[50%]" />
        </div>
    )
}

export default MyPic;