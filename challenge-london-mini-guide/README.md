# Node Challenge - London Mini-Guide

In this challenge you are going to build a full stack application (server & client) that shows the number of hospitals, doctors, pharmacies and colleges in some London's boroughs.

## Server

You can find the Server Challenge [here](./SERVER.md)

## Client

You can find the Client Challenge [here](./CLIENT.md)

## Time to Complete

Between 4 and 15 hours

## Live Version

You can find the website running live here:

https://london-mini-guide-challenge.netlify.app/

You don't need to know where the server is actually hosted.

![project screenshot](https://i.imgur.com/Or1tNpV.png)

## Data Source

The data is provided to you in a folder `./data` which contains 3 files: `Harrow.json`, `Heathrow.json` and `Stratford.json`.

Each file in this format:

```js
{
    "pharmacies" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ],

    "colleges" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ],

    "doctors" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ],

    "hospitals" : [
        {
            "name" :
            "address":
            "website":
            "phone" :
        }
    ]
}
```

Data source: https://www.yell.com/

Data has been collected using a technique called `web scraping`.

If you are curious about this check [this repository](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city) or [this Youtube video](https://github.com/ahmad-ali14/web-scraping---get-all-businesses-data-in-any-city). This is completely optional.
