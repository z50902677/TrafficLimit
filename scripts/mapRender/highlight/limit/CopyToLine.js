/**
 * Created by zhaohang on 2017/10/18.
 */
/**
 * 定义‘道路线’要素选中时的高亮规则
 * @file      RdLink.js
 * @author    LiuZhe
 * @date      2017-09-12
 *
 * @copyright @Navinfo, all rights reserved.
 */

FM.mapApi.render.highlight.COPYTOLINE = {
    topo: [{
        joinKey: 'geometry',
        highlight: {
            type: 'geometry',
            zIndex: 1,
            defaultSymbol: 'ls_link'
        }
    }]
};
