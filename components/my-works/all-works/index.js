import React, {useState} from 'react';
import Link from 'next/link';

const AllWorks = () => {
    const [works, setWorks] = useState([
        {img: "/imgs/works/compressImages.png", link: "https://compression-images.vercel.app/"},
        {img: "/imgs/works/todos.png", link: "https://nextjs-todolist-pi.vercel.app/"},
        {img: "/imgs/works/eCommerce.png", link: "https://e-cmmerce-plsp.vercel.app/"},
        {img: "/imgs/works/weather.png", link: "https://weather-app-abbas-msheik.vercel.app/"}
    ]);
    return (
        <div className="flex flex-row flex-wrap w-[98%] xl:w-[90%] mx-auto my-5">
            {works.map((work, index) => {
                return (
                    <div key={index}
                        className="relative w-[49%] h-[200px] xl:h-[400px] mr-[0.5%] ml-[0.5%] bg-white my-2
                        rounded-md cursor-pointer hover:animate-pulse"
                    >
                        <Link href={work.link}>
                            <a target="_blank">
                            <img src={work.img} alt="skill"
                                className="w-full h-full"
                            />
                            </a>
                        </Link>
                    </div>
                );
            })}
        </div>
    )
}
export default AllWorks;