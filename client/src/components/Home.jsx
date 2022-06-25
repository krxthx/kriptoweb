import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs"

import { Loader } from './'
const commonStyles = "min-h-[70px] sm:px-0 px-2 sm:min-w-[120px] flex justify-center items-center border-[0.5px] border -gray-400 "
const Home = () => {
    const connectWallet = () => {

    }
    return (
        <div className="flex w-full justify-center items-center">
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4">
                <div style={{
                    display: 'flex',
                    fontSize: '20vh',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '50vh',
                }}>
                    <h1 className="text-black text-gradient t-shadow" style={{ fontWeight: 'bold' }}>kriptoweb.</h1>
                    {/* <p className="text-left mt-5 text-black font-light md:w-9/12 w-11/12 text-base">Explore the crypto world. Buy and sell cryptocurrencies easily on Kriptoweb.</p>
                    <button
                        type="button"
                        onClick={connectWallet}
                        className="flex flex-row justify-center items-center my-5 bg-[#212121] p-3 rounded-full cursor-pointer hover:bg-[#3e3e3e] shadow"
                    > <p className="text-white text-base font-semibold">Connect Wallet</p>
                    </button> */}

                </div>


            </div>
        </div >
    );
}
export default Home;