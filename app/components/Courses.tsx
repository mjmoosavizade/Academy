import React from 'react';
import Image from "next/image";

const Courses = () => {
    return (
        <>
            <section className="flex flex-wrap ml-autojustify-center justify-center">
                <label htmlFor="my_modal_7" className="">
                    <Image src="/images/Banner 1.png" alt="Post 1" height={450} width={200}/>
                </label>
                <label htmlFor="my_modal_7" className="">
                    <Image src="/images/Banner 2.png" alt="Post 1" height={450} width={200}/>
                </label>
                <label htmlFor="my_modal_7" className="">
                    <Image src="/images/Banner 3.png" alt="Post 1" height={450} width={200}/>
                </label>
                <label htmlFor="my_modal_7" className="">
                    <Image src="/images/Banner 4.png" alt="Post 1" height={450} width={200}/>
                </label>
                <input type="checkbox" id="my_modal_7" className="modal-toggle"/>
                <div className="modal" role="dialog">
                    <div className="modal-box bg-white p-0 rounded-none w-screen">
                        <Image src="/images/Layer1.png" alt="call" width={0} height={0} sizes="100vw"
                               style={{width: '100%', height: 'auto'}}/>
                    </div>
                    <label className="modal-backdrop" htmlFor="my_modal_7">Close</label>
                </div>
            </section>
        </>

    );
};

export default Courses;
