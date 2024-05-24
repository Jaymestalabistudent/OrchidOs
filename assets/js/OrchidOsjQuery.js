// Code to get the IP address of the user
   $.get('https://jsonip.com', function(data) {
       console.log(data.ip);
   });