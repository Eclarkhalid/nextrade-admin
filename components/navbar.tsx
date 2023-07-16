import { UserButton, auth } from "@clerk/nextjs";
import {MainNavbar} from "./main-nav";
import StoreSwitcher from "./store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";

const Navbar = async () => {
    const {userId} = auth();
    if (!userId) {
        redirect("/sign-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        }
    })
    return (<>
        <div className="border-b flex h-16 items-center px-4">
            <div className="store-switcher space-x-4">
                <StoreSwitcher items={stores} />
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