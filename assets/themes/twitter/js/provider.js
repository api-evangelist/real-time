function listProviders()
    {
    $.getJSON('data/providers.json', function(data) {
    	toggle = 0;
    	 $.each(data['stack'], function(key, val) {
			var template = $('#providerListingTemplate').html();
			var html = Mustache.to_html(template, val);
			$('#providerListing').append(html);    						
	        });
        });

    }    
     