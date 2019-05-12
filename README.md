# Restaurant Review App (Stage 1)

## Overview
  - Responsive layout
  - Responsive images for sizing and art direction
  - Dynamically generated list of restaurants and restaurant detailed page
  - Accessibility considerations
  - Offline availablity of chached assets by means of Service Worker

## Running the Program

  - start a local server using Python (or preferred method)
      - check if python is installed:
        - `python -V;`
      - in terminal, navigate to this projects root directory
        - `cd `/path/to/project/`mws-restaurant-stage-1-master;`
      - start a local server on port 8000 (Python 2.7.5)
        - `python -m SimpleHTTPServer 8000;`
      - In a browser, navigate to "localhost:8000"
    - click "View Details" buttons to read review of displayed restaurants
    - click "Restaurant Reviews" in header or "Home" in breadcrumb navigation menu

### Dependencies:

  - Python version 2 or above
  -  [leafletjs](https://leafletjs.com/)
  - [Mapbox](https://www.mapbox.com/) 
    - API key included 
  - Browser that supports Javascript and Service Worker API
  - Google Stylesheet
    - "//normalize-css.googlecode.com/svn/trunk/normalize.css"
