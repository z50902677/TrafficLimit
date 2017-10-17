App.Config.map.FeatureLayers = {
    AdAdmin: {
        name: '行政区划代表点',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'ADADMIN',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 15
        }
    },
    AdFace: {
        name: '行政区划面',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'ADFACE',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 15
        }
    },
    AdLink: {
        name: '行政区划组成线',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'ADLINK',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 15
        }
    },
    LcFace: {
        name: '土地覆盖面',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'LCFACE',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 15
        }
    },
    LcLink: {
        name: '土地覆盖线',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'LCLINK',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 15
        }
    },
    RdGate: {
        name: '大门',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'RDGATE',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 15
        }
    },
    RdGsc: {
        name: '立交',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'RDGSC',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 15
        }
    },
    RdLink: {
        name: '道路线',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'RDLINK',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 1
        }
    },
    RdNode: {
        name: '道路点',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'RDNODE',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 17
        }
    },
    RdTollgate: {
        name: '收费站',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'RDTOLLGATE',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 15
        }
    },
    RwLink: {
        name: '铁路线',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'RWLINK',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 15
        }
    },
    RwNode: {
        name: '铁路点',
        type: 'vector',
        options: {
            source: 'objSource',
            featureType: 'RWNODE',
            render: FM.mapApi.render.renderer.FeatureRender,
            minZoom: 17
        }
    }
};