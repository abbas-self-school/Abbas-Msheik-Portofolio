import { Component, createRef } from 'react';
import { Link } from 'react-scroll';


class SmallNavbar extends Component {
    state = {
        navListHeight: 0,
        navSpanHeight: 40,
        navListFullHeight: 200,
        open: false,
        navElem: createRef()
    }

    handleNavList = () => {
        this.setState({
            ...this.state,
            open: !this.state.open,
        })
    }

    animateNavList = () => {
        let open = this.state.open;
        if(open === true) {
            this.setState({
                ...this.state,
                navListHeight: this.state.navListFullHeight,
            })
        } else {
            this.setState({
                ...this.state,
                navListHeight: 0,
            })
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.animateNavList();
        }, 1)
    }

    render() {
        return (
            <nav className="flex flex-row justify-end items-center relative mt-3 container lg:hidden">
                <div 
                    onClick={this.handleNavList}
                    className="flex flex-col justify-around p-1 h-10 w-10 mr-4 sm:mr-0
                    border-gray-600 border rounded-md hover:shadow-xl cursor-pointer">
                        <span className="w-[90%] mx-auto border-2 border-white"></span>
                        <span className="w-[90%] mx-auto border-2 border-white"></span>
                        <span className="w-[90%] mx-auto border-2 border-white"></span>
                </div>
                <div ref={this.navElem} style={{height: this.state.navListHeight}} 
                className="absolute flex flex-col items-center w-full top-[60px] transition-all duration-700 
                overflow-hidden z-20 bg-white">
                    <Link style={{height: this.state.navSpanHeight}}>
                        <span  
                            className="w-full text-center font-Bodoni bg-white py-2
                            text-md hover:text-mainCol transition-all duration-300 cursor-pointer">Home
                        </span>
                    </Link>
                    <Link style={{height: this.state.navSpanHeight}} to="AboutMe" smooth={true} duration={500}>
                        <span
                            className="w-full text-center font-Bodoni bg-white py-2
                            text-md hover:text-mainCol transition-all duration-300 cursor-pointer">About Me
                        </span>
                    </Link>
                    <Link style={{height: this.state.navSpanHeight}} to="mySkills" smooth={true} duration={500}>
                        <span
                            className="w-full text-center font-Bodoni bg-white py-2
                            text-md hover:text-mainCol transition-all duration-300 cursor-pointer">My Skills
                        </span>
                    </Link>
                    <Link style={{height: this.state.navSpanHeight}} to="myWorks" smooth={true} duration={500}>
                        <span
                            className="w-full text-center font-Bodoni bg-white py-2
                            text-md hover:text-mainCol transition-all duration-300 cursor-pointer">My Works
                        </span>
                    </Link>
                    <Link style={{height: this.state.navSpanHeight}} to="contactMe" smooth={true} duration={500}>
                        <span
                            className="w-full text-center font-Bodoni bg-white py-2
                            text-md hover:text-mainCol transition-all duration-300 cursor-pointer">Contact Me
                        </span>
                    </Link>
                </div>
            </nav>
        );
    }
}

export default SmallNavbar;