'use client'

import Image from "next/image"

function ExploreBtn() {
    return (
        <div>
            <button type="button" id="explore-btn" onClick={() => console.log('clicked')} className="mt-7 mx-auto">
                <a href="#events">
                    Explore Events
                    <Image
                        src="/icons/arrow-down.svg"
                        alt="Explore Arrow"
                        width={24}
                        height={24}
                        
                    />
                </a>

            </button>
        </div>
    )
}

export default ExploreBtn
