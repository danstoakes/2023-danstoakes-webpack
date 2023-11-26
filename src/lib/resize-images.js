const sharp = require("sharp");

import About from "../assets/images/about.jpg";

const inputImagePath = 'path/to/your/image.jpg';

const images = [
    {
        "src": About,
        "sizes": [
            [350, 235],
            [775, 510],
            [875, 575],

        ]
    },
    {
        "src": "",
        "sizes": []
    }
];

const sizes = [120, 340, 640];

sizes.forEach((size) => {
    const outputImagePath = `path/to/output/image_${size}.jpg`;

    sharp(inputImagePath)
        .resize(800, 800, {
            fit: 'inside',
        })
        .jpeg({ quality: 80 })
        .toFile(outputImagePath, (err) => {
            if (err) {
                console.error(err);
            } else {
                console.log(`Image resized to ${size}px: ${outputImagePath}`);
            }
        });
});