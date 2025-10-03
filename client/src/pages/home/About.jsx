import React from "react";

const About = ({
    imageSrc = "/me.jpg",
    imageAlt = "Portrait photo",
    titlePrefix = "BouquetScape: Love That Lasts Forever.",
    titleSuffix = "Why should the joy of a perfect gift ever fade?",
    description = "At BouquetScape, we believe memories deserve more than perishable flowers. Our mission is to craft stunning, everlasting bouquets that capture the beauty and emotion of a special moment, allowing the feeling of that day to live on, forever vibrant. We pour our passion for art into every single ribbon rose, handcrafting each piece with love and dedication. Every material is handpicked for its quality, ensuring your gift is as premium as it is unique. Choose a gift that keeps giving. Choose BouquetScape, and let's spread unforgettable smiles and make beautiful, lasting memories together.",
    name = "Darathi Dutta,",
    role = "Founder",
}) => {
    return (
        <section
            className={`w-full px-4 mt-14 sm:px-6 lg:px-8`}
            aria-label="Celebration feature"
        >
            <div className="mx-auto max-w-7xl rounded-2xl bg-muted/40 p-4 sm:p-6 md:p-8 lg:p-10">
                <div className="grid items-center gap-6 md:gap-10 lg:gap-14 lg:grid-cols-2">
                    {/* Image + layered frames */}
                    <div className="relative order-2 lg:order-1 p-[2px] rounded-xl bg-pink-500 z-10">
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute -left-8 -top-8 hidden h-[68%] -z bg-pink-500 w-[82%] rounded-2xl bg-secondary/40 md:block"
                        />
                        <div className="relative bg- rounded-xl overflow-hidden">
                            <img
                                src={imageSrc || "/placeholder.svg"}
                                alt={imageAlt}
                                className="h-full scale-[1.04] w-full rounded-xl object-contain"
                            />
                        </div>
                    </div>

                    {/* Copy */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-balance font-serif font-semibold italic text-sm sm:text-xl text-foreground/80">
                            {titlePrefix}{" "}
                        </h2>
                        <p className="font-serif mt-3 text-sm">
                            {titleSuffix}
                        </p>
                        <p className="mt-5 md:mt-6 text-pretty text-sm md:text-lg leading-relaxed text-muted-foreground">
                            {description}
                        </p>

                        <div className="mt-7 md:mt-8">
                            <p className="text-xl md:text-2xl font-semibold text-foreground">
                                {name}
                            </p>
                            <p className="text-sm md:text-base text-muted-foreground">
                                {role}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
