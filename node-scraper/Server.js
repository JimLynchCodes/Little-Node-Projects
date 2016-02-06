/**
 * Created by bobolicious3000 on 1/26/16.
 */

var express = require('express')
var fs = require('fs')
var request = require('request')
var cheerio = require('cheerio')

var app = express()

app.get('/scrape', function(req, res){

    console.log("scraping")

    url = 'http://www.imdb.com/title/tt1229340'

    request(url, function(error, response, html) {
        // First, check to make sure there are no errors.
        if (!error) {
            var $ = cheerio.load(html)

            // Finally, we'll define the variables

            var title, release, rating
            var json = {title:"", release:"", rating:""}

            // use the header css class as a starting point

            $('.header').filter(function(){

                var data = $(this)

                title = data.children().first().text()

                json.title =  title

                // check how to actually get the release

                json.release = release

            })

            $('.tar-box-giga-start').filter(function(){
                var data = $(this)

                rating = data.text()

                json.rating = rating
            })

            console.log("got the json obj, title: " + json.title + " and release: " + json.release)

        }
    })

})

app.listen('8081')

console.log('listening')

module.exports = app

