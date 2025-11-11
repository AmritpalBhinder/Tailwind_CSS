import React from 'react'

export default function ColumnLayout() {
    return (
        <div className='bg-cyan-100 2xl:columns-4 xl:columns-3 lg:columns-2 md:columns-1 m-3'>

            {
                Array.from({ length: 12 }).map((Array, i) => <div className='bg-sky-50 p-3 rounded break-inside-avoid'>
                    <img src={"https://picsum.photos/300/200?random=" + i} alt=""  className='rounded mb-3 w-full' />
                    <p>Many published books use a device to separate certain paragraphs further when there is a change of scene or time. This extra space, especially when co-occurring at a page or section break, may contain a special symbol known as a dinkus, a fleuron, or a stylistic dingbat.</p>
                </div>)
            }
        </div>
    )
}
