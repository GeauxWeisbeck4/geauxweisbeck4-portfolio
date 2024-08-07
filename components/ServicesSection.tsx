const ServicesSection = () => {
    return (
        <>
          <div class="container relative flex flex-col justify-between h-full max-w-6xl px-10 mx-auto xl:px-0 mt-20">
            <h2 class="mb-1 text-3xl font-extrabold leading-tight text-sky-500">Freelance Services</h2>
                <p class="mb-12 text-lg text-gray-500">Here are some of the awesome services I provide.</p>
            <div class="w-full">
              <div class="flex flex-col w-full mb-10 sm:flex-row">
                <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                  <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-tr from-pink-300 to-green-300 shadow-lg rounded-lg"></span>
                      <div class="relative h-full p-5 dark:bg-blue-900 dark:hover:bg-blue-800 bg-blue-50 hover:bg-blue-100 border-2 border-gradient-to-tr from-pink-300 to-green-300 rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold dark:text-white text-slate-900">DAPP Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-indigo-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600 dark:text-white">A decentralized application (dapp) is an application built on a
                            decentralized network that combines a smart contract and a frontend user interface.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-tr from-orange-300 to-purple-300 shadow-lg rounded-lg"></span>
                    <div class="relative h-full p-5 dark:bg-purple-900 dark:hover:bg-purple-800 bg-purple-50 hover:bg-purple-100 border-2 border-gradient-to-tr from-pink-300 to-blue-300 shadow-lg rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold dark:text-white text-gray-800">Web 3.0 Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-purple-500 uppercase">------------</p>
                        <p class="mb-2 dark:text-white text-gray-600">Web 3.0 is the third generation of Internet services that will
                            focus on understanding and analyzing data to provide a semantic web.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col w-full mb-5 sm:flex-row">
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-tr from-orange-300 to-sky-300 shadow-lg rounded-lg"></span>
                    <div class="relative h-full p-5 dark:bg-sky-900 bg-sky-50 hover:bg-sky-100 border-2 border-gradient-to-tr from-orange-300 to-sky-300 shadow-lg rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold text-gray-800 dark:text-white">Project Audit</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-blue-400 uppercase">------------</p>
                        <p class="mb-2 dark:text-white text-gray-600">A Project Audit is a formal review of a project, which is intended
                            to assess the extent up to which project management standards are being upheld.</p>
                    </div>
                </div>
            </div>
            <div class="w-full mb-10 sm:mb-0 sm:w-1/2">
                <div class="relative h-full ml-0 mr-0 sm:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-tr from-green-300 to-orange-300 shadow-lg rounded-lg"></span>
                    <div class="relative h-full p-5 dark:bg-fuchsia-900 bg-fuchsia-50 hover:bg-fuchsia-100 hover:dark:bg-fuchsia-800 bg-white border-2 border-gradient-to-tr from-green-300 to-orange-300 shadow-lg rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold dark:text-white text-gray-800">Hacking / RE</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-yellow-400 uppercase">------------</p>
                        <p class="mb-2 text-gray-600 dark:text-white">A security hacker is someone who explores methods for breaching
                            defenses and exploiting weaknesses in a computer system or network.</p>
                    </div>
                </div>
            </div>
            <div class="w-full sm:w-1/2">
                <div class="relative h-full ml-0 md:mr-10">
                    <span class="absolute top-0 left-0 w-full h-full mt-1 ml-1 bg-gradient-to-tr from-rose-300 to-teal-300 shadow-lg rounded-lg"></span>
                    <div class="relative h-full p-5 bg-teal-50 dark:bg-teal-900 hover:bg-teal-100 dark:hover:bg-teal-800 border-2 border-gradient-to-tr from-rose-300 to-teal-300 shadow-lg rounded-lg">
                        <div class="flex items-center -mt-1">
                            <h3 class="my-2 ml-3 text-lg font-bold dark:text-white text-gray-800">Bot/Script Development</h3>
                        </div>
                        <p class="mt-3 mb-1 text-xs font-medium text-green-500 uppercase">------------</p>
                        <p class="mb-2 text-gray-600 dark:text-white">Bot development frameworks were created as advanced software tools
                            that eliminate a large amount of manual work and accelerate the development process.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </>

    );
}

export default ServicesSection;
