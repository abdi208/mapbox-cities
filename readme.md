# MAPBOX!!

We're going to make a very simple app using mapbox to search for cities, favourite them, and display them on a map!

## Routes

| Path | Method | View | Description |
|:----:|:------:|:----:|:-----------:|
| /search | GET | citySearch | Show the search form to search for cities |
| /results | GET | searchResults | Use forward geocoding to search for cities in the US (_use the `type` and `countries` fields in addition to `query`_) |
| /add | POST | redirect(/favorites) | Add a city to the favorite database (_use `findOrCreate` to avoid duplicates_) |
| /favorites | GET | favorites | Pull all favorites cities from the database and display them |
| /:id | DELETE | redirect(/favorites) | Delete a city from the favorites

## Tech

As you can see, we will be saving things to a database, so we'll need to install all the relevant tech.

* express
* ejs
* express-ejs-layouts
* dotenv
* sequelize
* pg
* method-override
* @mapbox/mapbox-sdk

## What you'll need

You'll need an api-key for mapbox, so sign up on their webpage and then copy that into an `env` file 

