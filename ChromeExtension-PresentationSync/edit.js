$(document).ready(function(){
				
				$(".docs-titlebar-buttons").prepend('<div role="button" id="docs-docos-remotesbutton" class="goog-inline-block jfk-button jfk-button-standard docs-titlebar-button" aria-disabled="false" aria-pressed="false" data-tooltip="Present in sync mode" aria-label="Open comments thread (⌘+Alt+Shift+A)" value="undefined" tabindex="0" style="-webkit-user-select: none;">Sync Present</div>');
				$("#docs-docos-remotesbutton").click(function() {
						var url = document.URL;
						url = url.split('/');
						url = url[5];
						window.open("https://docs.google.com/presentation/d/" + url + "/present", '',   'width=' + screen.width + 'px, height=' + screen.height + 'px');
						
				});

});











