/**
 * Created by zhaohang on 2016/4/12.
 */
var modifyAdApp = angular.module('app');
modifyAdApp.controller('modifyAdToolController', function ($scope) {
    var selectCtrl = fastmap.uikit.SelectController();
    var shapeCtrl = fastmap.uikit.ShapeEditorController();
    var layerCtrl = fastmap.uikit.LayerController();
    var adLink = layerCtrl.getLayerById('adLink');
    var adNode = layerCtrl.getLayerById('adNode');
    var adAdmin = layerCtrl.getLayerById('adAdmin');
    var tooltipsCtrl = fastmap.uikit.ToolTipsController();
    var editLayer = layerCtrl.getLayerById('edit');
    $scope.type = '';
    $scope.modifyShape = function (type, num, event) {
        event.stopPropagation();
        $scope.$emit('SWITCHCONTAINERSTATE',
            {
                attrContainerTpl: false,
                subAttrContainerTpl: false
            });
        $('#popoverTips').hide();
        if (shapeCtrl.getCurrentTool().options) {
            shapeCtrl.stopEditing();
        }
        var feature = null;
        // $scope.changeBtnClass(num);
        if (!$scope.classArr[num]) {
            if (map.currentTool) {
                map.currentTool.disable();
            }
            map._container.style.cursor = '';
            return;
        }
        if (map.currentTool) {
            map.currentTool.disable();
        }
        if (shapeCtrl.shapeEditorResult) {
            if (tooltipsCtrl.getCurrentTooltip()) {
                tooltipsCtrl.onRemoveTooltip();
            }
            if (type === 'ADADMINMOVE') {
                if (selectCtrl.selectedFeatures) {
                    tooltipsCtrl.setEditEventType('moveDot');
                    tooltipsCtrl.setCurrentTooltip('开始移动行政区划代表点！');
                } else {
                    tooltipsCtrl.setCurrentTooltip('先选择行政区划代表点！');
                    return;
                }
            } else if (type === 'PATHVERTEXREMOVE') {
                if (selectCtrl.selectedFeatures) {
                    tooltipsCtrl.setEditEventType('deleteDot');
                    tooltipsCtrl.setCurrentTooltip('删除此形状点！');
                } else {
                    tooltipsCtrl.setCurrentTooltip('正要删除形状点,先选择线！');
                    return;
                }
            } else if (type === 'PATHVERTEXMOVE') {
                if (selectCtrl.selectedFeatures) {
                    tooltipsCtrl.setEditEventType('moveDot');
                    tooltipsCtrl.setCurrentTooltip('拖拽修改形状点位置！');
                } else {
                    tooltipsCtrl.setCurrentTooltip('正要移动形状点先选择线！');
                    return;
                }
            } else if (type === 'PATHBREAK') {
                if (selectCtrl.selectedFeatures) {
                    tooltipsCtrl.setEditEventType('pathBreak');
                    tooltipsCtrl.setCurrentTooltip('开始打断link！');
                } else {
                    tooltipsCtrl.setCurrentTooltip('正要开始打断link,先选择线！');
                    return;
                }
            } else if (type === 'PATHNODEMOVE') {
                if (selectCtrl.selectedFeatures) {
                    tooltipsCtrl.setEditEventType('pathNodeMove');
                    tooltipsCtrl.setCurrentTooltip('开始移动node！');
                } else {
                    tooltipsCtrl.setCurrentTooltip('正要开始移动node,先选择node！');
                    return;
                }
            } else if (type === 'naviTool') {
                map._container.style.cursor = '';

                editLayer.drawGeometry = null;
                shapeCtrl.stopEditing();
                editLayer.bringToBack();
                map.currentTool.disable();
                editLayer.clear();
                shapeCtrl.shapeEditorResult.setFinalGeometry(null);
                shapeCtrl.shapeEditorResult.setOriginalGeometry(null);
                return;
            }
            if (!selectCtrl.selectedFeatures) {
                return;
            }
            feature = selectCtrl.selectedFeatures.geometry;
            layerCtrl.pushLayerFront('edit');
            var sObj = shapeCtrl.shapeEditorResult;
            editLayer.drawGeometry = feature;
            editLayer.draw(feature, editLayer);
            sObj.setOriginalGeometry(feature);
            sObj.setFinalGeometry(feature);

            shapeCtrl.setEditingType(fastmap.mapApi.ShapeOptionType[type]);
            if (type === 'ADADMINMOVE') {
                shapeCtrl.editFeatType = 'adAdmin';
                map.currentTool.snapHandler.addGuideLayer(adAdmin);
            } else {
                shapeCtrl.editFeatType = 'adLink';
                map.currentTool.snapHandler.addGuideLayer(adLink);
                map.currentTool.snapHandler.addGuideLayer(adNode);
            }
            shapeCtrl.startEditing();
            map.currentTool = shapeCtrl.getCurrentTool();
            var saveOrEsc = function () {
                if (event.changeTooltips) {
                    tooltipsCtrl.setChangeInnerHtml('点击空格键保存操作或者按ESC键取消!');
                }
            };
            shapeCtrl.on('startshapeeditresultfeedback', saveOrEsc);
            shapeCtrl.on('stopshapeeditresultfeedback', function () {
                shapeCtrl.off('startshapeeditresultfeedback', saveOrEsc);
            });
        }
    };
});
