import React from 'react'
import { Disclosure } from '@headlessui/react';

function OfferCase(props) {
    return (
        <Disclosure>
            {({ open }) => (
            <>
                <Disclosure.Button className="flex items-center mb-4 bg-slate-300 border-solid border-2 border-slate-400 h-16 rounded-md w-full">
                    <span className="pl-6 text-2xl">{props.text} {props.index + 1}</span>
                </Disclosure.Button>
                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500 transition delay-500">
                    If you're unhappy with your purchase for any reason, email us
                    within 90 days and we'll refund you in full, no questions asked.
                </Disclosure.Panel>
            </>
            )}
        </Disclosure>
    )
}

export default OfferCase
