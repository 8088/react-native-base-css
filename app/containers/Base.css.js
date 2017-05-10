/**
 * React-Native Base Css
 * https://github.com/8088/react-native-base-css
 *
 */
'use strict';
import React, {
    StyleSheet,
    Dimensions,
    Platform,
} from 'react-native';
import Colors from '../assets/Colors';

var window = Dimensions.get('window');
var screen_w = window.width; //屏幕宽度
var screen_h = window.height; //屏幕高度
var spacing = 10; //两边间距
var internal_w = screen_w - spacing*2;//容器内部宽度
var equal2_w = parseInt(internal_w/2);//2等分宽度
var equal3_w = parseInt(internal_w/3);//3等分宽度

const styles = StyleSheet.create({
    //常用
    container:{
        flex:1,
        backgroundColor:'#f4f4f4'
    },
    hr:{height:StyleSheet.hairlineWidth,backgroundColor:'#eee'},//横线
    vr:{borderRightWidth:StyleSheet.hairlineWidth,borderRightColor:'#eee'},//竖线
    //>=rn0.43才支持
    //vr:{width:StyleSheet.hairlineWidth,height:'100%',backgroundColor:'#eee'},//竖线（早期版本不支持百分比）
    //none:{display:'none'},
    s_w:{width:screen_w},
    s_h:{width:screen_h},
    cl1:{width:internal_w},
    cl2:{width:equal2_w},
    cl3:{width:equal3_w},

    p:{color:Colors.dark,lineHeight:20,fontSize:14,padding:10},//段落
    img:{},
    bg_white:{backgroundColor:Colors.white},

    //文字
    f10:{fontSize:10},
    f12:{fontSize:12},
    f13:{fontSize:13},
    f14:{fontSize:14},
    f16:{fontSize:16},
    f18:{fontSize:18},
    f20:{fontSize:20},
    f22:{fontSize:22},
    f24:{fontSize:24},
    lh20:{lineHeight:20},
    fb:{fontWeight:'bold'},
    fn:{fontWeight:'normal'},
    tl:{textAlign:'left'},
    tc:{textAlign:'center'},
    tr:{textAlign:'right'},
    udl:{textDecorationLine:'underline'},
    no_udl:{textDecorationLine:'none'},
    no_bg:{backgroundColor:'transparent'},

    white:{color:Colors.white},
    black:{color:Colors.black},
    red:{color:Colors.red},
    orange:{color:Colors.orange},
    gold:{color:Colors.gold},
    green:{color:Colors.green},
    cyan:{color:Colors.cyan},
    blue:{color:Colors.blue},
    rose:{color:Colors.rose},
    purple:{color:Colors.purple},
    pink:{color:Colors.pink},
    gray:{color:Colors.gray},
    grey:{color:Colors.grey},
    deep:{color:Colors.deep},
    dark:{color:Colors.dark},


    //布局
    f_1:{flex:1},
    f_2:{flex:2},
    f_3:{flex:3},
    f_4:{flex:4},
    f_5:{flex:5},
    f_w:{flexWrap:'wrap'},
    f_r:{flexDirection:'row'},
    f_d:{flexDirection:'column'},
    f_s:{justifyContent:'flex-start'},
    f_e:{justifyContent:'flex-end'},
    f_c:{justifyContent:'center'},
    f_b:{justifyContent:'space-between'},
    a_s:{alignItems:'flex-start'},
    a_e:{alignItems:'flex-end'},
    a_c:{alignItems:'center'},
    m_c:{justifyContent:'center',alignItems:'center'},

    m5:{margin:5},
    m10:{margin:10},
    m15:{margin:15},
    m20:{margin:20},
    m30:{margin:30},
    mt5:{marginTop:5},
    mt10:{marginTop:10},
    mt15:{marginTop:15},
    mt20:{marginTop:20},
    mt30:{marginTop:30},
    mr5:{marginRight:5},
    mr10:{marginRight:10},
    mr15:{marginRight:15},
    mr20:{marginRight:20},
    mr30:{marginRight:30},
    mb5:{marginBottom:5},
    mb10:{marginBottom:10},
    mb15:{marginBottom:15},
    mb20:{marginBottom:20},
    mb30:{marginBottom:30},
    ml5:{marginLeft:5},
    ml10:{marginLeft:10},
    ml15:{marginLeft:15},
    ml20:{marginLeft:20},
    ml30:{marginLeft:30},

    p5:{padding:5},
    p10:{padding:10},
    p15:{padding:15},
    p20:{padding:20},
    p30:{padding:30},
    pt5:{paddingTop:5},
    pt10:{paddingTop:10},
    pt15:{paddingTop:15},
    pt20:{paddingTop:20},
    pt30:{paddingTop:30},
    pr5:{paddingRight:5},
    pr10:{paddingRight:10},
    pr15:{paddingRight:15},
    pr20:{paddingRight:20},
    pr30:{paddingRight:30},
    pb5:{paddingBottom:5},
    pb10:{paddingBottom:10},
    pb15:{paddingBottom:15},
    pb20:{paddingBottom:20},
    pb30:{paddingBottom:30},
    pl5:{paddingLeft:5},
    pl10:{paddingLeft:10},
    pl15:{paddingLeft:15},
    pl20:{paddingLeft:20},
    pl30:{paddingLeft:30},

});

export default styles;