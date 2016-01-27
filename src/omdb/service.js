angular.module('omdb', [])
    .factory('omdbApi', function($http, $q) {
        var service = {};
        var baseUrl = 'http://www.omdbapi.com/?v=1&';

        function httpPromise(url) {
            var deffered = $q.defer();
            $http.get(url)
                .success(function(data) {
                    deffered.resolve(data);
                })
                .error(function() {
                    deffered.reject();
                });
            return deffered.promise;
        }

        service.search = function(query) {
            return httpPromise(baseUrl + 's=' + encodeURIComponent(query));
        };

        service.find = function(id) {
            return httpPromise(baseUrl + 'i=' + id)
        };

        return service;
    });
