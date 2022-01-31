<!doctype html>
<html lang="en">
<head>
<meta charset="UTF-8">
<title>Example - example-ngRepeat-tracking-production</title>
<link href="animations.css" rel="stylesheet" type="text/css">
<script src="//code.angularjs.org/snapshot/angular.min.js"></script>
<script src="//code.angularjs.org/snapshot/angular-animate.js"></script>
<script src="script.js"></script>
</head>
<body ng-app="ngRepeat">
<div ng-controller="repeatController">
<button ng-click="removeFirst()">Remove First</button>
<button ng-click="updateAge()">Update Age</button>
<button ng-click="copy()">Copy</button>
<br><button ng-click="reset()">Reset List</button>
<br>
<code>track by $id(friend)</code> (default):
<ul class="example-animate-container">
<li class="animate-repeat" ng-repeat="friend in friends">
{{friend.name}} is {{friend.age}} years old.
</li>
</ul>
<code>track by $id(friend)</code> (default), with age one-time binding:
<ul class="example-animate-container">
<li class="animate-repeat" ng-repeat="friend in friends">
{{friend.name}} is {{::friend.age}} years old.
</li>
</ul>
<code>track by friend.name</code>, with age one-time binding:
<ul class="example-animate-container">
<li class="animate-repeat" ng-repeat="friend in friends track by friend.name">
{{friend.name}} is {{::friend.age}} years old.
</li>
</ul>
<code>track by $index</code>, with age one-time binding:
<ul class="example-animate-container">
<li class="animate-repeat" ng-repeat="friend in friends track by $index">
{{friend.name}} is {{::friend.age}} years old.
</li>
 
</ul>
</div>
</body>
</html>

