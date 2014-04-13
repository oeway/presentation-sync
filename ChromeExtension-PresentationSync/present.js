$(document).ready(function(){
                  
        var toastr_js = document.createElement('script');
        toastr_js.src = chrome.extension.getURL("toastr/toastr.js");
        toastr_js.onload = function() {
                this.parentNode.removeChild(this);
        };

        var toastr = document.createElement('link');
        toastr.href =  chrome.extension.getURL('toastr/toastr.css');
        toastr.rel = 'stylesheet';

        var responsive = document.createElement('link');
        responsive.href =  chrome.extension.getURL('toastr/toastr-responsive.css');
        responsive.rel = 'stylesheet';
        
        (document.head||document.documentElement).insertBefore(toastr);
        (document.head||document.documentElement).insertBefore(responsive);
        //(document.head||document.documentElement).insertBefore(toastr_js);

        var socket_script = document.createElement('script');
        socket_script.src = "https://presentation-sync.herokuapp.com/socket.io/socket.io.js";//chrome.extension.getURL('socket.io.js');

        (document.head||document.documentElement).insertBefore(socket_script);


});




	



	 	
