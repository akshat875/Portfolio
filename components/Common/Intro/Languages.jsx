import { Progress } from "antd"
import { useEffect, useState } from "react"

const Languages = () => {
    const [MERN, setMERN] = useState(0)
    const [JAVA, setJAVA] = useState(0)

    useEffect(() => {
        const timer = setInterval(() => {
            if (MERN < 75) {
                setMERN(prevCount => prevCount + 1);
            }
            if (JAVA < 80) {
                setJAVA(prevCount => prevCount + 1);
            }
        }, 30);

        return () => clearInterval(timer);
    }, [MERN, JAVA])
    return (
        <div className="flex flex-col space-y-1 pt-6">
            <div className="flex flex-col gap-y-4">
                <span className='text-Snow text-xs font-bold'>Languages</span>
                <div className="flex flex-row items-center justify-center space-x-6">
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={MERN} size={75} />
                        <span className='text-xs font-bold text-Snow'>MERN</span>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-y-2">
                        <Progress strokeColor="#1fdf64" type="circle" percent={JAVA} size={80} />
                        <span className='text-xs font-bold text-Snow'>JAVA</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Languages