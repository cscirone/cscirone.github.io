import ModalImage from 'react-modal-image';

function ImagePreview({ src, alt, thumbnailClassName = "", bgColor = "#000000" }) {
    return (
        <ModalImage
            className={`hover:opacity-80 transition-opacity duration-200 ${thumbnailClassName}`}
            small={src}
            large={src}
            alt={alt}
            hideDownload={true}
            imageBackgroundColor={bgColor}
        />
    );
}

export default ImagePreview;
