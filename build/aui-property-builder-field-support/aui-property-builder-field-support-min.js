YUI.add("aui-property-builder-field-support",function(e,t){var n,r=function(t){return e.instanceOf(t,e.ArrayList)},n=function(){};n.ATTRS={fields:{value:[],setter:"_setFields",validator:function(t){return e.Lang.isArray(t)||r(t)}},maxFields:{value:Infinity,validator:e.Lang.isNumber}},e.mix(n.prototype,{_setFields:function(e){var t=this;return r(e)?e:t.createFields(e)},_updateFields:function(e){var t=this;t.set("fields",e)},addField:function(e,t){var n=this;if(n.get("fields").size()<n.get("maxFields")){var r=n.createField(e);return r&&n._updateFields(n.get("fields").add(r,t)),r}return null},createFields:function(t){var n=this,r=[];return e.Array.each(t,function(e,t){t<n.get("maxFields")&&r.push(n.createField(e))}),new e.ArrayList(r)},removeField:function(e){var t=this;t._updateFields(t.get("fields").remove(e))}}),e.PropertyBuilderFieldSupport=n},"3.1.0-deprecated.40");
