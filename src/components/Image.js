import React from 'react'
import useFirestore from '../useFirestore'

export default function ImageRender({setSelect}) {
    const { docs } = useFirestore('images');
    console.log(docs)
    return (
        <div id="image-contaier">
            {docs.map((doc) => {
                return (
                    <div key={doc.id} onClick={()=>{setSelect(doc.url)}}>
                        <img src={doc.url}/>
                    </div>
                )
            })}
        </div>
    )
}
