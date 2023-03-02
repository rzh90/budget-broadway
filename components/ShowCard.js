import DiscountButton from "./DiscountButton"

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'

function ShowCard({show}) {
    const [open, setOpen] = useState(false)

    function getImageUrl(show) {
        return `/images/playbills/${show.location.replaceAll(".", "").split(" ").join("")}.jpg`
    }
    
    return (
        <div className="items-center bg-gray-800 border border-gray-700 rounded-md flex">
            {/* playbill image */}
            <img className="w-28 rounded-md" src={getImageUrl(show)} alt={show.name} />

            {/* theater info */}
            <div className="p-5 text-sm">
                <h2 className="text-lg font-bold text-white">{show.name}</h2>
                <p>{show.location} Theater</p>
                <p>{show.address}</p>
                {show.closes && <p className="text-bbblue font-bold">Closes {show.closes.replaceAll("-", "/")}</p>}

                {/* discount buttons */}
                <ul className="lg:flex lg:space-x-4 mt-4 space-y-6 lg:space-y-0">
                    {show.rush_link && <DiscountButton discountAmt={show.rush} link={show.rush_link} type="Rush" />}
                    {show.gen_rush && <button className="px-3 py-2 text-xs font-bold text-center text-white bg-gray-700 rounded-lg hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500" onClick={() => {setOpen(true)}}>${show.rush} Rush</button>}
                    {show.lottery && <DiscountButton discountAmt={show.lottery} link={show.lottery_link} type="Lottery" />}
                </ul>
            </div>

            {/* general rush popup */}
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
                        {/* background fade */}
                        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enterTo="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leaveFrom="opacity-100 translate-y-0 sm:scale-100" leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                                <Dialog.Panel className="relative transform overflow-hidden rounded-md text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                                    <div className="bg-gray-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                                <Dialog.Title as="h3" className="text-base font-semibold leading-6 text-white">General rush</Dialog.Title>
                                                <div className="mt-2">
                                                    <p className="text-sm text-white">A limited number of general rush tickets will be available to purchase at the box office on the day of the performance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-800 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button type="button" className="inline-flex w-full justify-center rounded-md border border-transparent bg-gray-700 px-4 py-2 text-base font-medium text-white shadow-sm hover:bg-gray-600 ring-1 ring-gray-600 hover:ring-gray-500 sm:ml-3 sm:w-auto sm:text-sm" onClick={() => setOpen(false)}>OK</button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </div>
    )
}

export default ShowCard