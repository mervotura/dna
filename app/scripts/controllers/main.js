'use strict';

/**
 * @ngdoc function
 * @name hoqiiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the hoqiiApp
 */
angular.module('hoqiiApp')
  .controller('MainCtrl', function ($scope, $animate, $window) {
    $animate.enabled(false);
    $scope.slide = {
    	'interval': 5000,
    	'slides': [
    		{
    			'image': 'images/bg1.jpg',
    			'text': 'title',
    			'title': 'Device',
    			'description': 'Device atau perangkat adalah gabungan antara perangkat keras dengan piranti lunak.',
    			'faClass': 'icon-responsive16',
                'link': '#device'
    		},
    		{
    			'image': 'images/bg2.jpg',
    			'text': 'title',
    			'title': 'Network',
    			'description': 'Network atau jaringan adalah media komunikasi antara perangkat, sehingga terjadi nilai tambah.',
    			'faClass': 'icon-tree',
                'link': '#network'
    		},
    		{
    			'image': 'images/bg3.jpg',
    			'text': 'title',
    			'title': 'Aplication ',
    			'description': 'Application adalah piranti lunak yang dikembangkan sesuai dengan kebutuhan',
    			'faClass': 'icon-web9',
                'link': '#application'
    		}
    	]
    };

    $scope.slides = $scope.slide.slides;

    $scope.slide.labelStyle = {
    	'padding-top': $window.innerHeight/3
    };

    $scope.slide.getStyle = function(index) {
    	return {
    		'height': $window.innerHeight,
    		'background-image': 'url(' + $scope.slide.slides[index].image + ')',
    		'background-position': '50%',
            'background-size': 'cover'
    	};
    };
  });
