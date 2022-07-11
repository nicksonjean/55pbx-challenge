# 55PBX - Challenge (API Socket.IO) - Repository

![55PBX](./assets/55pbx-logo.png)

## :triangular_flag_on_post: Starting

For the front-end, a minimum reactjs boilerplate from this [site](https://mrseanbaines.medium.com/how-to-write-a-minimal-react-boilerplate-from-scratch-85ba17757040) was used, where I just had to componentize an ImageList that synchronizes the images downloaded through a web socket and which in turn loads the Image component unit that renders the thumbnails processed in grayscale.

For the back-end, after several failed tests with the libraries: image magick, sharp, opencv, which have a high coupling including binary dependencies to work, I found the jimp library that worked perfectly converting the downloaded image to grayscale and also generating your thumbnail at 50% of its size.

## :checkered_flag: Dependencies

- Node: 14.15.0
- npm: 6.14.8
- Docker: 20.10.2
- Git 2.28.0.1

For use this repository, follow the steps:

For first terminal tab, do:

> git clone <https://github.com/nicksonjean/55pbx-challenge.git>\

*For Linux, Mac or WLS do:*
> mv .env.file to .env

*For Windows do:*
> ren .env.file to .env

Continue...

> cd .\55pbx-challenge\
> docker compose up

For second terminal tab, do:

> cd .\api\
> npm i
> npm start

The API will be available at: http://localhost:5001/v1

And finally to third terminal tab, do:

> cd ..\front\
> npm i
> npm start

Access http://localhost:3000 via browser

## :memo: Problematic

Create a page that receives a URL to any website (example: "www.google.com.br"). Done this, extract all images from the link in question via backend, store them in a directory any and apply a transformation to make them only grayscale. Light into account the consumption of memory and processing since there is no limit to the number of images that can be downloaded per page or the number of requests for extractions at a time. Store the page link and path of each downloaded image in a bank of data and display thumbnails of these images on the screen as each one is processed is completed (progressively in real time)

## :ledger: Requirements

All backend code must run in Node.js environment and database technology used must be MongoDB. All communication between frontend and backend must be done using the "socket.io" library. In addition, good practices of object-oriented programming.

The project must be versioned using Git and it is important that the README explains the step-by-step instructions on how to prepare/install and run the project.

## :bust_in_silhouette: Autor

### Nickson Jeanmerson

---

This README was generated with ❤️ by **Nickson Jeanmerson**
