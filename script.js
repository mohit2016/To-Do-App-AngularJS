var todoapp = angular.module("todoapp",[]);
todoapp.controller("todocontroller",['$scope',function($scope){

    //variables declared
    $scope.showaddbutton = true;
    $scope.taskarray = [];
    var newtask = {};
    $scope.newtask = newtask;
   
   // add task method
    $scope.addnewtask = function(task){

            $scope.taskarray.push(task);
            localStorage.localdata = JSON.stringify($scope.taskarray);
          
          $scope.newtask.name = " ";
          $scope.newtask.description = " ";
          //$scope.newtask.date = "mm/dd/yyyy";
        
         $scope.fetchdata();
    }
            //To get the data from local storage
           $scope.fetchdata=function(){
                $scope.taskarray = JSON.parse(localStorage.localdata);
           }

           //remove the task
        $scope.removetask = function(remove){
            
            $scope.taskarray.splice(remove.$index,1);
            localStorage.localdata = JSON.stringify($scope.taskarray);
        }

        //Edit task
        $scope.edittask = function(edit){
            //console.log(edit);

            $scope.showaddbutton = false;

           // $scope.editthisitem = edit.$index;

            $scope.newtask.name = edit.t.name;
            $scope.newtask.description = edit.t.description;
           // $scope.newtask.date = edit.date;
          

                // Save the edited Data
                    $scope.savedata = function(savethis){
                        $scope.showaddbutton = true;
                        //console.log(savethis);
                        $scope.taskarray[edit.$index].name = $scope.newtask.name;
                        $scope.taskarray[edit.$index].description = $scope.newtask.description;
                        localStorage.localdata = JSON.stringify($scope.taskarray);

                                $scope.newtask.name = " ";
                                $scope.newtask.description = " ";
                    }

        }
  
}]);
