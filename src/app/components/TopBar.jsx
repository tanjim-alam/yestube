import Link from 'next/link'
import React from 'react'

function TopBar() {
    return (
        <div className='bg-primary text-center p-1 hidden lg:block'>
            <Link href={"/50000-youtube-views"} className='text-center text-white text-sm underline '>Get 50000/50k YouTube Views on 50%</Link>
        </div>
    )
}

export default TopBar