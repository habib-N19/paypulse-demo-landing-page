import React from "react"
import { Disclosure } from '@headlessui/react'
import MinusIcon from "../../../utils/MinusIcon"
import PlusIcon from "../../../utils/PlusIcon"


const Faq = () => {
    return (
        <section className="bg-[#F4F5FF] px-6 sm:px-[72px] lg:px-28 py-14 sm:py-[72px] lg:py-28 w-full mx-auto">
            <h2 className="font-bold text-[56px]  text-center mb-[72px]">Frequently asked questions</h2>
            <div className="">
                <Disclosure>
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex justify-between w-full px-4 text-sm font-medium text-left ${open ? 'text-[#4759F9] pb-0' : 'text-[#1D1E25] pb-8'}`}>
                                <h2 className="text-2xl font-bold">01. What is PayPulse?</h2>
                                {open ? <MinusIcon /> : <PlusIcon />}

                            </Disclosure.Button>
                            <Disclosure.Panel className={`px-4   text-sm text-[#454C5D]
                            ${open ? 'pb-8 pt-3' : 'pb-0'}
                        `}>
                                PayPulse is an online app that is used to Send your money to everywhere in the world in less than a minute!
                                you can grab the app from play or apple store
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                {/* 2 */}
                <Disclosure as="div" className="pt-8 border-t border-[#DCDFFF]">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex justify-between w-full px-4 text-sm font-medium text-left ${open ? 'text-[#4759F9] pb-0' : 'text-[#1D1E25] pb-8'}`}>
                                <h2 className="text-2xl font-bold">02. What can be done after joining PayPulse?</h2>
                                {open ? <MinusIcon /> : <PlusIcon />}


                            </Disclosure.Button>
                            <Disclosure.Panel className={`px-4   text-sm text-[#454C5D]
                            ${open ? 'pb-8 pt-3' : 'pb-0'}
                        `}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odit quia, deserunt unde recusandae sapiente laboriosam rem libero perferendis quod!
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="pt-8 border-t border-[#DCDFFF]">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex justify-between w-full px-4 text-sm font-medium text-left ${open ? 'text-[#4759F9] pb-0' : 'text-[#1D1E25] pb-8'}`}>
                                <h2 className="text-2xl font-bold">03. What are the advantages of PayPulse over other online app providers?</h2>
                                {open ? <MinusIcon /> : <PlusIcon />}


                            </Disclosure.Button>
                            <Disclosure.Panel className={`px-4   text-sm text-[#454C5D]
                            ${open ? 'pb-8 pt-3' : 'pb-0'}
                        `}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odit quia, deserunt unde recusandae sapiente laboriosam rem libero perferendis quod!
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="pt-8 border-t border-[#DCDFFF]">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex justify-between w-full px-4 text-sm font-medium text-left ${open ? 'text-[#4759F9] pb-0' : 'text-[#1D1E25] pb-8'}`}>
                                <h2 className="text-2xl font-bold">04. What are the specialities on PayPulse?</h2>
                                {open ? <MinusIcon /> : <PlusIcon />}


                            </Disclosure.Button>
                            <Disclosure.Panel className={`px-4   text-sm text-[#454C5D]
                            ${open ? 'pb-8 pt-3' : 'pb-0'}
                        `}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odit quia, deserunt unde recusandae sapiente laboriosam rem libero perferendis quod!
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
                <Disclosure as="div" className="pt-8 border-t border-[#DCDFFF]">
                    {({ open }) => (
                        <>
                            <Disclosure.Button className={`flex justify-between w-full px-4 text-sm font-medium text-left ${open ? 'text-[#4759F9] pb-0' : 'text-[#1D1E25] pb-8'}`}>
                                <h2 className="text-2xl font-bold">05. How to download PayPulse?</h2>
                                {open ? <MinusIcon /> : <PlusIcon />}


                            </Disclosure.Button>
                            <Disclosure.Panel className={`px-4   text-sm text-[#454C5D]
                            ${open ? 'pb-8 pt-3' : 'pb-0'}
                        `}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur odit quia, deserunt unde recusandae sapiente laboriosam rem libero perferendis quod!
                            </Disclosure.Panel>
                        </>
                    )}
                </Disclosure>
            </div>


        </section >
    )
}

export default Faq