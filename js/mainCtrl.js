/**
 * Created by tanner on 2/9/17.
 */
angular.module('quoteBook').controller('mainCtrl', function ($scope, dataService)
{
    $scope.quotes = dataService.getQuotes();
    $scope.deleteMe = dataService.removeData;
    $scope.addQuote = function ()
    {
        if (isWhitespace($scope.newQuoteText) || isWhitespace($scope.newQuoteAuthor))
            return;

        dataService.addData({text: $scope.newQuoteText.trim(), author: $scope.newQuoteAuthor.trim()});
        $scope.newQuoteText = null;
        $scope.newQuoteAuthor = null;
    };
});

function isWhitespace(str)
{
    return str === undefined || str === null || str.trim().length === 0;
}