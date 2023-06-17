
import { FaStar, FaStarHalf } from 'react-icons/fa';

const Testimonal = () => {
    return (
        <div className='md:w-[75%] mx-auto '>
            <div className=' mb-12 text-center '>
                <h1 className='text-4xl font-bold my-5 '>OUR TESTIMONIAL</h1>
                <p className='w-[70%] mx-auto'>
                    An enim nullam tempor sapien gravida donec enim ipsum porta justo congue purus pretium ligula</p>
            </div>
        <div className=" grid md:grid-cols-3 space-y-4 md:space-y-0 mb-10">
            <div className="lg:w-96 mx-auto border bg-base-100 " style={{ maxWidth: "80vw" }}>
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.freepik.com/free-photo/african-american-business-woman-working-computer-bar_1303-10865.jpg?w=900&t=st=1687020340~exp=1687020940~hmac=4b8c7754c09bee85e3a5849c582b0318122674a5b096858e196f39d5f3b3fbbe"
                        alt="Shoes"
                        style={{ borderRadius: "50%", width: "80px", margin: "auto", height:"80px", }}
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Gordon Ramsay</h2>
                    <p>
                        He is known for his expertise in cooking meat dishes and has a
                        reputation for being a tough and demanding chef. His signature dish,
                        beef Wellington, is a must-try for meat lovers.
                    </p>
                    <div className="flex" style={{ color: "#910000" }}>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                       
                    </div>
                </div>
            </div>
            <div className="lg:w-96 mx-auto border bg-base-100 " style={{ maxWidth: "80vw" }}>
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=900&t=st=1687020333~exp=1687020933~hmac=7fa4571846c13138567ef616a960f313a16419f90f3f433842fe494c2daac1f2"
                        alt="Shoes"
                        style={{ borderRadius: "50%", width: "80px", margin: "auto", height: "80px", }}
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Ina Garten</h2>
                    <p>
                        She is known for her simple yet elegant approach to cooking and is
                        often called the Barefoot Contessa. Her roasted chicken with
                        vegetables is a classic comfort food dish that is both easy to make
                        and delicious.
                    </p>
                    <div className="flex" style={{ color: "#910000" }}>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                    </div>
                </div>
            </div>
            <div className="lg:w-96 mx-auto border bg-base-100 " style={{ maxWidth: "80vw" }}>
                <figure className="px-10 pt-10">
                    <img
                        src="https://img.freepik.com/free-photo/brunette-business-woman-with-wavy-long-hair-blue-eyes-stands-holding-notebook-hands_197531-343.jpg?w=740&t=st=1687020338~exp=1687020938~hmac=2283bc7bf331620d9161345c7bfe43334f6701c1c156dac17ddfbe4397db111c"
                        alt="Shoes"
                        style={{ borderRadius: "50%", width: "80px", margin: "auto", height: "80px", }}
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">Massimo Bottura</h2>
                    <p>
                        He is an Italian chef who is renowned for his innovative and
                        experimental approach to cooking. His restaurant, Osteria
                        Francescana, has been named the best restaurant in the world several
                        times.
                    </p>
                    <div className="flex" style={{ color: "#910000" }}>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStar></FaStar>
                        <FaStarHalf></FaStarHalf>
                    </div>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Testimonal;