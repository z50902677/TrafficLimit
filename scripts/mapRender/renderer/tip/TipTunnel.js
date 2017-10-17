FM.mapApi.render.renderer.TipTunnel = FM.mapApi.render.Renderer.extend({
    initialize: function (feature, zoom) {
        FM.mapApi.render.Renderer.prototype.initialize.call(this, feature, zoom);
        // 绑定函数作用域
        FM.Util.bind(this);
    },
    getSymbol: function () {
        var symbols = [];
        // var deleteLinkData = {
        //     type: 'CartoLineSymbol',
        //     color: 'red',
        //     width: 1,
        //     pattern: [4, 4]
        // };
        // var updateLinkData = {
        //     type: 'CartoLineSymbol',
        //     color: 'blue',
        //     width: 1,
        //     pattern: [4, 4]
        // };
        // var addLinkData = {
        //     type: 'CartoLineSymbol',
        //     color: 'green',
        //     width: 1,
        //     pattern: [4, 4]
        // };
        // for (var j = 0; j < this._feature.properties.diffLink.length; j++) {
        //     if (this._feature.properties.diffLink[j].opt === 1) {
        //         var deleteSymbol = this._symbolFactory.createSymbol(deleteLinkData);
        //         deleteSymbol.geometry = this._geometryFactory.createLineString(this._feature.properties.diffLink[j].geometry.coordinates);
        //         // symbols.push(deleteSymbol);
        //     }
        //     if (this._feature.properties.diffLink[j].opt === 2) {
        //         var updateSymbol = this._symbolFactory.createSymbol(updateLinkData);
        //         updateSymbol.geometry = this._geometryFactory.createLineString(this._feature.properties.diffLink[j].geometry.coordinates);
        //         // symbols.push(updateSymbol);
        //     }
        //     if (this._feature.properties.diffLink[j].opt === 3) {
        //         var addSymbol = this._symbolFactory.createSymbol(addLinkData);
        //         addSymbol.geometry = this._geometryFactory.createLineString(this._feature.properties.diffLink[j].geometry.coordinates);
        //         // symbols.push(addSymbol);
        //     }
        // }
        var testSymbol = {
            type: 'ImageMarkerSymbol',
            url: '../../images/road/tips/1511/1511_0_0.svg',
            width: 18,
            height: 18
        };
        var borderSymbol = {
            type: 'ImageMarkerSymbol',
            url: '../../images/road/tips/icon/icon_' + this._feature.properties.path + '.svg',
            width: 22,
            height: 22
        };
        var timeSymbol = {
            type: 'ImageMarkerSymbol',
            url: '../../images/road/tips/icon/icon_time.svg',
            width: 6,
            height: 6,

            offsetX: -11
        };
        var outLineSymbol = {
            type: 'ImageMarkerSymbol',
            url: '../../images/road/tips/icon/icon_outline.svg',
            width: 6,
            height: 6,

            offsetX: 11
        };
        var accessorySymbol = {
            type: 'ImageMarkerSymbol',
            url: '../../images/road/tips/icon/icon_attachment.svg',
            width: 6,
            height: 6,
            offsetY: 11
        };

        var blurSymbol = null;
        if (this._feature.properties.status === 0) {
            blurSymbol = {
                type: 'CircleMarkerSymbol',
                radius: 9,
                color: 'transparent',
                opacity: 0.5
            };
        } else {
            blurSymbol = {
                type: 'ImageMarkerSymbol',
                url: '../../images/road/tips/icon/status_' + this._feature.properties.status + '.svg',
                width: 11,
                height: 11,
                offsetX: 11,
                offsetY: -11
            };
        }

        var compositeSymbols = [borderSymbol, testSymbol, blurSymbol];
        if (this._feature.properties.accessorySymbol === 1) {
            compositeSymbols.push(accessorySymbol);
        }
        if (this._feature.properties.timeSymbol === 1) {
            compositeSymbols.push(timeSymbol);
        }
        if (this._feature.properties.outLineSymbol === 1) {
            compositeSymbols.push(outLineSymbol);
        }
        var symbolData = {
            type: 'CompositeMarkerSymbol',
            symbols: compositeSymbols
        };
        for (var i = 0; i < 2; i++) {
            var symbol = this._symbolFactory.createSymbol(symbolData);
            symbol.geometry = this._geometryFactory.createPoint(i === 0 ? this._feature.geometry.geometries[0].coordinates : this._feature.geometry.geometries[1].coordinates);
            symbols.push(symbol);
        }
        return symbols;
    },
    getHighlightSymbol: function () {
        var symbols = [];
        var symbolData = {
            type: 'CircleMarkerSymbol',
            radius: 9,
            color: 'transparent',
            outLine: {
                width: 3,
                color: '#00ffff'
            }
        };
        for (var i = 0; i < 2; i++) {
            var symbol = this._symbolFactory.createSymbol(symbolData);
            symbol.geometry = this._geometryFactory.createPoint(i === 0 ? this._feature.geometry.geometries[0].coordinates : this._feature.geometry.geometries[1].coordinates);
            symbols.push(symbol);
        }
        var lineData = {
            type: 'SimpleLineSymbol',
            color: '#00ffff',
            width: 2
        };
        for (var j = 0; j < this._feature.geometry.geometries[2].coordinates.length; ++j) {
            var linesSymbol = this._symbolFactory.createSymbol(lineData);
            linesSymbol.geometry = this._geometryFactory.createLineString(this._feature.geometry.geometries[2].coordinates[j]);
            symbols.push(linesSymbol);
        }
        return symbols;
    }
});