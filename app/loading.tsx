/*
    © Cesar Almendarez 2022
    -Loading.tsx-
        ***
    -TODO-
        ***
*/

import { AiOutlineLoading } from "react-icons/ai";

export default function Loading(){
    return(
        <div className="w-full flex flex-col items-center justify-center pt-16 pb-12">
            <AiOutlineLoading 
                size={45}
                className="text-violet-500 animate-spin"
            />            
        </div>
    );
}