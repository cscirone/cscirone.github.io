import { useMediaQuery } from "@mui/material";
import { ImageList as MuiImageList, ImageListItem, ImageListItemBar } from "@mui/material";
import ImagePreview from "../imagePreview/ImagePreview";

//images: [
//{
//    src: string,
//    alt: string,
//    thumbnailClassName: string,
//    title: string,
//    subtitle: string
//}
//]

function ImageList({ images = [], className = "" }) {

    const inSmallScreen = useMediaQuery('(max-width: 600px)');
    return (
        <div className={`flex p-4 ${className}`}>
            <MuiImageList variant="masonry" cols={inSmallScreen ? 2 : 3} gap={10}>
                {images?.map((image, index) => (
                    <ImageListItem key={index}>
                        <div className="w-full aspect-square items-center justify-center flex">
                            <ImagePreview src={image.src} alt={image.alt} thumbnailClassName={image.thumbnailClassName} />
                        </div>
                        <ImageListItemBar
                            title={image.title}
                            subtitle={image.subtitle}
                            position="below"
                        />
                    </ImageListItem>
                ))}
            </MuiImageList>
        </div>
    );
}

export default ImageList;
