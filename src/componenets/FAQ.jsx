import React from 'react';
import { Accordion } from 'flowbite-react';
const FAQ = () => {
    return (
        <div className=' py-8'>
            <h1 className='text-center text-2xl md:text-5xl fo-nunito font-bold opacity-80 my-10'>Frequently Asked Question</h1>
            <Accordion collapseAll className='w-[80%] mx-auto gap-6'>
                {/* <div className=' my-10'> */}
                <Accordion.Panel className=''>
                    <Accordion.Title>What is YORE Care?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        YORE Care is a mobile application that allows users to create their ABHA ID, which is a secure and NHA (National Health Authority) approved identification for accessing healthcare services. YORE Care also provides various other features to enhance your healthcare experience.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out this guide to learn how to&nbsp;
                            <a
                                href="https://flowbite.com/docs/getting-started/introduction/"
                                className="text-cyan-600 hover:underline dark:text-cyan-500"
                            >
                                get started&nbsp;
                            </a>
                            and start developing websites even faster with components on top of Tailwind CSS.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                {/* </div> */}
                <Accordion.Panel>
                    <Accordion.Title>Is it safe to create an ABHA ID through the YORE Care app?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes, it is completely safe to create an ABHA ID using the YORE Care app. We prioritize the security and privacy of our users. All data stored in the app is kept confidential and is not shared with anyone.
                        </p>
                        <p className="text-gray-500 dark:text-gray-400">
                            Check out the
                            <a href="https://flowbite.com/figma/" className="text-cyan-600 hover:underline dark:text-cyan-500">
                                Figma design system
                            </a>
                            based on the utility classes from Tailwind CSS and components from Flowbite.
                        </p>
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Can local medical shops partner with YORE Care?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes, YORE Care welcomes partnerships with local medical shops. By partnering with us, medical shops can provide convenient online medicine ordering services to their customers through our app. Click here to partner with us!
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                            technical reason stopping you from using the best of two worlds.
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Can local medical shops partner with YORE Care?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes, YORE Care welcomes partnerships with local medical shops. By partnering with us, medical shops can provide convenient online medicine ordering services to their customers through our app. Click here to partner with us!
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                            technical reason stopping you from using the best of two worlds.
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Can local medical shops partner with YORE Care?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes, YORE Care welcomes partnerships with local medical shops. By partnering with us, medical shops can provide convenient online medicine ordering services to their customers through our app. Click here to partner with us!
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                            technical reason stopping you from using the best of two worlds.
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
                <Accordion.Panel>
                    <Accordion.Title>Can local medical shops partner with YORE Care?</Accordion.Title>
                    <Accordion.Content>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                        Yes, YORE Care welcomes partnerships with local medical shops. By partnering with us, medical shops can provide convenient online medicine ordering services to their customers through our app. Click here to partner with us!
                        </p>
                        <p className="mb-2 text-gray-500 dark:text-gray-400">
                            However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no
                            technical reason stopping you from using the best of two worlds.
                        </p>
                        
                    </Accordion.Content>
                </Accordion.Panel>
            </Accordion>
        </div>
    );
}

export default FAQ;
