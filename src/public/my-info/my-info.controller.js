(function () {
	// my-info controller
	// provide function of retriving personal info and hold the data needed for the component.

	"use strict";
	angular.module('public').controller("MyInfoController",MyInfoController);

	MyInfoController.$inject = ["MenuService","$window","ApiPath"];
	function MyInfoController(MenuService,$window,ApiPath) {
		var myInfoCtrl = this;
		myInfoCtrl.basePath = ApiPath;
		if(!MenuService.isLogin()){
			$window.location.href = '/index.html#/loginNeeded';
		}else
		{
			myInfoCtrl.personalInfo = MenuService.getPersonalInfo();
			

		}
	}




})();