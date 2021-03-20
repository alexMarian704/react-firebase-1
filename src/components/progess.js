import useStorage from '../useStorga';
import React, { useEffect } from 'react'

export default function Progess({ file, setFile }) {
    const { progesss, url } = useStorage(file)

    useEffect(() => {
        if (url)
            setFile(null)
    }, [url, setFile])

    return (
        <div id="progress" style={{
            width: progesss + '%',
            height: "30px",
            background: "red"
        }}></div>
    )
}
