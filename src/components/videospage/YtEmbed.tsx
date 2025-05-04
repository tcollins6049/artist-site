interface YouTubeEmbedProps {
    videoId: string;
    imageSizing?: string;
}

export default function YtEmbed({ videoId, imageSizing }: YouTubeEmbedProps) {
    return (
        <div className={`w-full flex justify-center`}>
            <iframe
                className={`shadow-lg border border-gray-400 ${imageSizing ?? "max-w-[90vw] h-[50vh] md:max-w-[90vw] md:h-[90vh] aspect-video"}`}
                src={`https://www.youtube.com/embed/${videoId}?modestbranding=1&showinfo=0&rel=0`}
                title="Youttube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}
