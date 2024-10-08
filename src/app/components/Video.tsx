export default function Video({ src }: { src: string }) {
    return (
        <video
            width={"100%"}
            src={src}
            controls
            preload="metadata"
            className="rounded-lg mb-5 md:mb-0"
        />
    );
}
