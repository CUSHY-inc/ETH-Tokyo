import React from 'react';

interface Props {
    attribute?: string;
    items?: string[];
}

const Property: React.FC<Props> = ({ attribute = '', items = [] }) => {
    return (
        <div>
            <p className='text-1xl'>{attribute}</p>
            <div className='flex mt-3'>
                {items.map((item) => (
                    <div key={item} className='mr-3'>
                        <span className='rounded-full border border-gray-500 p-1.5 text-sm'>{item}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Property;