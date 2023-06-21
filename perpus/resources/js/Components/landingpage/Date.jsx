import { useEffect, useState } from "react";

function Tanggal(){
    const [date, setDate] = useState(new Date());
    useEffect(()=>{
        const timer = setInterval(()=>{
            setDate(new Date())
        }, 1000)
        return ()=>{
            clearInterval(timer)
        }
    }, [])
    const transform = (tes) => {
        return tes < 10? '0'+tes : tes
    }
    const hari =[
        "Senin", "Selasa", "Rabu", "Kamis", "Jum'at", "Sabtu", "Minggu"
    ]
    const bulan = [
        "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"
    ]

    return(
        <h1 className="text-xl text-white text-center">
            {hari[date.getDay()-1]+", "+transform(date.getDate())+" "+bulan[date.getMonth()]+" "+date.getFullYear() +"   "+ transform(date.getHours()) +":"+transform(date.getMinutes())+":"+transform(date.getSeconds())}
        </h1>
    )
}

export default Tanggal
