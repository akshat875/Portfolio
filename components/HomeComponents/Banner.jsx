import Typewriter from 'typewriter-effect';
import BannerLayout from '../Common/BannerLayout';

const Banner = () => {
    return (
        <BannerLayout>
            <div className="absolute inset-0 z-20 flex flex-col items-center py-6 justify-center w-full h-full bg-gradient-to-t from-MidNightBlack">
                <div className="bg-LightGray/10 w-[95%] h-[90%] px-4 py-2 rounded-xl overflow-hidden flex md:flex-row md:items-center">
                    <div className="flex-1 flex flex-col items-center md:items-start md:ml-10"> {/* Added md:ml-10 to shift text to the right */}
                        <h1 className="text-3xl sm:text-4xl xl:text-5xl text-Snow font-bold">Hello!</h1>
                        <div className="py-4 font-cascadia-normal text-Snow pb-4 text-xs h-20 lg:h-auto">
                            <span>{"<"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>
                                {">"} <span className="text-Snow sm:text-xl xl:text-2xl font-bold"> I am  <span className="inline-block">
                                    <Typewriter
                                        options={{
                                            strings: [
                                                'MERN Stack Developer',
                                                'Frontend Developer'
                                            ],
                                            autoStart: true,
                                            loop: true,
                                        }}
                                    />
                                </span>
                                </span> {"</"}<span className="text-Green sm:text-base xl:text-lg font-bold">div</span>{">"} </span>
                        </div>
                        <a
                            href="https://www.linkedin.com/in/akshat87a/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="button text-Snow bg-Green px-6 py-2 rounded-lg transition-colors duration-300 hover:bg-white hover:text-black"
                        >
                            Explore
                        </a>
                    </div>
                    <div className="w-48 h-52 hidden md:flex items-end justify-end">
                        <img className='w-full h-auto' src="images/emoji.png" alt="emoji" />
                    </div>
                </div>

                {/* details in row */}
                <div className="grid grid-cols-2 gap-4 md:gap-0 md:flex items-center justify-between w-full px-4 xl:px-8 2xl:px-16">
                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>5+</span>
                        <span className='text-xs text-Snow'>Completed Projects</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>1 Year +</span>
                        <span className='text-xs text-Snow'>Experience</span>
                    </div>

                    <div className="flex items-center gap-x-1">
                        <span className='text-base md:text-lg text-Green font-bold'>10+</span>
                        <span className='text-xs text-Snow'>Opensource contributions</span>
                    </div>
                </div>
            </div>
        </BannerLayout>
    );
}

export default Banner;
