

const Comment = () => {
    return (
        <div className='md:w-[75%] mx-auto my-10'>
            <div className='md:w-[75%] mx-auto my-10 '>
                <div className=' mb-12 text-center '>
                    <h1 className='text-4xl font-bold my-5 '>Send Your Massage Inquiry</h1>
                    <p className='w-[70%] mx-auto'>
                        Reach out to us effortlessly through our convenient contact form. We are here to answer your questions, fulfill your requests, and provide the assistance you need. Simply fill out the form, and our team will be in touch with you soon. We value your feedback and are eager to connect with you.</p>
                </div>
            </div>
            <section className="bg-gray-100  ">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
                        <div className="lg:col-span-2 lg:py-12">
                            <p className="max-w-xl text-lg">
                                Get in Touch
                            </p>

                            <div className="mt-8">
                                <p>
                                    Allen Tusher  <br /> 
                                    Senior Chef , Cuisine Chemistry

                                </p>
                                <a href="" className="text-2xl font-bold text-pink-600">
                                    +88 01781607315
                                </a>

                                <address className="mt-2 not-italic">

                                    Mymensingsh Sadar , Mymensingsh
                                </address>
                            </div>
                        </div>

                        <div className="rounded-lg bg-gray-50 p-8 shadow-lg lg:col-span-3 lg:p-12">
                            <form action="" className="space-y-4">
                                <div>
                                    <label className="sr-only">Name</label>
                                    <input
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Name"
                                        type="text"
                                        id="name"
                                    />
                                </div>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    <div>
                                        <label className="sr-only" >Email</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Email address"
                                            type="email"
                                            id="email"
                                        />
                                    </div>

                                    <div>
                                        <label className="sr-only">Phone</label>
                                        <input
                                            className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                            placeholder="Phone Number"
                                            type="tel"
                                            id="phone"
                                        />
                                    </div>
                                </div>

                               

                                <div>
                                    <label className="sr-only">Message</label>

                                    <textarea
                                        className="w-full rounded-lg border-gray-200 p-3 text-sm"
                                        placeholder="Message"
                                        rows="8"
                                        id="message"
                                    ></textarea>
                                </div>

                                <div className="mt-4">
                                    <button
                                        type="submit"
                                        className="inline-block w-full rounded-lg bg-warning  px-5 py-3 font-medium text-black sm:w-auto"
                                    >
                                        Send Enquiry
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Comment;