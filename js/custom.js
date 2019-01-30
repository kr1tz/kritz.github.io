/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$( document ).ready(function()
{
    
    var userFeed = new Instafeed({
    get: 'user',
    userId: '5395660838',
    limit:12,
    resolution: 'standard_resolution',
    accessToken: '5395660838.1677ed0.f283ce8b7c024cc3a58b1e5ed90799a9',
    sortBy: 'most-recent',
    template: '<div class="col-lg-4 gallery instaimg"><a here="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>'
    
    });
userFeed.run();

$('.gallery').magnificPopup({
    type:'image',
    delegate: 'a',
    gallery: {
        enabled:true
    }
    });
});

