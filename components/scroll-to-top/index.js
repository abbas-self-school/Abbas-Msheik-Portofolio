import React, {useEffect, useState, useRef} from "react";
import { useWindowScroll } from "react-use";

const ScrollToTop = () => {
    const { y: pageYOffset } = useWindowScroll();
    const [visible, setVisible] = useState(false);
    const myElementScrollTo = useRef(null)

    useEffect(() => {
        if(pageYOffset > 300) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    }, [pageYOffset])

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth"});

    if(!visible) {
        return false;
    }

    // for scroll to any section follow the command bellow
    const goToMyElement = () => window.scrollTo({ top: myElementScrollTo.current.offsetTop, behavior: "smooth"});
    // this order need an element have a ref={myElementScrollTo} to scroll and event fire this function

    return (
        <div 
            className="fixed bottom-20 right-10 w-32 h-8 bg-mainCol rounded-2xl 
            flex flex-row justify-center items-center cursor-pointer select-none z-50"
            onClick={scrollToTop}
        >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-white animate-animeScroll" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
            </svg>
            <span className="text-white">Scroll to top</span>
        </div>
    )
}

export default ScrollToTop;