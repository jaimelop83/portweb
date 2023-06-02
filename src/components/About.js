import React from 'react';

function About() {
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
                <img className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/>
                <div className="text-center lg:w-2/3 w-full">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">About Me</h1>
                    <p className="mb-8 leading-relaxed">Hello, my name is John Doe and I am a web developer. I have a passion for creating and enhancing anything technology related. When it comes to building websites or web applications, I always aim to deliver the best experience to the end user.</p>
                    <p className="mb-8 leading-relaxed">I have experience in different areas of web development. I'm comfortable working with many different tools and environments. I'm always looking for opportunities to work on something exciting, and I love taking on new challenges.</p>
                </div>
            </div>
        </section>
    )
}

export default About;
