import React, { useEffect, useState } from 'react'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';

function Exprience({state}) {
    const [education , setEducation] = useState("");
    const [exprience , setExprience] = useState("");

    useEffect(()=> {
        const {contract} = state;
        const educationAndExprience = async () => {
            const education = await contract.methods.allEductationDetails().call();
            const exprience = await contract.methods.allExperienceDetails().call();
            setEducation(education);
            setExprience(exprience);
        }
        contract && educationAndExprience();
    } , [state] )

  return (
    <div className='flex text-center flex-col bg-emerald-900 p-10'>
        <h1 className='text-2xl text-white font-bold'  >Education</h1>

        <div className='flex flex-wrap gap-10 justify-center my-5'>
            {
                education &&
                education.map((details, i) => (
                    <Card key={i} className='bg-emerald-950 '>
                        <CardHeader >
                            <CardTitle className="uppercase"  >{details.degree}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm text-green-500 capitalize'>{details.knowledgeAcquired}</p>
                            <p className='text-sm'>{details.instutionName}</p>
                        </CardContent>
                        <CardFooter ><p>{details.date}</p></CardFooter>
                    </Card>
                ))
            }
        </div>

        <h1 className='text-2xl text-white font-bold'  >Exprience</h1>

        <div className='flex flex-wrap gap-10 justify-center my-5 mt-10'>
            {
                exprience &&
                exprience.map((details, i) => (
                    <Card key={i} className='bg-emerald-950 w-[300px]  '>
                        <CardHeader >
                            <CardTitle className="uppercase"  >{details.compamyName}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className='text-sm text-green-500 capitalize'>{details.knowledgeAcquired}</p>
                            <p className='text-sm'>{details.post}</p>
                            <p>{details.date}</p>
                        </CardContent>
                    </Card>
                ))
            }
        </div>

    </div>
  )
}

export default Exprience