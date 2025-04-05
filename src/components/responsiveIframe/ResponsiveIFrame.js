function ResponsiveIFrame({ src }) {
    return (
        <div className="w-full pt-[56.25%] relative overflow-hidden">
            <iframe src={src} className="w-full h-full absolute top-0 left-0 absolute" />
        </div>
    );
}

export default ResponsiveIFrame;
