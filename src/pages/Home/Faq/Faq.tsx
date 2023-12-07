import React from "react"
import { Disclosure } from '@headlessui/react'


const Faq = () => {
    return (
        <section className="bg-[#F4F5FF] w-10/12 mx-auto">
            <h2 className="font-bold text-[56px] mb-[72px]">Frequently asked questions</h2>


            <Disclosure>
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                            <span>01. What is PayPulse?</span>

                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            PayPulse is an online app that is used to Send your money to everywhere in the world in less than a minute!
                            you can grab the app from play or apple store
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
            <Disclosure as="div" className="mt-2">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-sm font-medium text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75">
                            <span>02. What can be done after joining PayPulse?</span>

                        </Disclosure.Button>
                        <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odit quia, deserunt unde recusandae sapiente laboriosam rem libero perferendis quod!
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>


        </section >
    )
}

export default Faq