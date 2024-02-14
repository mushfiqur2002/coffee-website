import { useLoaderData } from "react-router-dom";
import CardBox from "./CardBox";

const Card = () => {
    const loadedData = useLoaderData();
    return (
        <div className="flex flex-col gap-12">
            <h1 className="text-4xl pt-10">this is card... coffee items : <span className="text-red-500">{loadedData.length}</span></h1>
            <div className="grid grid-cols-2 place-items-center">
                {
                    loadedData.map(card=> <CardBox key={card._id} card={card}></CardBox>)
                }
            </div>
        </div>
    );
};

export default Card;