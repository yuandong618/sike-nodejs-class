var Class=function (properties){
	//constructor
	function ctor(){
		if(properties.hasOwnProperty("initialize")){
			properties["initialize"].apply(this,arguments);
		}
	}

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
	return ctor;
}

module.exports=Class;