function SpotifyIFrame({ src }) {
    return (
        <iframe src={src} width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>  
    );
}

export default SpotifyIFrame;
