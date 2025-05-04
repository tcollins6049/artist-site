import OverlayImage1 from "@/components/shared/overlay-images/OverlayImage1";
import YtEmbed from "@/components/videospage/YtEmbed";
import VideoList1 from "@/components/videospage/video-lists/VideoList1";

export default function MusicPage() {
    return (
        <main className="bg-gray-300 text-white min-h-screen">
            <OverlayImage1 imageSrc="/images/pond.jpg" text="MUSIC" />

            {/* Embed YouTube Video */}
            <div className="mt-10">
                <VideoList1 />
            </div>
        </main>
    );
}
