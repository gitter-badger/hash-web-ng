(function () {
  'use strict';

  angular
    .module('hash.api')
    .factory('AnalyticsTwitter', function($resource, HASH_API_BASE_URI) {

      var PARAMS = {
        period: null, 
        'tags[]': [], 
        'hashtags[]': [], 
        retrive_blocked: null, 
        page: null, 
        per_page: null 
      };
      
      return $resource('', null, {
        mostRetweetedTweets: {
          method: 'GET', 
          url:  HASH_API_BASE_URI + '/analytics/twitter/most_retweeted_tweets', 
          params: PARAMS,
          cache: true
        },
        mostMentionedUsers: {
          method: 'GET', 
          url:  HASH_API_BASE_URI + '/analytics/twitter/most_mentioned_users', 
          params: PARAMS,
          cache: true
        },
        mostRetweetedUrls: {
          method: 'GET', 
          url:  HASH_API_BASE_URI + '/analytics/twitter/most_retweeted_urls', 
          params: PARAMS,
          cache: true
        },
        mostRetweetedImages: {
          method: 'GET', 
          url:  HASH_API_BASE_URI + '/analytics/twitter/most_retweeted_images', 
          params: PARAMS,
          cache: true
        },
        mostActiveUsers: {
          method: 'GET', 
          url:  HASH_API_BASE_URI + '/analytics/twitter/most_active_users', 
          params: PARAMS,
          cache: true
        },
        mostPopularHashtags: {
          method: 'GET', 
          url:  HASH_API_BASE_URI + '/analytics/twitter/most_popular_hashtags', 
          params: PARAMS,
          cache: true
        },
        geolocation: {
          method: 'GET', 
          url:  HASH_API_BASE_URI + '/analytics/twitter/geolocation', 
          params: PARAMS,
          cache: true
        }
      });

    });

})();