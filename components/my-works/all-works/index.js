import React, {useState} from 'react';
import Link from 'next/link';

const AllWorks = () => {
    const [works, setWorks] = useState([
        {img: "/imgs/works/compressImages.png", link: "https://admiring-easley-a937dd.netlify.app/"},
        {img: "/imgs/works/todos.png", link: "https://dreamy-borg-cb516f.netlify.app/"},
        {img: "/imgs/works/eCommerce.png", link: "https://kind-gates-db72b1.netlify.app/"},
        {img: "/imgs/works/weather.jpg", link: "https://affectionate-cori-da74ee.netlify.app/"}
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