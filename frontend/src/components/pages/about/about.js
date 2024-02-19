import React from 'react';
import AboutForm from './aboutForm';
import TeamMember from './teamMember';

const About = () => {
    return (
        <div className="w-full">
            <section className="w-full py-12 lg:py-24 xl:py-32">
                <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-3">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About</h1>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Step into the world of anime fashion with our exclusive "OtakuZone" collection. From clothing and accessories to unique merchandise, we curate styles inspired by your favorite anime characters, capturing the essence of each series in every piece.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 lg:py-24">
                <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Quality Anime Apparel</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Express your anime passion through our carefully designed apparel. At OtakuZone, we offer high-quality, stylish clothing that reflects the spirit of iconic anime series, providing fans with comfortable and unique fashion options.
                        </p>
                    </div>
                </div>
            </section>
            <section className="w-full py-12 lg:py-24">
                <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet the Team</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Join the OtakuZone team – a passionate group of anime enthusiasts dedicated to delivering the best in anime fashion. From marketing to product design, we work hard to bring you a curated collection of high-quality, stylish, and unique apparel, allowing you to showcase your love for your favorite series in every outfit.
                        </p>
                    </div>
                    <TeamMember />
                </div>
            </section>
            <section className="w-full py-12 lg:py-24">
                <div className="container grid items-center gap-4 px-4 text-center md:px-6 lg:gap-10">
                    <div className="space-y-3">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get in Touch</h2>
                        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                            Have a question or want to collaborate? Reach out to us using the form below.
                        </p>
                    </div>
                    <AboutForm />
                </div>
            </section>;
        </div>
    );
}
export default About