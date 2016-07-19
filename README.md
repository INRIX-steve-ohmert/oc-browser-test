# OpenCar Browser Validation tests

This repository contains a series of tests that can be used to begin to ascertain if a browser supports the features required to run the OpenCar framework. In order to run these tests click on "Clone or download" on this page, and download a zip of this repository to your local dev machine. It can then be run through Python's HTTP server.

The commands to serve these files through Python are slightly different depending on your Python version. First `cd` into the unzipped copy of this repository on your local dev machine, and then check your python version by opening a terminal window and running `python -V`. If you are running Python 2, from the root level of this repository run ``python -m SimpleHTTPServer``. If you are running Python 3 run the command ``python -m http.server`` from the root level of this repository. Then point your target browser at port 8000 on the local dev machine. 
