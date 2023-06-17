import img1 from '../../assets/grilled-meat-vegetables-make-gourmet-lunch-generative-ai_188544-8879.png';
import "./ourinfo.css"
import img2 from '../../assets/fruit-salad-spilling-floor-was-mess-vibrant-colors-textures-generative-ai_8829-2895.png';
import img3 from '../../assets/double-hamburger-isolated-white-background-fresh-burger-fast-food-with-beef-cream-cheese_90220-1192.png';
import "./ourinfo.css"
const OurInfo = () => {
    return (
        <div className="md:w-[75%] mx-auto ">
            <div className="infoSetvg flex  md:h-[80vh] ">
                <div className="px-4 py-14 md:flex items-center gap-10 bg-white bg-opacity-5">
                    <div className="md:w-[50%]">
                        <h1 className=" text-white"> <span className="font-extralight text-xl text-yellow-500">Discover</span> <br /> <hr /><span className="font-extrabold text-4xl">Our Awesome Food </span> </h1>
                        <p className="text-white my-5">Indulge in a gastronomic adventure, finding the epitome of good food. Discover extraordinary flavors, crafted with passion and expertise.</p>
                            <button className="btn btn-warning ">See Our Food</button>
                    </div>
                <div className='flex flex-col md:flex-row gap-12 mx-auto'>
                        <img className='h-32 w-42 border border-white' src={img1} alt="" />
                        <img className='h-32 w-42 border  border-white' src={img2} alt="" />
                        <img className='h-32 w-42 border border-white' src={img3} alt="" />
                       
                    </div>
                    

                </div>
            </div>
            
        </div>
    );
};

export default OurInfo;