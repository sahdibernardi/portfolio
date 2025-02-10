import React from "react";
import "../animations/animate.css";
import AnimatedBody from "../animations/AnimatedBody";
import AnimatedTitle from "../animations/AnimatedTitle";

const About = () => {
    return (
        <section
            className="relative z-10 w-full items-center justify-center overflow-hidden bg-[#0E1016] bg-cover bg-center pt-16 pb-36 md:pt-20 md:pb-44 lg:pt-20 lg:pb-56"
            id="about"
        >
            <div className="mx-auto flex w-[90%] flex-col items-center justify-center lg:max-w-[1212.8px]">
                <AnimatedTitle
                    text={"Who am I ?"}
                    className={
                        "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                    }
                    wordSpace={"mr-[14px]"}
                    charSpace={"mr-[0.001em]"}
                />
                <div className="mx-auto flex w-[100%] flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
                    <div className="mb-10 flex w-[100%] flex-col gap-4 text-lg font-medium  leading-relaxed tracking-wide text-[#e4ded7]">
                        <AnimatedBody text="I am a highly creative problem-solver with a deep passion for entrepreneurship and technology. My true calling lies in innovation, emerging technologies, and fostering an entrepreneurial mindset." />
                        <AnimatedBody
                            delay={0.1}
                            text="At 28 years old, I am a highly communicative professional with over 3 years of experience in the tech industry and 2 more as a Web Developer Freelancer."
                        />
                        <AnimatedBody
                            delay={0.2}
                            text="My journey began as a hobby, learning Web Development in my free time. Over time, I discovered my true professional path as a programmer. Today, I proudly call myself a Full-Stack Web Developer, always striving to sharpen my skills"
                        />
                        <AnimatedBody
                            delay={0.3}
                            text="I am deeply passionate about learning new things and embracing intellectual challenges. Currently, as Software Engineer, I am focused on advancing my expertise in TypeScript, JavaScript, React, Node."
                        />
                        <AnimatedBody
                            delay={0.4}
                            text="Aditionally, I am continuously exploring Software Engineering, performance improvement through Software Architecture and Design Patterns and also recently have been interested on Artifical Intelligence."
                        />
                        <AnimatedBody
                            delay={0.5}
                            text="on my spare time, I’ve been dedicated to sharing knowledge and tips about Web Development, career growth, and events with other developers through my educational pages with over 15k people in Instagram and Tiktok (@codewithsah)."
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
