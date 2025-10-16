import { Icons, Logos } from "@/constants";
import Button from "../common/Button";
import { Quicksand } from 'next/font/google'

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: '500',
    style: "normal"
})
const Header: React.FC = () => {
    return (
        <>
            <div className=" max-sm:hidden
        px-7 py-3 border-b border-gray-300 w-full flex items-center justify-between mx-auto
        ">
                <div>
                    <img src={Logos.alx} alt="alx logo" className="h-6" />
                </div>
                <div className="flex  max-w-3xl items-center py-2 px-4 border border-gray-200 rounded-4xl">
                    <div className="flex-1 border-r border-r-gray-300 py-1 px-2">
                        <h3 className="text-[14px] font-bold">Location</h3>
                        <p className="text-[13px] font-normal  text-gray-400">Search for destination</p>
                    </div>
                    <div className="border-r border-r-gray-300 py-1 px-6">
                        <h3 className="text-[14px] font-bold">Check in</h3>
                        <div className="flex items-center space-x-1.5">
                            <p className="text-[13px] font-normal text-gray-400">Add date</p>
                            <img src={Icons.date} alt="calender Icon" className="h-4" />
                        </div>
                    </div>
                    <div className="border-r border-r-gray-300 py-1 px-6">
                        <h3 className="text-[14px] font-bold">Check out</h3>
                        <div className="flex items-center space-x-1.5">
                            <p className="text-[13px] font-normal text-gray-400">Add date</p>
                            <img src={Icons.date} alt="calender Icon" className="h-4" />
                        </div>
                    </div>
                    <div className="py-1 px-8">
                        <h3 className="text-[14px] font-bold">People</h3>
                        <p className="text-[13px] font-normal text-gray-400">Add guest</p>
                    </div>
                    <div className="bg-[#FFA800] p-2 rounded-full">
                        <img src={Icons.magnifier} alt="search Icon" className="h-6" />
                    </div>
                </div>
                <div className="space-x-3 hidden lg:flex">
                    <Button text="Sign in" text_color="white" bg_color="green" />
                    <Button text="Sign up" text_color="black" bg_color="white" />
                </div>
            </div>
            <div className="
            px-5 py-4 flex items-center justify-between space-x-4 sm:hidden border-b border-gray-200
            ">
                <div className="flex justify-between flex-1 items-center border border-gray-200 py-3 px-4 rounded-full font">
                    <div className="flex flex-col">
                        <h2 className={quicksand.className}>Where to</h2>
                        <div className={`flex font-normal text-[13px] text-gray-400 space-x-2 items-center ${quicksand.className}`}>
                            <p>Location</p>
                            <div className="bg-gray-500 rounded-full h-1 w-1"></div>
                            <p>Date</p>
                            <div className="bg-gray-500 rounded-full h-1 w-1"></div>
                            <p>Add guest</p>
                        </div>
                    </div>
                    <div className="bg-[#FFA800] p-2 rounded-full">
                        <img src={Icons.magnifier} alt="search Icon" className="h-6" />
                    </div>
                </div>
                <div>
                    <img src={Icons.profile1} alt="" />
                </div>
            </div>
        </>
    )
}
export default Header;