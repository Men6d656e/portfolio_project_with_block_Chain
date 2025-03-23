
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link";
import { useEffect, useState } from "react"
import { FormEthDonate } from "./ui/FormEthDonate";



function Projects({state}) {

    const [projects , setprojects] = useState("");
    const [modal , setmodal] = useState(false);
    const [ethDon , setethDon] = useState('');
    const toogle = () => {
        setmodal(!modal)
    }

    const donateEth = async () => {
        try {
            const {contract , web3} = state;
            const weiValue = web3.utils.toWei(ethDon, 'ether');
            const account = await web3.eth.getAccounts();
            await contract.methods.donate().send({from: account[0], value: weiValue, gas: 4800000});
            alert('Donation Successfull');
        } catch (error) {
            alert('Donation Failed');
        }
    }

    useEffect(() => {
        const {contract} = state;
        const projectDetails = async () => {
            const projects = await contract.methods.allProjects().call();
            console.log(projects);
            setprojects(projects);
        }
        contract && projectDetails();
    },[state])


    return (
        <div className='flex gap-5 mt-5 flex-col justify-center items-center p-5 bg-black'>
            <div>
                <h1 className="font-bold text-3xl">Projects</h1>
            </div>
            <div className='cards flex justify-around items-center gap-5'>
                {projects && projects.map((dat , i) => (
                    <Card key={i} className="w-[200px]">
                        <CardHeader>
                            <CardTitle className="uppercase">{dat.name}</CardTitle>
                            <CardDescription className="capitalize mt-2 h-[70px] ">{dat.description}</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Link  href={`https://gold-elegant-clam-793.mypinata.cloud/ipfs/${dat.image}`} target="_blank">
                            <Image src={`https://gold-elegant-clam-793.mypinata.cloud/ipfs/${dat.image}`} width={200} height={200} alt={dat.description} />
                            </Link>
                        </CardContent>
                        <CardFooter className="text-center flex justify-center items-center text-green-500">
                            <Link className="text-xs" href={`https://github.com/${dat.githubLink}`} >View Github Account</Link>
                        </CardFooter>
                    </Card>
                ))}
            </div>
            <div>
                <button className=' rounded-sm m-2 py-2 cursor-pointer px-5 bg-blue-700 ' onClick={toogle}> liked the projects? consider donating Eth's </button>
            </div>
            <div className="bg-black relative ">
                { modal && <>
                    <div className="absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center bg-black ">

                    <FormEthDonate toogle={toogle} setethDon={setethDon} donateEth={donateEth}/>
                    </div>
                </>
                    }
            </div>
        </div>
    )
}

export default Projects