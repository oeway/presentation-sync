# Presentation Sync

Powered by socket.io, heroku, node.js

Author: Will Ouyang

## Usage 1: Chrome Extension
Just add [Presentation Sync](https://chrome.google.com/webstore/detail/presentation-sync/eipedjifhojoogdilhodlpkajogkkdeg)  Extension to your Chrome. Open your Presentation and click the button "Sync Present" on the page.

## Usage 2: Bookmarklet

1. Add the following link to your book mark by right click or drag it: [Presentation_Sync_Gadget](javascript:(function(){var socket_script = document.createElement('script');socket_script.src = 'https://presentation-sync.herokuapp.com/socket.io/socket.io.js';(document.head||document.documentElement).insertBefore(socket_script);})();). If you can't add it(on ipad for example), you can add it manually. Create a bookmark and fill url field with the text copied from [this page](http://presentation-sync.herokuapp.com/bookmarklet.txt).

2. Open your google presentation file and click the bookmark.

3. Anyone else open the same file and cliked the bookmark will keep be synchronised with you.

## Demo site

http://presentation-sync.herokuapp.com/
