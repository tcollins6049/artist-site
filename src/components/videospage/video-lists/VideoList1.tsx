import YtEmbed from "../YtEmbed";

export default function VideoList1() {
    const videos = [
        { id: "51A9zfyzXcU", title: "SAM BARBER - INDIGO" },
        { id: "pxPbZ-dogT8", title: "JOEL - FUTURE DAYS" }
    ];

    return (
        <div className="w-full flex flex-col items-center gap-12">
            {videos.map((video) => (
                <div key={video.id} className="w-full text-center">
                    <h2 className="text-2xl md:text-4xl font-bold text-gray-600 mb-8 mt-6 tracking-wide">{video.title}</h2>
                    <YtEmbed videoId={video.id} />
                </div>
            ))}
        </div>
    );
}
