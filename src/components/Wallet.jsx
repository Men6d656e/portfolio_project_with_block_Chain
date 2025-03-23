import React, { useState } from 'react';
import ABI from '../../contract/ABI.json';
import Web3 from "web3";


function Wallet({saveState}) {
    const [conected, setconected] = useState(true);
    const init = async () => {
        try {
            const web3 = new Web3(window.ethereum);
            await window.ethereum.request({ method : 'eth_requestAccounts'});
            const contract = new web3.eth.Contract(
                ABI,
                "0x3230A166eAEbc9ECFAf987A7e7241c092f86f2c4"
            );
            setconected(false);
            saveState({web3:web3, contract:contract});
        } catch (error) {
            console.log(error);
            alert("plese install meta mask");
        } 
    }

    return (
    <div className='flex w-full justify-end h-[60px] bg-blue-700 px-5'>
        <button className='border  rounded-sm m-2 px-5' onClick={init} disabled={!conected}> {conected? "Connect metamask" : "connected" }</button>
    </div>
  )
}

export default Wallet