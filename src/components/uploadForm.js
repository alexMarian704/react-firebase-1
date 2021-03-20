import React, { useState } from 'react'
import Progess from './progess';

export default function UploadForm() {
    const [file, setFile] = useState(null)
    const [error , setError] = useState(null)

    const changeHandle = (e) => {
        let selected = e.target.files[0];

        const types = ['image/png' , 'image/jpeg']

        if (selected && types.includes(selected.type)){
            setFile(selected);
            setError(null)
        }else{
            setFile(null);
            setError('Select an image(png or jpeg)');
        }
    }
    return (
        <div>
            <form >
                <input type="file" onChange={changeHandle} />
                <div>
                    {error && <h1>{error}</h1>}
                    {file && <h1>{file.name}</h1>}
                    {file && <Progess file={file} setFile={setFile}/>}
                </div>
            </form>
        </div>
    )
}
