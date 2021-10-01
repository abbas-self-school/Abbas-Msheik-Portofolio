import BigNavbar from './nav-big-device/index';
import SmallNavbar from './nav-small-device/index';



function Navbar(props) {

        return (
            <div className="w-[100%] xl:w-[90%] m-auto flex flex-row font-ubunutu z-10">
                <BigNavbar />
                <SmallNavbar />
            </div>
        );
}

export default Navbar;