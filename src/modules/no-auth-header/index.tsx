import React, {FC} from 'react'



type NoAuthHeaderProps = {
    withAuthAction : boolean
}



const NoAuthHeader : FC<NoAuthHeaderProps> = ({ withAuthAction }) => {
    return (
        <div className="">
            Hey header here ...
        </div>
    )
}


export default NoAuthHeader