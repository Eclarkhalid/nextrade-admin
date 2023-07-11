import { UserButton } from "@clerk/nextjs";
import {MainNavbar} from "./main-nav";
import StoreSwitcher from "./store-switcher";

const Navbar = () => {
    return (<>
        <div className="border-b flex h-16 items-center px-4">
            <div className="store-switcher space-x-4">
                <StoreSwitcher items={[]} />
            </div>

            <div className="routes px-3">
                <MainNavbar className="mx-6" />
            </div>

            <div className="ml-auto flex items-center space-x-4">
                <UserButton afterSignOutUrl="/" />
            </div>
        </div>
    </>);
}

export default Navbar;