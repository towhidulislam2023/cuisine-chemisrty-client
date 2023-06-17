

const Offer = () => {
    return (
        <div className="md:w-[75%] md:mx-auto my-10 mx-6 ">
            <section className="overflow-hidden rounded-lg shadow-2xl md:grid md:grid-cols-3 items-center">
                <img
                    alt="Trainer"
                    src="https://img.freepik.com/free-photo/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.jpg?w=740&t=st=1687026335~exp=1687026935~hmac=3c6dd8218eb0e0716038942ab0f11e50c49f334270311410a9096efa86c48fcf"
                    className="h-32 w-full object-cover md:h-full"
                />

                <div className="p-4 text-center sm:p-6 md:col-span-2 lg:p-8">
                    <p className="text-sm font-semibold uppercase tracking-widest">
                        Pick up Your Food
                    </p>

                    <h2 className="mt-6 font-black uppercase">
                        <span className="text-4xl font-black sm:text-5xl lg:text-6xl">
                            Get 20% off
                        </span>

                        <span className="mt-2 block text-sm">On your next order over $50</span>
                    </h2>

                    <a
                        className="mt-8 inline-block w-full bg-warning text-black py-4 text-sm font-bold uppercase tracking-widest rounded-md"
                        href=""
                    >
                        Get Discount
                    </a>

                    <p className="mt-8 text-xs font-medium uppercase text-gray-400">
                        Offer valid until 24th March, 2040 *
                    </p>
                </div>
            </section>
      </div>
    );
};

export default Offer;