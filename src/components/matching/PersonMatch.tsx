import Describe from "./Describe";
import Property from "./Property";
import { HandThumbUpIcon, HandThumbDownIcon } from "@heroicons/react/24/solid";
import React, { useState, useEffect } from "react";
import { Transition } from "@headlessui/react";
import Avatar from "../common/Avatar";
import { RootState } from '@/src/store';
import { useDispatch, useSelector } from 'react-redux';

const PersonMatch = () => {

    const attribute1 = 'Career';
    const items1 = ['Community moderator'];
    const attribute2 = 'Interest';
    const items2 = ['Find Co-founder', 'Sales'];

    const image = "/images/forerigner.webp"

    const desc = "Co-founder of Apple Inc., NeXT, and Pixar Animation Studios. Passionate about technology, design, and innovation. Changing the world, one device at a time."

    const account = useSelector((state: RootState) => state.account);
    console.log(account);

    return (
        <div className="border border-gray-300 rounded-xl p-8 w-80">
            <div className="flex flex-col justify-center items-center">
                <p className="text-2xl">Congratulations!🎉🎉</p>
                <p className="text-2xl">You matched😍</p>
                <div className="-z-10 pt-8">
                    <Avatar image={image} ringOffset='ring-offset-0' w='w-24' h='h-24' />
                </div>
                <div className="mt-2">
                    <p>Ryounosuke</p>
                </div>
                <div className="mt-4">
                    <p>{`${desc}`}</p>
                </div>
            </div>
        </div>
    );
}

export default PersonMatch;