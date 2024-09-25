import Image from "next/image";
import Link from "next/link";

const Record = () => {
    return (
        <div className="py-5 flex items-center justify-center gap-x-2">
            <Image src="/ghs.png" alt="ghs.png" width={20} height={20}/>
            <Link className="text-white" href="https://beian.miit.gov.cn" target="_blank" rel="noopener noreferrer">京ICP备2024088471号</Link>
        </div>
    )
}
export default Record
