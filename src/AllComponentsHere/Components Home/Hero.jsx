const Hero = () => {

    return (
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center mt-60 px-10">
            <div className="">
                <h1 className="font-bebas text-8xl text-stone-950">Hai!,My Name Is Andi, people who like visuals</h1>
                <hr className="my-6 sm:mx-auto border-stone-700 lg:my-8 mt-20" /><div></div>
                <p className="text-stone-900 lg:text-lg text-sm">Becoming a designer is my dream, because I like to draw, but because I majored in informatics, 
                so I took front-end front-end deh bribe a little bit connected with the major that I'm currently taking</p>
            </div>
            <div className="mx-auto -translate-y-6">
                <img className="border-none w-80 " src="assets/me.jpeg"/>
            </div>
        </div>
    )
}

export default Hero;
