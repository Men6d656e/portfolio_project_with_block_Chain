import React from 'react'

function Skills() {
  return (
    <div className='flex w-full justify-center items-center py-5 bg-amber-950 gap-16'>
        {
            ["Web Developer" , "Block Chain Developer" , "Etherum Developer" , "Solidity" , "Nodejs"].map((skill , i) => {
                return (
                        <div key={i} className='text-xl font-bold'>
                        {skill}
                        </div>
                )
            }
            )
        }
    </div>
  )
}

export default Skills