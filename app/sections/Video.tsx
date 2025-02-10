import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

const Video = () => {
    return (
        <section
            className="relative z-10 flex w-full gap-4 flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
            id="video"
        >
            <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Video
            </h2>
            <AnimatedTitle
                text="A bit more about my career"
                className={
                    "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                }
                wordSpace={"mr-[14px]"}
                charSpace={"mr-[0.001em]"}
            />
            <video controls>
                <source src="introVideo.mp4" type="video/mp4"/>
                <track 
                    kind="captions"
                    src="captions.vtt"
                    srcLang="pt"
                    label="Português"
                    default
                />
                Your browser does not support the video tag.
            </video>
            <span className="text-sm">This video was recorded by the end of 2023.</span>
        </section>
    );
};

export default Video;
