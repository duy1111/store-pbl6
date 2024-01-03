import { Billboard as BillboardType } from "@/type";

interface BillboardProps {
    data: BillboardType
}

const Billboard: React.FC<BillboardProps> = ({data}) => {
    return ( 
        <div className="p-4 sm:p-6 lg:p-8 rounded-xl overflow-hidden" >
            <div 
                style={{ backgroundImage: `url(${data?.imageUrl})`}}
                className="rounded-xl relative aspect-square md:aspect-[2.4/1] overflow-hidden bg-cover"
            >
                <div 
                    className="h-full w-full flex flex-col justify-center items-center text-center gap-y-8"
                >

                    <div 
                        className=" font-bold text-3xl md:text-6xl bg-gray-950  opacity-80  p-5 rounded-lg   drop-shadow-xl text-transparent"
                        
                        //text-white  px-4 p-2 rounded-md pb-4 w-fit 
                    >
                        {data?.label}
                    </div>
                    <div className=" font-bold text-3xl md:text-6xl text-white absolute">{data?.label}</div>

                </div>
            </div>
        </div>
     );
}
 
export default Billboard;