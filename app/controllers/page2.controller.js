(function () {
    angular.module("app")
        .controller("Page2Controller", Page2Controller);

    Page2Controller.$inject = ["$scope", "CommonService"];

    function Page2Controller($scope, CommonService) {
        $scope.commonService = CommonService;

        $scope.search = {
            name: ""
        };
        $scope.sortBy = [];

        setInterval(function () {
            console.log($scope.sortBy);
        }, 1000);

        $scope.items = [
            {
                "name": "Scott Hendrix",
                "age": 47,
                "company": "Apple Systems"
            },
            {
                "name": "Charles Pruitt",
                "age": 31,
                "company": "Sibelius"
            },
            {
                "name": "Asher Harding",
                "age": 27,
                "company": "Lavasoft"
            },
            {
                "name": "Jerome Jimenez",
                "age": 21,
                "company": "Macromedia"
            },
            {
                "name": "Ray Pickett",
                "age": 19,
                "company": "Lycos"
            },
            {
                "name": "Ulysses Mccormick",
                "age": 39,
                "company": "Yahoo"
            },
            {
                "name": "Malik Dorsey",
                "age": 36,
                "company": "Sibelius"
            },
            {
                "name": "Patrick Hensley",
                "age": 29,
                "company": "Apple Systems"
            },
            {
                "name": "Joseph Waters",
                "age": 28,
                "company": "Adobe"
            },
            {
                "name": "Drake Waller",
                "age": 21,
                "company": "Microsoft"
            },
            {
                "name": "Kirk Garza",
                "age": 29,
                "company": "Lycos"
            },
            {
                "name": "Jared Welch",
                "age": 59,
                "company": "Cakewalk"
            },
            {
                "name": "Jared Preston",
                "age": 68,
                "company": "Finale"
            },
            {
                "name": "Malachi Hughes",
                "age": 28,
                "company": "Borland"
            },
            {
                "name": "Leonard Pollard",
                "age": 42,
                "company": "Cakewalk"
            },
            {
                "name": "Allen Jones",
                "age": 31,
                "company": "Lycos"
            },
            {
                "name": "Kieran Garrison",
                "age": 18,
                "company": "Lavasoft"
            },
            {
                "name": "Stephen Guzman",
                "age": 37,
                "company": "Adobe"
            },
            {
                "name": "Josiah Cabrera",
                "age": 28,
                "company": "Adobe"
            },
            {
                "name": "Barry Hull",
                "age": 24,
                "company": "Lavasoft"
            },
            {
                "name": "Arsenio Santana",
                "age": 36,
                "company": "Adobe"
            },
            {
                "name": "Simon Patrick",
                "age": 55,
                "company": "Microsoft"
            },
            {
                "name": "Graham Glenn",
                "age": 56,
                "company": "Sibelius"
            },
            {
                "name": "Hammett Schwartz",
                "age": 66,
                "company": "Google"
            },
            {
                "name": "Hu Martin",
                "age": 63,
                "company": "Yahoo"
            },
            {
                "name": "Orlando Gould",
                "age": 51,
                "company": "Lycos"
            },
            {
                "name": "Brendan Mccarthy",
                "age": 29,
                "company": "Microsoft"
            },
            {
                "name": "Tobias Curry",
                "age": 41,
                "company": "Apple Systems"
            },
            {
                "name": "Channing Huffman",
                "age": 19,
                "company": "Microsoft"
            },
            {
                "name": "Reese Oneill",
                "age": 19,
                "company": "Finale"
            },
            {
                "name": "Slade Kirby",
                "age": 28,
                "company": "Chami"
            },
            {
                "name": "Colin Blair",
                "age": 49,
                "company": "Altavista"
            },
            {
                "name": "Colt Haney",
                "age": 51,
                "company": "Chami"
            },
            {
                "name": "Kieran Hardin",
                "age": 34,
                "company": "Chami"
            },
            {
                "name": "Burton Compton",
                "age": 67,
                "company": "Lycos"
            },
            {
                "name": "Buckminster Berg",
                "age": 33,
                "company": "Yahoo"
            },
            {
                "name": "Curran Duran",
                "age": 66,
                "company": "Yahoo"
            },
            {
                "name": "Ethan Walters",
                "age": 59,
                "company": "Google"
            },
            {
                "name": "Dieter Lott",
                "age": 28,
                "company": "Sibelius"
            },
            {
                "name": "Galvin Harding",
                "age": 67,
                "company": "Chami"
            },
            {
                "name": "Walter Barber",
                "age": 28,
                "company": "Yahoo"
            },
            {
                "name": "Elton Brown",
                "age": 58,
                "company": "Adobe"
            },
            {
                "name": "Lane Navarro",
                "age": 45,
                "company": "Microsoft"
            },
            {
                "name": "Nathan Pena",
                "age": 35,
                "company": "Chami"
            },
            {
                "name": "Burton Rogers",
                "age": 23,
                "company": "Macromedia"
            },
            {
                "name": "Declan Trujillo",
                "age": 33,
                "company": "Apple Systems"
            },
            {
                "name": "Alexander Reilly",
                "age": 62,
                "company": "Finale"
            },
            {
                "name": "William Sargent",
                "age": 67,
                "company": "Borland"
            },
            {
                "name": "Connor Vance",
                "age": 62,
                "company": "Google"
            },
            {
                "name": "Paki Day",
                "age": 27,
                "company": "Google"
            }
        ];
    }
}());