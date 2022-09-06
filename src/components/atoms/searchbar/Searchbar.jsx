import React from 'react';

export default function SearchComponent({searchText}) {
    return (
        <form className="flex"> 
            <div className="relative">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="absolute top-0 bottom-0 w-6 h-6 my-auto text-black left-3"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke=""
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                </svg>
                <input
                    type="text"
                    placeholder={searchText}
                    className="bg-search w-full py-3 pl-4 pr-40 text-github-another-grey text-xl border rounded-md outline-none  focus:bg-search border-github-border"
                />
            </div>
        </form>
    );
}