// import React from 'react';
// import ImageUploader from 'react-images-upload';

// class ImageUpload extends React.Component {

//     constructor(props) {
//         super(props);
//         this.state = { pictures: [] };
//         this.onDrop = this.onDrop.bind(this);
//     }

//     onDrop(pictureFiles, pictureDataURLs) {
//         this.setState({
//             pictures: pictureFiles
//         });
//     }

//     render() {
//         return (
//             <ImageUploader
//                 withIcon={true}
//                 buttonText='Choose Profile Picture'
//                 onChange={this.onDrop}
//                 imgExtension={['.jpg', '.gif', '.png', '.gif']}
//                 maxFileSize={5242880}
//                 fileSizeError='file size is too big'
//             />
//         );
//     }
// }

// export default ImageUpload;