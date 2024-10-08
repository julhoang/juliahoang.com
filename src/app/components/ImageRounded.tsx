import Image from "next/image";

export default function ImageRounded({
    src,
    alt,
    small = false,
    url,
}: {
    src: string;
    alt: string;
    small?: boolean;
    url?: string;
}) {
    const ImageComponent = () => {
        return (
            <Image
                src={src}
                width={small ? 500 : 600}
                height={300}
                alt={alt}
                priority={false}
                className={
                    "rounded-lg mb-5 transition-all duration-300 hover:scale-105 max-w-full" +
                    (small ? " " : " md:mb-0")
                }
            />
        );
    };

    if (url) {
        return (
            <a href={url}>
                <ImageComponent />
            </a>
        );
    } else {
        return <ImageComponent />;
    }
}
