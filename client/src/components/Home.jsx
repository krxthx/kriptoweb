import { AiFillPlayCircle } from "react-icons/ai";
import { SiEthereum } from "react-icons/si";
import { BsInfoCircle } from "react-icons/bs"

import { Loader } from './'

const Home = () => {

    return (
        <div className="flex w-full justify-center items-center p-6 mb-12" style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '85vh',

        }}>
            <div className="flex md:flex-row flex-col items-start justify-between md:p-20 py-12 px-4" id="headerID">
                <div>
                    <h1 className="text-black text-gradient t-shadow">kriptoweb.</h1>
                    <p className="text-left text-black font-light md:w-9/12 w-11/12 text-base">Explore the crypto world. Buy and sell cryptocurrencies easily on Kriptoweb.</p>
                    {/* 
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