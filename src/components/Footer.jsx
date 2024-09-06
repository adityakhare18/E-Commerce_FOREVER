import React from 'react'

const Footer = () => {
  return (
    <>
    <section class="py-10 bg-gray-50 sm:pt-16 lg:pt-24">
    <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div class="grid grid-cols-2 md:col-span-3 lg:grid-cols-6 gap-y-16 gap-x-12">
            <div class="col-span-2 md:col-span-3 lg:col-span-2 lg:pr-8">
                <img class="w-auto h-9" src="data:image/png;base64,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" alt="" />

                <p class="text-base leading-relaxed text-gray-600 mt-7">Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>

                <ul class="flex items-center space-x-3 mt-9">
                    <li>
                        <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
                                ></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M13.397 20.997v-8.196h2.765l.411-3.209h-3.176V7.548c0-.926.258-1.56 1.587-1.56h1.684V3.127A22.336 22.336 0 0 0 14.201 3c-2.444 0-4.122 1.492-4.122 4.231v2.355H7.332v3.209h2.753v8.202h3.312z"></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M11.999 7.377a4.623 4.623 0 1 0 0 9.248 4.623 4.623 0 0 0 0-9.248zm0 7.627a3.004 3.004 0 1 1 0-6.008 3.004 3.004 0 0 1 0 6.008z"></path>
                                <circle cx="16.806" cy="7.207" r="1.078"></circle>
                                <path
                                    d="M20.533 6.111A4.605 4.605 0 0 0 17.9 3.479a6.606 6.606 0 0 0-2.186-.42c-.963-.042-1.268-.054-3.71-.054s-2.755 0-3.71.054a6.554 6.554 0 0 0-2.184.42 4.6 4.6 0 0 0-2.633 2.632 6.585 6.585 0 0 0-.419 2.186c-.043.962-.056 1.267-.056 3.71 0 2.442 0 2.753.056 3.71.015.748.156 1.486.419 2.187a4.61 4.61 0 0 0 2.634 2.632 6.584 6.584 0 0 0 2.185.45c.963.042 1.268.055 3.71.055s2.755 0 3.71-.055a6.615 6.615 0 0 0 2.186-.419 4.613 4.613 0 0 0 2.633-2.633c.263-.7.404-1.438.419-2.186.043-.962.056-1.267.056-3.71s0-2.753-.056-3.71a6.581 6.581 0 0 0-.421-2.217zm-1.218 9.532a5.043 5.043 0 0 1-.311 1.688 2.987 2.987 0 0 1-1.712 1.711 4.985 4.985 0 0 1-1.67.311c-.95.044-1.218.055-3.654.055-2.438 0-2.687 0-3.655-.055a4.96 4.96 0 0 1-1.669-.311 2.985 2.985 0 0 1-1.719-1.711 5.08 5.08 0 0 1-.311-1.669c-.043-.95-.053-1.218-.053-3.654 0-2.437 0-2.686.053-3.655a5.038 5.038 0 0 1 .311-1.687c.305-.789.93-1.41 1.719-1.712a5.01 5.01 0 0 1 1.669-.311c.951-.043 1.218-.055 3.655-.055s2.687 0 3.654.055a4.96 4.96 0 0 1 1.67.311 2.991 2.991 0 0 1 1.712 1.712 5.08 5.08 0 0 1 .311 1.669c.043.951.054 1.218.054 3.655 0 2.436 0 2.698-.043 3.654h-.011z"
                                ></path>
                            </svg>
                        </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex items-center justify-center text-white transition-all duration-200 bg-gray-800 rounded-full w-7 h-7 hover:bg-blue-600 focus:bg-blue-600">
                            <svg class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
                                ></path>
                            </svg>
                        </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Company</p>

                <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> About </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Features </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Works </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Career </a>
                    </li>
                </ul>
            </div>

            <div>
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Help</p>

                <ul class="mt-6 space-y-4">
                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Customer Support </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Delivery Details </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Terms & Conditions </a>
                    </li>

                    <li>
                        <a href="#" title="" class="flex text-base text-black transition-all duration-200 hover:text-blue-600 focus:text-blue-600"> Privacy Policy </a>
                    </li>
                </ul>
            </div>

            <div class="col-span-2 md:col-span-1 lg:col-span-2 lg:pl-8">
                <p class="text-sm font-semibold tracking-widest text-gray-400 uppercase">Subscribe to newsletter</p>

                <form action="#" method="POST" class="mt-6">
                    <div>
                        <label for="email" class="sr-only">Email</label>
                        <input type="email" name="email" id="email" placeholder="Enter your email" class="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600" />
                    </div>

                    <button type="submit" class="inline-flex items-center justify-center px-6 py-4 mt-3 font-semibold text-white transition-all duration-200 bg-zinc-800 rounded-md hover:bg-blue-700 focus:bg-blue-700">Subscribe</button>
                </form>
            </div>
        </div>

        <hr class="mt-16 mb-10 border-gray-200" />

        <p class="text-sm text-center text-gray-600">© Copyright 2024, All Rights Reserved by FOREVER</p>
    </div>
</section>

    </>
  )
}

export default Footer
