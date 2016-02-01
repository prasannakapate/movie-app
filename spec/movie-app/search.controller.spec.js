describe('Search Controller', function() {
    var $scope;
    var $location;

    beforeEach(module('movieApp'));

    beforeEach(inject(function(_$controller_, _$location_) {
        $location = _$location_;
        $scope = {};
        _$controller_('SearchController', { $scope: $scope, $location: $location});
    }));

    it('should redirect to query results page for non-empty query', function() {
        $scope.query = 'star wars';
        $scope.search();
        expect($location.url()).toBe('/results?q=star%20wars');
    });

    it('should not redirect to query results for empty query', function() {
        $scope.query = '';
        $scope.search();
        expect($location.url()).toBe('');
    });
});
