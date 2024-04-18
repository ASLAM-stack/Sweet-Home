import NavBar from "../../NavBar/NavBar";

const ContactUs = () => {
    return (
        <div>
            <NavBar />
            <img className="w-full h-64" src="https://i.ibb.co/KwnQzkF/gradient-contact-form-template-23-2150842080.jpg" alt="" />
            <div className="bg-gray-100 min-h-screen flex items-center justify-center">
                <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
                 
                    <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
                    <form>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                                Your Name
                            </label>
                            <input type="text" id="name" name="name" className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                                Your Email
                            </label>
                            <input type="email" id="email" name="email" className="input input-bordered w-full" />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
                                Your Message
                            </label>
                            <textarea id="message" name="message" rows="4" className="textarea textarea-bordered w-full"></textarea>
                        </div>
                        <div>
                            <button type="submit" className="btn btn-primary w-full">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    );
};

export default ContactUs;