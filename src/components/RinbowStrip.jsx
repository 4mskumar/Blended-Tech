import React from 'react';

const RainbowStrip = () => {
    return (
        <div className="w-full h-3 flex">
            <div className="flex-1 bg-[#2E374B]"></div>
            <div className="flex-1 bg-[#E4DEC4]"></div>
            <div className="flex-1 bg-[#C6B485]"></div>
            <div className="flex-1 bg-[rgb(147,206,40)]"></div>
            <div className="flex-1 bg-[rgb(245,104,56)]"></div>
            <div className="flex-1 bg-[rgb(196,75,193)]"></div>
            {/* <div className="flex-1 bg-[]"></div> */}
        </div>
    );
};

export default RainbowStrip;