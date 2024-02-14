const CardBox = ({ card }) => {
    const { coffeeName, quantity, supplerName, taste, category, details, photo } = card;
    return (
        <div className="w-full flex justify-center item-center">
            <div className="hero-content flex-col lg:flex-row w-[85%] h-[200px] border ">
                <img src={photo} className="max-w-sm rounded-lg shadow-2xl" />
                <div>
                    <h1 className="text-3xl font-bold">coffee name : {coffeeName}</h1>
                    <h1 className="text-3xl font-bold">suppler name : {supplerName}</h1>
                    <h1 className="text-3xl font-bold">taste : {coffeeName}</h1>
                </div>
            </div>
        </div>
    );
};

export default CardBox;