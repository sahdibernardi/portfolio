import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";

const Education = () => {
    return (
        <section
            className="relative z-10 flex w-full gap-4 flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
            id="education"
        >
            <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Education
            </h2>
            <AnimatedTitle
                text="Education and Languages"
                className={
                    "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                }
                wordSpace={"mr-[14px]"}
                charSpace={"mr-[0.001em]"}
            />
            <span className="text-4xl my-8 font-bold">Education</span>
            <span className="text-lg">Certified AWS Cloud Practitioner (2023)</span>
            <span className="text-lg">Bachelor in Software Engineering at UNOPAR (2024)</span>
            <span className="text-lg">Software Engineering Bootcamp (2022)</span>
            <span className="text-lg">Speaker at NodeBR Brasil (NodeBR Event - 2024)</span>
            <span className="text-lg">Speaker at DevFestSul (Google Developer Event - 2022)</span>
            <span className="text-4xl my-8 font-bold">Languages</span>
            <span className="text-lg">Portuguese (fluent - C2)</span>
            <span className="text-lg">English (fluent - C2)</span>
            <span className="text-lg">Spanish (advanced - C1)</span>
            <span className="text-lg">French (basic - A2)</span>
        </section>
    );
};

export default Education;
