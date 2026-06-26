import React from 'react'
import { getAllModels } from '../lib/models'

const ModelPage = async() => {
    const models = await getAllModels()

  return (
    <div className='mt-10 mx-15'>
        <h1 className='montserrat font-bold text-[32px]'>3D Models</h1>

        {models.map((model)=> (
            <div key={model.id}>
                <h2>{model.name}</h2>
            </div>
        ))}
    </div>
  )
}

export default ModelPage