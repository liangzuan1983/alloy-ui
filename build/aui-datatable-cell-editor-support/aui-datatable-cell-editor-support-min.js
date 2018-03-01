YUI.add("aui-datatable-cell-editor-support",function(e,t){var n,r;n=function(t){return t instanceof e.BaseCellEditor},r=function(){},r.NAME="dataTableCellEditorSupport",r.EDITOR_ZINDEX=9999,r.ATTRS={editEvent:{setter:"_setEditEvent",validator:e.Lang.isString,value:"click"}},e.mix(r.prototype,{initializer:function(){var t=this,n=t.get("editEvent");t.CLASS_NAMES_CELL_EDITOR_SUPPORT={cell:t.getClassName("cell"),readOnly:t.getClassName("read","only")},t.after("render",t._afterCellEditorSupportRender),t.delegate(n,t._onEditCell,"."+t.CLASS_NAMES_CELL_EDITOR_SUPPORT.cell,t),e.after(t._afterSelectionKey,t,"_onSelectionKey")},getEditor:function(e,t){var n=t.editor,r=e.get("editor");return n===!1||r===!1?null:r||n},_afterCellEditorSupportRender:function(){var t=this;t._syncModelsReadOnlyUI(),t.body.after(e.bind(t._syncModelsReadOnlyUI,t),t.body,"render")},_afterSelectionKey:function(e){var t=this,n=t.get("activeCell");n&&e.keyCode===13&&t._onEditCell(n)},_onEditCell:function(t){var i=this,s=i.get("activeCell"),o=t.alignNode||s,u=i.getColumn(o),a=i.getRecord(o),f=i.getEditor(a,u);n(f)&&!a.get("readOnly")&&(f.get("rendered")||(f.on({visibleChange:e.bind(i._onEditorVisibleChange,i),save:e.bind(i._onEditorSave,i),cancel:e.bind(i._onEditorCancel,i)}),f.set("zIndex",r.EDITOR_ZINDEX),f.render()),f.set("value",a.get(u.key)),f.show().move(o.getXY()))},_onEditorCancel:function(){var e=this;e._refocusActiveCell()},_onEditorSave:function(e){var t=this,n=e.currentTarget,r=t.getActiveColumn(),i=t.getActiveRecord();n.set("value",e.newVal),i.set(r.key,n.formatValue(n.get("inputFormatter"),e.newVal)),t._refocusActiveCell()},_onEditorVisibleChange:function(e){var t=e.currentTarget;e.newVal&&t._syncFocus()},_refocusActiveCell:function(){var e=this,t=e.get("activeCell"),n=e.getCoord(t);e.set("activeCoord",n),e.set("selection",n)},_syncModelReadOnlyUI:function(e){var t=this,n=t.getRow(e);n.toggleClass(t.CLASS_NAMES_CELL_EDITOR_SUPPORT.readOnly,e.get("readOnly")===!0)},_syncModelsReadOnlyUI:function(){var e=this;e.get("data").each(function(t){e._syncModelReadOnlyUI(t)})},getCellEditor:function(){return this.getEditor.apply(this,arguments)},getRecordColumnValue:function(e,t){return e.get(t.key)}}),e.DataTable.CellEditorSupport=r,e.Base.mix(e.DataTable,[r])},"3.1.0-deprecated.40",{requires:["datatable-base"]});
