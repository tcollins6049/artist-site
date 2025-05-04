interface TourDate {
    date: string;
    city: string;
    venue: string;
    ticket_link: string;
}

export default function TourDates_full() {
    const tourDates: TourDate[] = [
        { date: "May 15, 2025", city: "New York, NY", venue: "Madison Square Garden", ticket_link: "" },
        { date: "June 5, 2025", city: "Los Angeles, CA", venue: "Hollywood Bowl", ticket_link: "" },
        { date: "July 20, 2025", city: "Chicago, IL", venue: "United Center", ticket_link: "" },
    ];

    return (
        <div className="w-full flex flex-col items-center gap-8 mt-10">
            {tourDates.map((tour, index) => (
                <div key={index} className="w-full flex justify-center">
                    <div className="w-full max-w-7xl flex flex-col sm:flex-row items-center justify-between py-4 border-b border-white text-white px-10">

                        {/* Left: Contins the date and venue */}
                        <div className="text-center sm:text-left w-full sm:w-[50%]">
                            <h2 className="text-md font-bold">{tour.date}</h2>
                            <p className="text-sm text-gray-300">{tour.venue}</p>
                            <p className="text-sm text-gray-400 lg:hidden">{tour.city}</p>
                        </div>

                        {/* Center: city (visible only on large screens) */}
                        <p className="text-md text-gray-200 text-left w-[40%] hidden lg:block">{tour.city}</p>

                        {/* Right: Tickets button */}
                        <div className="w-full flex justify-center sm:w-[30%] sm:justify-end mt-4 sm:mt-0">
                            <a
                                href={tour.ticket_link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="
                                    bg-white text-black text-sm px-10 py-2 shadow-md transition rounded-sm border border-black
                                    hover:scale-95 hover:text-white hover:bg-black hover:border-white
                                "
                            >
                                Tickets
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
