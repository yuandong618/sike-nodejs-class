var Class=function (properties,parent){

	//constructor ,also means current class
	function ctor(){
		if(properties.hasOwnProperty("initialize")){
			properties["initialize"].apply(this,arguments);//
		}

	}
	//parent exist 
	if(parent){
		ctor.prototype=Object.create(parent.prototype);//points to parent
		ctor.prototype.constructor=ctor;
	}
	ctor.__super__=parent||Object;
	//traverse function
	for(var key in properties){
		if(!properties.hasOwnProperty)
		{
			continue;
		}

		if(key==="initialize")
		{
			continue;
		}

		ctor.prototype[key]=properties[key];
	}
	//super method
	ctor.prototype.super=function (){
		var currentClass=ctor;

		return function(methodName){
			var oldClass=currentClass;
			currentClass=oldClass.__super__;
			var result= currentClass.prototype[methodName].apply(this,[].slice.call(arguments, 1));
			//recover
			currentClass=oldClass;
			return result;
		}
	}();

	return ctor;
}

module.exports=Class;