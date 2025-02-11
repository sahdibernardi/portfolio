import React from "react";
import AnimatedBody from "../../animations/AnimatedBody";

interface Position {
    title: string;
    date: string;
    description: string;
    impact: string[];
}

interface Job {
    company: string;
    positions: Position[];
}

const JobCard = ({job}: {job: Job}) => {
    if(!job) return null;
    
    return (
        <div className="mx-auto w-[100%] lg:max-w-[1200px] justify-center">
            <div className="mb-10 flex w-[100%] flex-col gap-4 leading-relaxed tracking-wide text-[#e4ded7]">
                <AnimatedBody delay={0.2} text={job.company} className="text-3xl font-bold text-[#9708de]"/>
                {job.positions.map((position) => (
                    <>
                        <br></br>
                        <div className="flex items-center">
                            <AnimatedBody delay={0.3} text={position.title} className="text-xl font-bold"/>
                            <AnimatedBody delay={0.3} text={position.date} className="text-lg italic mx-2"/>
                        </div>
                        <span>{position.description}</span>
                        <div className="flex flex-col gap-2 text-xs">
                            {position.impact.map((imp, i) => <span key={i}>● {imp}</span>)}
                        </div>
                        <br></br>
                    </>
                ))}
            </div>
        </div>
    );
};

export default JobCard;
