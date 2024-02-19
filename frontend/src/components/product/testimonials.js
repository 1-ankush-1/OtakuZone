const Testimonials = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Customer Testimonials</h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Don't just take our word for it. Here's what our customers have to say about their experience with The
                        Anime Store.
                    </p>
                </div>
                <div className="mx-auto w-full max-w-[800px] grid gap-6 sm:grid-cols-2 md:gap-10">
                    <div className="flex flex-col items-center gap-2 py-4 border-t border-gray-200  bg-gray-50  dark:border-gray-800 dark:bg-gray-950">
                        <img
                            alt="Avatar"
                            className="rounded-full"
                            height="150"
                            src="/placeholder.svg"
                            style={{
                                aspectRatio: "150/150",
                                objectFit: "cover",
                            }}
                            width="150"
                        />
                        <div className="space-y-2 text-center">
                            <h3 className="font-bold">Samantha</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">
                                "I'm a huge anime fan, and I love shopping at The Anime Store. They have the best selection of
                                merchandise, and everything is such great quality. I've bought t-shirts, posters, and even a
                                plushie, and I've been happy with every purchase. The website is easy to navigate, and my orders
                                always arrive quickly. I definitely recommend The Anime Store to all my fellow anime lovers!"
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Testimonials;