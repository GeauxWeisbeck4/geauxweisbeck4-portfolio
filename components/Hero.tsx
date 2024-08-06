import Image from './Image';

const Hero = () => {
    return (
        <>

    <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
                <h1 class="text-4xl md:text-5xl lg:text-6xl dark:text-white text-sky-500 font-bold mb-6">
                    Full Stack Developer<br class="hidden md:block" />
                    <span class="dark:text-sky-500 text-black underline underline-offset-4">Available</span> for Hire
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8">
                    We create beautiful and functional websites for businesses of all sizes.
                </p>
                <div class="flex gap-2">
                    <a href="#" class="bg-sky-500 hover:bg-sky-600 text-white font-bold py-3 px-6 rounded-md">Get
                        Started
                    </a>
                    <a href="#" class="bg-gray-700 hover:bg-gray-600 text-white font-bold py-3 px-6 rounded-md">Learn
                        More
                    </a>
                </div>
            </div>
            <div class="md:w-1/2 lg:w-1/3 mt-8 md:mt-0">
                <img src="https://res.cloudinary.com/dvsjspnnz/image/upload/v1722894687/heroandrew_eccwie.png" alt="Hero Image" class="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
  </>
    );
}

export default Hero;
