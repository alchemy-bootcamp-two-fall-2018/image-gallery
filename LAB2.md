Image Gallery Day 2
===

## Code Kata

Complete [Kata](https://www.codewars.com/kata/alternate-capitalization/javascript)

## Lab

This is a paired, multi-day lab. For day two, build out:

1. Album Detail sub routes for:
    1. View 1 (Thumbnail)
    1. View 2 (Gallery)
    1. View 3 (List)
1. Save data to local storage
    1. Check on load and use if found
    1. Save when data changes
1. Add Album
    1. You will need to tell api so it can save data
1. Add Image
    1. You will need to tell api so it can save data
1. BONUS:
    1. Edit Album (change title and/or description)
    1. Edit Image (change title, description, and/or url)

## Routes

* `/` | Home page (provide link to `/albums`
* `/about` | About page (make something up)
* `/albums` | List of albums
* `/albums/:id` | Album detail with child routes:
    * `thumbnail` | Album detail with thumbnails of images
    * `gallery` | Album detail with gallery image viewer
    * `list` | Album detail with text list of images
    * BONUS: Another option is to use a subroute of `new` to add a new image!

## Components

* `App` | top-level app component. common menu
    * `Home` | Home Page
    * `About` | About Page
    * `Albums` | displays list of alblums
    * `AddAlbum` | Displayed in-line in the list of albums
    * `AlbumDetail` | Displays name of album plus description, has sub-router for views
        * `ThumbnailViewer` | <placeholder>, will display thumbnails with image title
        * `GalleryViewer` | <placeholder>, will display big image with buttons for prev and next
        * `ListViewer` | <placeholder>, will display tabular data amount images
        * BONUS: `AddImage` | <placeholder>, will display form for adding new image
        
## Rubric **20pts**

* Vue Router setup, views, and links:
    * Child Routes **2pts**
* Add new Album **1pt**
* Album Detail Buttons/Links for switching view **1pts**
* New image views:
    * List View **2pts**
    * Gallery View **2pts**
* Idomatic Vue components **1pts**
* Project Organization (folder structure and file and folder naming) **1pts**
    