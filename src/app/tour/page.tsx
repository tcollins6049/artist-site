import OverlayImage1 from "@/components/shared/overlay-images/OverlayImage1";
import TourDates_full from "@/components/tourpage/TourDates_full";

export default function TourPage() {
    return (
        <main className="bg-[#4c3b3b]">
            <OverlayImage1 imageSrc="/images/field_sky.jpg" text="TOUR"/>

            <div className="mt-10">
                <TourDates_full />
            </div>
        </main>
    );
}
