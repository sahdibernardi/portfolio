import React from "react";
import AnimatedTitle from "../animations/AnimatedTitle";
import JobCard from "../components/jobs/JobCard";
import { jobs } from "../components/jobs/jobsDetails";

const Jobs = () => {
    return (
        <section
            className="relative z-10 flex w-full flex-col items-center justify-center bg-[#0E1016] bg-cover bg-center py-16 md:py-20 lg:py-20"
            id="jobs"
        >
            <h2 className="mb-10 hidden text-[36px] text-[#e4ded7] md:mb-16 md:text-[42px] lg:mb-16 lg:text-[72px]">
        Jobs
            </h2>
            <AnimatedTitle
                text="Work Experience"
                className={
                    "mb-10 text-left text-[40px] font-bold leading-[0.9em] tracking-tighter text-[#e4ded7] sm:text-[45px] md:mb-16 md:text-[60px] lg:text-[80px]"
                }
                wordSpace={"mr-[14px]"}
                charSpace={"mr-[0.001em]"}
            />
            {jobs.map((job, i) => <JobCard key={i} job={job}/>)}
        </section>
    );
};

export default Jobs;
