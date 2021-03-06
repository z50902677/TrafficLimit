/**
 * Created by zhongxiaoming on 2017/4/12.
 */
FM.mapApi.render.renderer.PointInfo = FM.mapApi.render.Renderer.extend({
    initialize: function (feature, zoom) {
        FM.mapApi.render.Renderer.prototype.initialize.call(this, feature, zoom);

        // 绑定函数作用域
        FM.Util.bind(this);

        this._symbol = null;
    },
    getSymbol: function () {
        var symbolFactory = fastmap.mapApi.symbol.GetSymbolFactory();
        var compositeSymbol = this._symbolFactory.createSymbol({ type: 'CompositeMarkerSymbol' });
        compositeSymbol.geometry = this._geometryFactory.fromGeojson(this._feature.geometry);
        this._symbol = compositeSymbol;
        this._addCircleSymbol();
        this._addIconSymbol();

        return this._symbol;
    },

    getHighlightSymbol: function () {
        var symbolData = {
            type: 'CircleMarkerSymbol',
            radius: 5,
            color: '#00ffff'
        };
        var symbol = this._symbolFactory.createSymbol(symbolData);
        symbol.geometry = this._geometryFactory.fromGeojson(this._feature.geometry);
        return symbol;
    },

    _addCircleSymbol: function () {
        var level = this._feature.properties.level;
        // if (status != 1 && status != 2 && status != 3) {
        //     return;
        // }

        var color = '';
        if (level === 1) {
            color = '#FF0000';
        } else if (level === 2) {
            color = '#0000FF';
        } else if (level === 3) {
            color = '#999999';
        }

        var symbolData = {
            type: 'CircleMarkerSymbol',
            radius: 8,
            color: 'transparent',
            outLine: {
                width: 1,
                color: color
            }
        };
        var symbol = this._symbolFactory.createSymbol(symbolData);
        this._symbol.symbols.push(symbol);
    },

    _addIconSymbol: function () {
        var symbolData = {
            type: 'ImageMarkerSymbol',
            url: '../../images/poi/map/marker_circle.png',
            width: 12,
            height: 9
        };
        var symbol = this._symbolFactory.createSymbol(symbolData);
        this._symbol.symbols.push(symbol);
    }
});
