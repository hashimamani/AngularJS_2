/*
 * Cytonn Technologies
 *
 * @author: Hashim Amani <hamani@cytonn.com>
 *
 * Project: Javascript_events.
 *
 */
angular.module('App', []).controller('CrudCtrl', ['$scope',
    function($scope) {
      $scope.Profiles = [
          {
            name : "Amani",
            country : "Kenya",
            editable : false    


          },
         
        ];
     
     $scope.entity = {}
        
     $scope.edit = function(index){
       $scope.entity = $scope.Profiles[index];
       $scope.entity.index = index;
       $scope.entity.editable = true;
     }
        
     $scope.delete = function(index){
       $scope.Profiles.splice(index,1);
     }

       $scope.searchcustomer= ''; 
       
       
        
     $scope.save = function(index){
       $scope.Profiles[index].editable = false;
       
     }
        
     $scope.add = function(){
       $scope.Profiles.push({
          name : "",
        country : "",
        editable : true
       })
     }
    }
]);