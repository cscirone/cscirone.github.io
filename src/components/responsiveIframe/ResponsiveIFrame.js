function ResponsiveIFrame({ src, className = "", iframeClassName = "" }) {
    return (
        <div className={`w-full pt-[56.25%] relative overflow-hidden ${className}`}>
            <iframe src={src} className={`w-full h-full absolute top-0 left-0 ${iframeClassName}`} />
        </div>
    );
}

export default ResponsiveIFrame;
