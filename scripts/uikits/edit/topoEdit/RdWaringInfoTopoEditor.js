/**
 * Created by zhaohang on 2017/3/15.
 */
fastmap.uikit.topoEdit.RDWaringInfoTopoEditor = fastmap.uikit.topoEdit.TopoEditor.extend({
    initialize: function (map) {
        fastmap.uikit.topoEdit.TopoEditor.prototype.initialize.call(this, map);

        // 绑定函数作用域
        FM.Util.bind(this);
    },

    /**
     * 创建工具需要使用的EditResult
     * @param options
     * @returns {null}
     */
    getCreateEditResult: function (options) {
        var editResult = new fastmap.uikit.relationEdit.LinkNodeResult();
        editResult.geoLiveType = 'RDWARNINGINFO';
        return editResult;
    },

    /**
     * 创建接口
     * 子类需要重写此方法
     * @param editResult 编辑结果
     */
    create: function (editResult) {
        var data = {
            linkPid: parseInt(editResult.inLink.properties.id, 10),
            nodePid: parseInt(editResult.inNode.properties.id, 10)
        };
        return this.dataService.create('RDWARNINGINFO', data);
    }
});
