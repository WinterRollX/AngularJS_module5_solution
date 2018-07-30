(function () {
	// my-info controller
	// provide function of retriving personal info and hold the data needed for the component.

	"use strict";
	angular.module('public').controller("MyInfoController",MyInfoController);

	MyInfoController.$inject = ["MenuService","ApiPath"];
	function MyInfoController(MenuService,ApiPath) {
		var myInfoCtrl = this;
		myInfoCtrl.isLoaded = MenuService.isLogin();
		console.log(myInfoCtrl.isLoaded);
		myInfoCtrl.basePath = ApiPath;
		
		angular.element(document).ready(function () {
			if(MenuService.isLogin()){
				myInfoCtrl.personalInfo = MenuService.getPersonalInfo();

			// well, this method is so bug prone.
			//$location.url("/loginNeeded") ; 

		}
		
		});
		
	}




})();