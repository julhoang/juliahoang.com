import Image from "next/image";

export default function ImageRounded({
    src,
    alt,
    small = false,
}: {
    src: string;
    alt: string;
    small?: boolean;
}) {
    return (
        <Image
            src={src}
            width={small ? 500 : 600}
            height={small ? 300 : 300}
            alt={alt}
            priority={false}
            lazyRoot="lazy"
            className={
                "rounded-lg mb-5 transition-all duration-300 hover:scale-105" +
                (small ? " " : " md:mb-0")
            }
        />
    );
}
