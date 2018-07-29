(function () {
	// my-info controller
	// provide function of retriving personal info and hold the data needed for the component.

	"use strict";
	angular.module('public').controller("MyInfoController",MyInfoController);

	MyInfoController.$inject = ["MenuService","ApiPath",'$location'];
	function MyInfoController(MenuService,ApiPath,$location) {
		var myInfoCtrl = this;
		myInfoCtrl.basePath = ApiPath;
		if(!MenuService.isLogin()){

			$location.url("/loginNeeded") ;

		}else
		{
			myInfoCtrl.personalInfo = MenuService.getPersonalInfo();
			

		}
	}




})();