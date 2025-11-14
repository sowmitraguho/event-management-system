'use client'

import Image from "next/image"
import Link from "next/link"

function ExploreBtn() {
    return (
        <div>
            <button type="button" onClick={() => console.log('clicked')} className="mt-7 mx-auto border-dark-200 bg-dark-100 flex w-fit cursor-pointer  rounded-full border px-8 py-3.5 max-sm:w-full text-center hover:bg-dark-200 hover:shadow-lg transition-all duration-300">
                <Link href="#events" className="flex-center gap-2 text-center w-full">
                    Explore Events
                    <Image
                        src="/icons/arrow-down.svg"
                        alt="Explore Arrow"
                        width={24}
                        height={24}

                    />
                </Link>

            </button>
        </div>
    )
}

export default ExploreBtn
