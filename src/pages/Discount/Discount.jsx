import img1 from '../../assets/1.png';
import img2 from '../../assets/2.png';
import img3 from '../../assets/3.png';
import img4 from '../../assets/4.png';
import img5 from '../../assets/5.png';
import img6 from '../../assets/6.png';
const Discount = () => {
    return (
        <div className="md:w-[75%] mx-auto my-10">

            <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 items-center">
                <div className="p-8 md:p-12 lg:px-16 lg:py-24">
                    <div
                        className="mx-auto max-w-xl text-center ltr:sm:text-left rtl:sm:text-right"
                    >
                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                            Choose your favorite burger with an amazing discount!
                        </h2>

                        <p className="hidden text-gray-500 md:mt-4 md:block">
                            Indulge in your favorite burger selection, now with an amazing discount!
                            Savor your preferred burger at an unbeatable discounted price.
                            Experience the perfect combination of flavor and savings with our enticing discount on your favorite burger.
                        </p>

                        <div className="mt-4 md:mt-8">
                            <a
                                href="#"
                                className="inline-block rounded bg-yellow-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-yellow-700 focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                                Get Started Today
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="h-96  carousel carousel-vertical  mx-auto">
                        <div className="carousel-item h-full">
                            <img className='mx-auto' src={img1} />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='mx-auto' src={img2} />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='mx-auto'  src={img3} />
                        </div>
                        <div  className="carousel-item h-full">
                            <img className='mx-auto' src={img4} />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='mx-auto' src={img5} />
                        </div>
                        <div className="carousel-item h-full">
                            <img className='mx-auto'  src={img6} />
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default Discount;