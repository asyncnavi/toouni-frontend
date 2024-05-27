import { IconSchool } from "@tabler/icons-react"

type LoadingOverlayProps = {
    loading : boolean
}


export default function LoadingOverlay({ loading  } : LoadingOverlayProps  ) {
    return (
        loading ? 
        <div className="bg-white absolute top-0 bottom-0 right-0 left-0 z-[99999] flex justify-center items-center w-full h-screen">
               <IconSchool className="w-15 h-15 animate animate-pulse" /> 
        </div> : null
    )
}