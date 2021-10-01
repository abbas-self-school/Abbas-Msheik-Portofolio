import React from 'react';

const CvDownload = () => {
    return (
        <div className="flex flex-row justify-center mx-auto my-3">
            <a href="https://drive.google.com/file/d/1lwOLB1zuWyUsCqBeWWyNgzjcLU31dalB/view?usp=sharing" 
                download
                target="_blank"
                className="py-3 px-10 bg-mainCol font-Bodoni font-medium rounded-sm cursor-pointer 
                hover:px-14 transition-all duration-300"
            >
                Download CV
            </a>
        </div>
    )
}

export default CvDownload;