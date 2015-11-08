angular.module('triangleApp', []) 
  .controller('TriangleController', ['$scope', function($scope){
    var tri = this
    $scope.done = function(){
      tri.type='';
      if(tri.first == Number(tri.first) && tri.second == Number(tri.second) && tri.third == Number(tri.third) && (tri.first>0 && tri.second>0 && tri.third>0)){
        if(tri.first && tri.second && tri.third){
          if(!(parseFloat(tri.first)+parseFloat(tri.second)<=parseFloat(tri.third) || parseFloat(tri.second)+parseFloat(tri.third)<=parseFloat(tri.first) || parseFloat(tri.first)+parseFloat(tri.third)<=parseFloat(tri.second))){
            if(tri.first === tri.second && tri.second === tri.third && tri.first=== tri.third){
              tri.type = 1;
            }else if((tri.first === tri.second)||(tri.first === tri.third)||(tri.second === tri.third)){
              tri.type = 2; 
            }else if(square(tri.first,tri.second,tri.third)||square(tri.first,tri.third,tri.second)||square(tri.third,tri.second,tri.first)){
              tri.type = 3;
            }else{
              tri.type = 4;
            }

            return true;
          }
        }
      }
        return false;
    }
  var square = function(a,b,c){
    if(Math.pow(a,2)+Math.pow(b,2)===Math.pow(c,2)){
      return true;
    }
    return false;
  }

  }]);
