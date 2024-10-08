export default function Video({ src }: { src: string }) {
    return (
        <video
            width={"100%"}
            controls
            preload="metadata"
            className="rounded-lg mb-5 md:mb-0 border border-gray-200 dark:border-gray-600 md:border-0"
        >
            <source
                src={src}
                type="video/mp4"
            />
            Your browser does not support the video tag.
        </video>
    );
}
