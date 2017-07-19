if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/aui-image-viewer-multiple/aui-image-viewer-multiple.js']) {
   __coverage__['build/aui-image-viewer-multiple/aui-image-viewer-multiple.js'] = {"path":"build/aui-image-viewer-multiple/aui-image-viewer-multiple.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0,"16":0,"17":0,"18":0,"19":0,"20":0,"21":0,"22":0,"23":0,"24":0},"b":{"1":[0,0],"2":[0,0],"3":[0,0,0,0],"4":[0,0]},"f":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":37},"end":{"line":1,"column":56}}},"2":{"name":"(anonymous_2)","line":40,"loc":{"start":{"line":40,"column":17},"end":{"line":40,"column":28}}},"3":{"name":"(anonymous_3)","line":66,"loc":{"start":{"line":66,"column":26},"end":{"line":66,"column":37}}},"4":{"name":"(anonymous_4)","line":76,"loc":{"start":{"line":76,"column":28},"end":{"line":76,"column":39}}},"5":{"name":"(anonymous_5)","line":86,"loc":{"start":{"line":86,"column":38},"end":{"line":86,"column":49}}},"6":{"name":"(anonymous_6)","line":98,"loc":{"start":{"line":98,"column":30},"end":{"line":98,"column":41}}},"7":{"name":"(anonymous_7)","line":108,"loc":{"start":{"line":108,"column":22},"end":{"line":108,"column":33}}},"8":{"name":"(anonymous_8)","line":126,"loc":{"start":{"line":126,"column":22},"end":{"line":126,"column":38}}},"9":{"name":"(anonymous_9)","line":137,"loc":{"start":{"line":137,"column":26},"end":{"line":137,"column":42}}},"10":{"name":"(anonymous_10)","line":159,"loc":{"start":{"line":159,"column":21},"end":{"line":159,"column":37}}},"11":{"name":"(anonymous_11)","line":173,"loc":{"start":{"line":173,"column":24},"end":{"line":173,"column":35}}},"12":{"name":"(anonymous_12)","line":190,"loc":{"start":{"line":190,"column":19},"end":{"line":190,"column":35}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":227,"column":3}},"2":{"start":{"line":31,"column":0},"end":{"line":216,"column":3}},"3":{"start":{"line":41,"column":8},"end":{"line":48,"column":10}},"4":{"start":{"line":50,"column":8},"end":{"line":57,"column":11}},"5":{"start":{"line":67,"column":8},"end":{"line":67,"column":32}},"6":{"start":{"line":77,"column":8},"end":{"line":77,"column":34}},"7":{"start":{"line":87,"column":8},"end":{"line":89,"column":11}},"8":{"start":{"line":99,"column":8},"end":{"line":99,"column":34}},"9":{"start":{"line":109,"column":8},"end":{"line":116,"column":10}},"10":{"start":{"line":127,"column":8},"end":{"line":127,"column":46}},"11":{"start":{"line":138,"column":8},"end":{"line":140,"column":44}},"12":{"start":{"line":142,"column":8},"end":{"line":147,"column":9}},"13":{"start":{"line":143,"column":12},"end":{"line":143,"column":98}},"14":{"start":{"line":145,"column":13},"end":{"line":147,"column":9}},"15":{"start":{"line":146,"column":12},"end":{"line":146,"column":98}},"16":{"start":{"line":149,"column":8},"end":{"line":149,"column":34}},"17":{"start":{"line":160,"column":8},"end":{"line":161,"column":99}},"18":{"start":{"line":163,"column":8},"end":{"line":164,"column":117}},"19":{"start":{"line":174,"column":8},"end":{"line":174,"column":90}},"20":{"start":{"line":176,"column":8},"end":{"line":180,"column":9}},"21":{"start":{"line":177,"column":12},"end":{"line":179,"column":13}},"22":{"start":{"line":178,"column":16},"end":{"line":178,"column":35}},"23":{"start":{"line":191,"column":8},"end":{"line":191,"column":103}},"24":{"start":{"line":192,"column":8},"end":{"line":194,"column":11}}},"branchMap":{"1":{"line":142,"type":"if","locations":[{"start":{"line":142,"column":8},"end":{"line":142,"column":8}},{"start":{"line":142,"column":8},"end":{"line":142,"column":8}}]},"2":{"line":145,"type":"if","locations":[{"start":{"line":145,"column":13},"end":{"line":145,"column":13}},{"start":{"line":145,"column":13},"end":{"line":145,"column":13}}]},"3":{"line":163,"type":"binary-expr","locations":[{"start":{"line":163,"column":16},"end":{"line":163,"column":51}},{"start":{"line":163,"column":55},"end":{"line":163,"column":116}},{"start":{"line":164,"column":13},"end":{"line":164,"column":50}},{"start":{"line":164,"column":54},"end":{"line":164,"column":115}}]},"4":{"line":177,"type":"if","locations":[{"start":{"line":177,"column":12},"end":{"line":177,"column":12}},{"start":{"line":177,"column":12},"end":{"line":177,"column":12}}]}},"code":["(function () { YUI.add('aui-image-viewer-multiple', function (A, NAME) {","","/**"," * The Image Viewer Multiple module."," *"," * @module aui-image-viewer-multiple"," */","","/**"," * Fired when one of the viewer's images was clicked."," *"," * @event imageClicked"," * @preventable _defImageClicked"," */","/**"," * Fired when the widget needs to make an image visible."," *"," * @event makeImageVisible"," * @preventable _defMakeImageVisible"," */","","/**"," * The base class for Image Viewer."," *"," * @class A.ImageViewerMultiple"," * @extends A.ImageViewerBase"," * @param {Object} config Object literal specifying widget configuration"," *     properties."," * @constructor"," */","A.ImageViewerMultiple = A.Base.create('image-viewer-multiple', A.ImageViewerBase, [], {","    VISIBLE_THRESHOLD: 5,","","    /**","     * Constructor for the `A.ImageViewerMultiple`. Lifecycle.","     *","     * @method initializer","     * @protected","     */","    initializer: function() {","        this._eventHandles.push(","            this.after({","                currentIndexChange: this._afterMultipleCurrentIndexChange,","                responsive: this._afterMultipleResponsive","            }),","            A.after(this._afterMultipleBindUI, this, 'bindUI'),","            A.after(this._afterMultipleRenderUI, this, 'renderUI')","        );","","        this.publish({","            imageClicked: {","                defaultFn: this._defImageClicked","            },","            makeImageVisible: {","                defaultFn: this._defMakeImageVisible","            }","        });","    },","","    /**","     * Fired after the `bindUI` method runs.","     *","     * @method _afterMultipleBindUI","     * @protected","     */","    _afterMultipleBindUI: function() {","        this._bindClickImages();","    },","","    /**","     * Fired after the `renderUI` method runs.","     *","     * @method _afterMultipleRenderUI","     * @protected","     */","    _afterMultipleRenderUI: function() {","        this._loadVisibleImages();","    },","","    /**","     * Fired after the `currentIndex` attribute is set.","     *","     * @method _afterMultipleCurrentIndexChange","     * @protected","     */","    _afterMultipleCurrentIndexChange: function() {","        this.fire('makeImageVisible', {","            index: this.get('currentIndex')","        });","    },","","    /**","     * Fired after the `responsive` event is triggered.","     *","     * @method _afterMultipleResponsive","     * @protected","     */","    _afterMultipleResponsive: function() {","        this._loadVisibleImages();","    },","","    /**","     * Binds the events for clicking images.","     *","     * @method _bindClickImages","     * @protected","     */","    _bindClickImages: function() {","        this._eventHandles.push(","            this.get('contentBox').delegate(","                'click',","                this._onClickImage,","                '.image-viewer-base-image-container',","                this","            )","        );","    },","","    /**","     * Default behavior for the `imageClicked` event. The current index is updated","     * to point to the image that was clicked.","     *","     * @method _defImageClicked","     * @protected","     */","    _defImageClicked: function(event) {","        this.set('currentIndex', event.index);","    },","","    /**","     * Default behavior for the `makeImageVisible` event. The scroll position is","     * updated to make the specified image visible.","     *","     * @method _defMakeImageVisible","     * @protected","     */","    _defMakeImageVisible: function(event) {","        var imageRegion = this._getImageContainerAtIndex(event.index).get('region'),","            list = this.get('contentBox').one('.image-viewer-base-image-list'),","            listRegion = list.get('region');","","        if (imageRegion.left < listRegion.left) {","            list.set('scrollLeft', list.get('scrollLeft') - (listRegion.left - imageRegion.left));","        }","        else if (imageRegion.right > listRegion.right) {","            list.set('scrollLeft', list.get('scrollLeft') + imageRegion.right - listRegion.right);","        }","","        this._loadVisibleImages();","    },","","    /**","     * Checks if the image at the given index is visible in the viewer.","     *","     * @method _isImageVisible","     * @param {Node} image","     * @protected","     */","    _isImageVisible: function(image) {","        var imageRegion = image.get('region'),","            listRegion = this.get('contentBox').one('.image-viewer-base-image-list').get('region');","","        return (imageRegion.left >= listRegion.left && imageRegion.left + this.VISIBLE_THRESHOLD <= listRegion.right) ||","            (imageRegion.right <= listRegion.right && imageRegion.right - this.VISIBLE_THRESHOLD >= listRegion.left);","    },","","    /**","     * Loads all images that are currently visible in the viewer.","     *","     * @method _loadVisibleImages","     * @protected","     */","    _loadVisibleImages: function() {","        var containers = this.get('contentBox').all('.image-viewer-base-image-container');","","        for (var i = 0; i < containers.size(); i++) {","            if (this._isImageVisible(containers.item(i))) {","                this._loadImage(i);","            }","        }","    },","","    /**","     * Fired when one of the viewer's images is clicked.","     *","     * @method _onClickImage","     * @param {EventFacade} event","     * @protected","     */","    _onClickImage: function(event) {","        var index = event.currentTarget.get('parentNode').get('children').indexOf(event.currentTarget);","        this.fire('imageClicked', {","            index: index","        });","    }","}, {","    ATTRS: {","        /**","         * The height of the image viewer.","         *","         * @attribute height","         * @default 100","         * @type Number | String","         */","        height: 100","    },","","    /**","     * Static property provides a string to identify the CSS prefix.","     *","     * @property CSS_PREFIX","     * @type String","     * @static","     */","    CSS_PREFIX: A.getClassName('image-viewer-multiple')","});","","","}, '3.1.0-deprecated.17', {","    \"requires\": [","        \"base-build\",","        \"node-base\",","        \"aui-classnamemanager\",","        \"aui-image-viewer-base\"","    ],","    \"skinnable\": true","});","","}());"]};
}
var __cov_xIFGnL1u4KQEjB45ZhD4wg = __coverage__['build/aui-image-viewer-multiple/aui-image-viewer-multiple.js'];
__cov_xIFGnL1u4KQEjB45ZhD4wg.s['1']++;YUI.add('aui-image-viewer-multiple',function(A,NAME){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['1']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['2']++;A.ImageViewerMultiple=A.Base.create('image-viewer-multiple',A.ImageViewerBase,[],{VISIBLE_THRESHOLD:5,initializer:function(){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['2']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['3']++;this._eventHandles.push(this.after({currentIndexChange:this._afterMultipleCurrentIndexChange,responsive:this._afterMultipleResponsive}),A.after(this._afterMultipleBindUI,this,'bindUI'),A.after(this._afterMultipleRenderUI,this,'renderUI'));__cov_xIFGnL1u4KQEjB45ZhD4wg.s['4']++;this.publish({imageClicked:{defaultFn:this._defImageClicked},makeImageVisible:{defaultFn:this._defMakeImageVisible}});},_afterMultipleBindUI:function(){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['3']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['5']++;this._bindClickImages();},_afterMultipleRenderUI:function(){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['4']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['6']++;this._loadVisibleImages();},_afterMultipleCurrentIndexChange:function(){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['5']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['7']++;this.fire('makeImageVisible',{index:this.get('currentIndex')});},_afterMultipleResponsive:function(){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['6']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['8']++;this._loadVisibleImages();},_bindClickImages:function(){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['7']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['9']++;this._eventHandles.push(this.get('contentBox').delegate('click',this._onClickImage,'.image-viewer-base-image-container',this));},_defImageClicked:function(event){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['8']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['10']++;this.set('currentIndex',event.index);},_defMakeImageVisible:function(event){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['9']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['11']++;var imageRegion=this._getImageContainerAtIndex(event.index).get('region'),list=this.get('contentBox').one('.image-viewer-base-image-list'),listRegion=list.get('region');__cov_xIFGnL1u4KQEjB45ZhD4wg.s['12']++;if(imageRegion.left<listRegion.left){__cov_xIFGnL1u4KQEjB45ZhD4wg.b['1'][0]++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['13']++;list.set('scrollLeft',list.get('scrollLeft')-(listRegion.left-imageRegion.left));}else{__cov_xIFGnL1u4KQEjB45ZhD4wg.b['1'][1]++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['14']++;if(imageRegion.right>listRegion.right){__cov_xIFGnL1u4KQEjB45ZhD4wg.b['2'][0]++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['15']++;list.set('scrollLeft',list.get('scrollLeft')+imageRegion.right-listRegion.right);}else{__cov_xIFGnL1u4KQEjB45ZhD4wg.b['2'][1]++;}}__cov_xIFGnL1u4KQEjB45ZhD4wg.s['16']++;this._loadVisibleImages();},_isImageVisible:function(image){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['10']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['17']++;var imageRegion=image.get('region'),listRegion=this.get('contentBox').one('.image-viewer-base-image-list').get('region');__cov_xIFGnL1u4KQEjB45ZhD4wg.s['18']++;return(__cov_xIFGnL1u4KQEjB45ZhD4wg.b['3'][0]++,imageRegion.left>=listRegion.left)&&(__cov_xIFGnL1u4KQEjB45ZhD4wg.b['3'][1]++,imageRegion.left+this.VISIBLE_THRESHOLD<=listRegion.right)||(__cov_xIFGnL1u4KQEjB45ZhD4wg.b['3'][2]++,imageRegion.right<=listRegion.right)&&(__cov_xIFGnL1u4KQEjB45ZhD4wg.b['3'][3]++,imageRegion.right-this.VISIBLE_THRESHOLD>=listRegion.left);},_loadVisibleImages:function(){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['11']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['19']++;var containers=this.get('contentBox').all('.image-viewer-base-image-container');__cov_xIFGnL1u4KQEjB45ZhD4wg.s['20']++;for(var i=0;i<containers.size();i++){__cov_xIFGnL1u4KQEjB45ZhD4wg.s['21']++;if(this._isImageVisible(containers.item(i))){__cov_xIFGnL1u4KQEjB45ZhD4wg.b['4'][0]++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['22']++;this._loadImage(i);}else{__cov_xIFGnL1u4KQEjB45ZhD4wg.b['4'][1]++;}}},_onClickImage:function(event){__cov_xIFGnL1u4KQEjB45ZhD4wg.f['12']++;__cov_xIFGnL1u4KQEjB45ZhD4wg.s['23']++;var index=event.currentTarget.get('parentNode').get('children').indexOf(event.currentTarget);__cov_xIFGnL1u4KQEjB45ZhD4wg.s['24']++;this.fire('imageClicked',{index:index});}},{ATTRS:{height:100},CSS_PREFIX:A.getClassName('image-viewer-multiple')});},'3.1.0-deprecated.17',{'requires':['base-build','node-base','aui-classnamemanager','aui-image-viewer-base'],'skinnable':true});