
const Banner = () => {
    return (
        <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/rtZg3TP/biotech-platform-static-banner.jpg)' }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content justify-start text-center text-neutral-content">
                <div className="text-left md:w-1/2">
                    <h1 className="mb-5 text-5xl font-bold">Welcome to My shop</h1>
                    <p className="mb-5">Discover the latest in mobile innovation at Tanjil Shop. Explore top-tier smartphones and accessories, unbeatable deals, and elevate your tech experience. Your next upgrade starts here.</p>
                    <button className="btn btn-outline text-white">Explore More</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;