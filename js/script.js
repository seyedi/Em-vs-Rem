var app = angular.module('emvsrem', []);

app
.controller('AppCtrl', ['$scope', function ($scope) {

  $scope.html_fontSize = '16px';
  $scope.html_fontSize_px = null;
  $scope.htmlIsPx = true;

  $scope.main_fontSize = '16px';
  $scope.main_fontSize_px = null;
  $scope.mainIsPx = true;

  $scope.em_fontSize= '1.6em';
  $scope.em_fontSize_px= null;

  $scope.em_pad= '1em';

  $scope.rem_fontSize = '1.6rem';

  $scope.rem_pad='1rem';

  var unitTrim = function(str , unit) {
    if(str.indexOf(unit) > -1) {
      return str.substring( 0, str.indexOf(unit) );
    }

    return null;
  }

  $scope.html = function(val) {

    if(val == '0') {
      $scope.html_fontSize_px = 0;
      return 0;
    }

    else if(val == '') {
      return 1;
    }

    else if(val.indexOf('px') > -1) {
      $scope.htmlIsPx = true;      

      if( unitTrim(val, 'px') == '') {
        return 1;
      }

      else {
        $scope.html_fontSize_px = unitTrim(val, 'px');
      }
    }

    else if (val.indexOf('rem') > -1) {
      $scope.htmlIsPx = false;

      if( unitTrim(val, 'rem') == '') {
        $scope.htmlIsPx = true;
        return 1;
      }

      return unitTrim(val, 'rem');        
    }

    else if(val.indexOf('em') > -1) {
      $scope.htmlIsPx = false;

      if( unitTrim(val, 'em') == '') {
        $scope.htmlIsPx = true;        
        return 1;
      }

      return unitTrim(val, 'em');
    }

    else {
      $scope.htmlIsPx = true;
      return 1;
    }
  }

  $scope.main = function(val) {

    if(val == '0') {
      $scope.main_fontSize_px = 0;
      return 0;
    }

    else if(val == '') {
      return 1;
    }

    else if(val.indexOf('px') > -1) {
      $scope.mainIsPx = true;      

      if( unitTrim(val, 'px') == '') {
        return 1;
      }

      else {
        $scope.main_fontSize_px = unitTrim(val, 'px');
      }
    }

    else if (val.indexOf('rem') > -1) {
      $scope.mainIsPx = false;

      if( unitTrim(val, 'rem') == '') {
        $scope.mainIsPx = true;
        return 1;
      }

      console.log(unitTrim(val, 'rem'));

      return unitTrim(val, 'rem');        
    }

    else if(val.indexOf('em') > -1) {
      $scope.mainIsPx = false;

      if( unitTrim(val, 'em') == '') {
        $scope.mainIsPx = true;        
        return 1;
      }

      return unitTrim(val, 'em');
    }

    else {
      $scope.mainIsPx = true;
      return 1;
    }
  }
  
  $scope.makeItLookGood = function(val) {
    if(val.indexOf('px') > -1) {
      return Math.round(unitTrim(val, 'px') * 10) / 10;
    }

    else if(val.indexOf('rem') > -1) {
      return Math.round(unitTrim(val, 'rem') * 10) / 10;
    }

    else if(val.indexOf('em') > -1) {
      return Math.round(unitTrim(val, 'em') * 10) / 10;
    }

    else {
      return null;
    }
  }


  $scope.roundMeUp = function(val) {
    return Math.round(val * 10) / 10;
  }

  // $scope.rem2px = null;


}])

.directive('contenteditable', function() {
    return {
        require: 'ngModel',
        link: function(scope, elm, attrs, ctrl) {
  
            elm.bind('keyup', function() {
                scope.$apply(function() {
                    ctrl.$setViewValue(elm.html());
                });
            });

  
            ctrl.$render = function() {
                elm.html(ctrl.$viewValue);
            };
        }
    };
});
