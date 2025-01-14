import React from 'react';

const Button = ({link, title, svg, target=["_self"]}) => {
    return (
        <a href={`${link}`} target={`${target}`}>
            <div className="duration-300 mb-2 md:mb-0 w-fit rounded-sm py-2 px-4 flex items-center justify-center gap-x-2 bg-sky-500 hover:bg-sky-600">
                {svg}
                <p class="font-dm font-medium text-lg inline-block  text-center text-white">
                    {title}
                </p>
            </div>
        </a>
    );
};

export default Button;