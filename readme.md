# OpenFinder

Openfinder is a file manager/picker which can be integrated in GrapeJS asset manager/CK editor and TinyMCE

![ScreenShot](https://github.com/akmittal/openfinder/blob/master/screenshot/image1.png?raw=true)

## Server
server is a node js app, can be run independently or as a Express middleware

## Client
Client is a web component 
api

 ```
 <file-manager serverURL="http://localhost:3000" @mediaselected=${handleMediaSelection} @fm:cancelled=${handleCancelled}>
 ```
