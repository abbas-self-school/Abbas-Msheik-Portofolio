import React, {useState} from 'react';

const AllSkills = () => {

    const [skills, setSkills] = useState([
        "/imgs/logos/html.png",
        "/imgs/logos/css.png",
        "/imgs/logos/bootstrap.png",
        "/imgs/logos/sass.png",
        "/imgs/logos/tailwind.jpg",
        "/imgs/logos/js.png",
        "/imgs/logos/jquery.png",
        "/imgs/logos/react.png",
        "/imgs/logos/next.png",
        "/imgs/logos/github.png",
    ]);

    return (
        <div className="flex flex-row flex-wrap w-[98%] xl:w-[90%] mx-auto my-5">
            {skills.map((skill, index) => {
                return (
                    <div key={index}
                        className="w-[49%] xl:w-[20%] h-[180px] mx-[0.5%] xl:mx-[2.5%] bg-white my-2 p-6
                        rounded-md cursor-pointer hover:animate-pulse"
                    >
                        <img src={skill} alt="skill"
                            className="w-full h-full"
                        />
                    </div>
                );
            })}
        </div>
    )
}

export default AllSkills;