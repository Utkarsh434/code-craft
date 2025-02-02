"use client";
import { useEffect, useState } from "react"

const useMountedd = () => {
    const [mounted,setMounted] = useState(false);

    useEffect(()=>{
        setMounted(true);
    },[])
    return mounted
}

export default useMountedd
