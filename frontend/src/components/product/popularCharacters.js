import { Link } from "react-router-dom"

const CharacterList = [1, 2, 3, 4]
const PopularCharacter = () => {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 border-t">
            <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
                <div className="space-y-3">
                    <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Popular Characters</h2>
                    <p className="mx-auto max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
                        Explore merchandise featuring your favorite anime characters.
                    </p>
                </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-start gap-6 sm:grid-cols-3 lg:gap-12">
                {CharacterList.map((character) =>
                (<Link
                    className="mx-auto flex w-full items-center justify-center p-4 sm:p-8 rounded-lg bg-gray-100 hover:scale-105/translate-y-0.5 transition-transform"
                    href="#"
                >
                    <img
                        alt="Character 1"
                        className="aspect-square overflow-hidden rounded-lg object-cover object-center"
                        height="200"
                        src="/placeholder.svg"
                        width="200"
                    />
                    <span className="sr-only">View Merchandise for Character 1</span>
                </Link>)
                )}
            </div>
        </section >
    )
}

export default PopularCharacter