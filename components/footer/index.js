import Link from 'next/link';

function Footer() {

    return (
        <div className="w-[100%] bg-[#191919] select-none">
            <div className="w-[100%] xl:w-[90%] m-auto flex flex-col items-center justify-center xl:flex-row my-3">
                <div className="w-[90%] xl:w-[33.33%] flex flex-row items-center justify-center">
                    <p className="text-lg text-white font-bold xl:text-lg mr-3"> © Developed by: 
                        <span className="cursor-pointer text-mainCol text-lg font-bold">
                            <Link href="/"> Abbas Msheik</Link>
                        </span> 
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Footer;