const Add = () => {

    const handleSubmission = (event) => {
        event.preventDefault();
        const form = event.target;
        const coffeeName = form.coffeeName.value;
        const quantity = form.quantity.value;
        const supplerName = form.supplerName.value;
        const taste = form.taste.value;
        const category = form.category.value; // Fix here
        const details = form.details.value;
        const photo = form.photo.value;
        const newCoffee = {coffeeName,quantity,supplerName,taste,category,details,photo};

        // ---> send data to server site
        fetch('http://localhost:3000/coffee',{
            method : 'POST',
            headers : {
                'content-type':'application/json',
            },
            body : JSON.stringify(newCoffee)
        })
        .then(res => res.json())
        .then(data => console.log(data));

        // console.log(`coffee : ${coffeeName} quantity : ${quantity} suppler : ${supplerName} taste : ${taste} category : ${category} details : ${details} photo : ${photo}`);
      };
    return (
        <div>
            <div className="w-full">
                <div className="hero min-h-screen bg-base-200">
                    <div className="w-full md:w-[90%] card shrink-0 shadow-2xl bg-base-100 flex flex-col justify-center items-center py-10  md:p-10">
                        <div>
                            <h1 className="text-4xl">Add New Coffee Docmunet</h1>
                        </div>
                        <form className="card-body w-full md:w-[85%] p-4 md:p-[2rem]" onSubmit={handleSubmission}>
                            <div className="informationContainer grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* --- coffee name --- */}
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Coffee Name</span>
                                    </label>
                                    <input type="text" placeholder="enter coffee name" name="coffeeName" className="input input-bordered" required />
                                </div>

                                {/* --- quantity --- */}
                                <div className="form-control quantity">
                                    <label className="label">
                                        <span className="label-text">Available Quantity</span>
                                    </label>
                                    <input type="number" placeholder="quantity" name="quantity" className="input input-bordered" required />
                                </div>

                                {/* --- suppler name --- */}
                                <div className="form-control supplerName">
                                    <label className="label">
                                        <span className="label-text">Suppler Name</span>
                                    </label>
                                    <input type="text" placeholder="suppler name" name="supplerName" className="input input-bordered" required />
                                </div>

                                {/* --- taste --- */}
                                <div className="form-control taste">
                                    <label className="label">
                                        <span className="label-text">Taste</span>
                                    </label>
                                    <input type="text" placeholder="taste" name="taste" className="input input-bordered" required />
                                </div>

                                {/* --- category --- */}
                                <div className="form-control taste">
                                    <label className="label">
                                        <span className="label-text">Category</span>
                                    </label>
                                    <input type="text" placeholder="Category" name="category" className="input input-bordered" required />
                                </div>


                                {/* --- details --- */}
                                <div className="form-control taste">
                                    <label className="label">
                                        <span className="label-text">Details</span>
                                    </label>
                                    <input type="text" placeholder="details" name="details" className="input input-bordered" required />
                                </div>
                            </div>

                            <div className="imageContainer">
                                {/* --- image --- */}
                                <div className="form-control taste">
                                    <label className="label">
                                        <span className="label-text">Photo URL</span>
                                    </label>
                                    <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                                </div>
                            </div>

                            {/* --- button --- */}
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Add;