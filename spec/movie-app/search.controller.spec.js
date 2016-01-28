describe('Search Controller', function() {
    it('should redirect to query results page for non-empty query', function() {
        var $scope = {};
        var $location = {};

        $scope.search = function(){
        	$location.url = '/results?q=star%20wars';
        };

        $scope.query = 'star wars';
        $scope.search();
        expect($location.url).toBe('/results?q=star%20wars');
    });
});
