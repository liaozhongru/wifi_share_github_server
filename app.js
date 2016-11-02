
//JSPatch的项目实现9 --- 初始化所有信息
var express = require('express');
var app = express();
//app.use(express.limit('4M'));
app.listen(8080);
//必须要body-parser，不然无法解析request的body参数
var bodyParser = require('body-parser');
app.use(bodyParser.json());
//app.use(express.bodyp)
//现在暂时用x-www-form-urlencoded的表单形式，这个在postman里面对应的是post的body的x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));
var fs = require('fs');
var https = require('https');
var options = {
   // key:fs.readFileSync(__dirname + '/ssl/meadowlark.pem'),
   // cert:fs.readFileSync(__dirname + '/ssl/meadowlark.crt')
	key:fs.readFileSync(__dirname + '/ssl/key3/server_nopwd.key'),
	cert:fs.readFileSync(__dirname + '/ssl/key3/server.crt')
};

https.createServer(options,app).listen(8081);

var redis = require('redis');
var client = redis.createClient('6379','127.0.0.1');
//监听错误
client.on('error',function(err) {
    console.log(err);

});

var formidable = require('formidable');
var util = require('./Util/util');
//wifi_share ---- 检验8080，8081端口是否可用
//kStatusCode -1,表征你发的是http，kStatusCode 1表征发的是https

//状态码key
//var kStatusCode = 'statusCode';
//状态码value具体含义
var kHttpSuccess = '-1';
var kHttpsSuccess = '1';
var kFirstLogin = '0';
var kPostSuccess = '2';
var kPostFail = '3';
var kRedisError = '4';
var kRedisGetError = '8';
var kRedisSetError = '9';

var kGetSuccess = '5';
var kGetFail = '6';
var kInputError = '7';
var kPasswordError = '8';

//返回结果key
var kResult = 'result';
//返回结果里面的更多的key
var kNickName = 'nickName';
var kHeadImageUrl = 'headImageUrl';
var kGender = 'gender';
var kPhoneNumber = 'phoneNumber';
var kEmail = 'email';
var kwifiIDArray = 'wifiIDArray';
var kSharewifiIDArray = 'sharewifiIDArray';
var kwifiID = 'wifiID';
var kWifiOnlinePeopleArray = 'wifiOnlinePeopleArray';
var kWifiOnlinePeopleCount = 'wifiOnlinePeopleCount';
var kWifiPassword = 'wifiPassword';
var kLinkTime = 'linkTime';
var kTotalTime = 'totalTime';
var kWifiTotalMoney = 'totalMoney';
var kUserSpentMoney = 'userSpentMoney';
//var arrayBeginSymbol = '0x00';
//var arraySeperator = ',,,';


//api
var kShareWifi = '/shareWifi/';


//
//var strArray = arrayBeginSymbol;
//strArray = strArray + arraySeperator + 'hello,world';//数组字符串添加字符串成员
//var realArray = strArray.split(arraySeperator);//字符串转为字符串数组
//console.log(realArray);
//
//var str2Array = realArray.join(arraySeperator);//数组转为字符串
//console.log(str2Array);
//
////console.log();
//var obj = util.addObj(strArray,'wuliao');
//console.log(obj);
//console.log(util.removeObj(obj,'hello,world1'));
////console.log(util.convertArray(strArray));
//console.log(util.arrayConvertStr(['1','2','3']));
//
//
//var array = ['xxxx','1111','222'];
//array.splice(0,1);
//console.log(array);


//var temp = ['0x00','1','2'];
//var str = util.arrayConvertStr(temp);
//console.log(str);
//
//console.log(util.strArrayConvertTrueArray(str));
//var info = {};
//info.array = [{'key1' : 'value1'},{'key2' : 'value2'},{'key3' : 'value3'}];
//info.name ='lee';
//client.hmset('lee',info.array[0],function(err,res) {
//    if(err) {
//       console.log(err);
//        return;
//    }
//})
//client.hgetall('lee',function(error,result) {
//    if(error) {
//        console.log(error);
//        return;
//    }
//
//    //console.log(result);
//    //console.log(result.array.stringify());
//})
//var info2 = {'key1' : 'value1','key2' : 'value2'};
//var info3 = {'key1' : 'value3','key2' : 'value4'};
//var array2 = [info2.toString(),info3.toString()];
//console.log('array2 = ',array2);
//var str3Array = array2.join(arraySeperator);
//console.log('array3 = ',str3Array);
//
//var reayArray2 = str3Array.split(arraySeperator);
//console.log('reayArray2 == ',reayArray2[0].key1);

//client.hmset("key5", ["test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) {
//    if(err) {
//        console.log('err == ',err);
//    }
//
//});
//client.hmset(["key", "test keys 1", "test val 1", "test keys 2", "test val 2"], function (err, res) {
//        if(err) {
//        console.log('err == ',err);
//    }
//});
//client.hgetall('key',function(error,result) {
//    if(error) {
//        console.log('key5 = ',error);
//        return;
//    }
//    console.log(result);
//})
//var s2 = new Set([1, 2, 3]); // 含1, 2, 3
//console.log('set == ',s2);
//client.set('key5',s2,function(error) {
//    console.log('error5 == ',error);
//})
//
//client.get('key5',function(error,result) {
//    if(error) {
//        console.log('error6 == ',error);
//        return;
//    }
//    console.log('result6 == ',result);
//})
//var array3 = ['hello'];
//client.set('key',array3);
//var array4 = client.get('key');
//console.log('array4 = ',array4);

//client.hmset('key',['1','2','3']);
//var array5 = client.get('key');
//console.log(array5);
//var array = ['1','2','3'];
//console.log('array = ',array);
//var info = {};
//info.array = array;
//info.name = 'hello';
//client.hmset('key3',info,function(error) {
//    if(error) {
//        console.log('error === ',error);
//    }
//})
//
//client.hgetall('key3',function(error,result) {
//    if(error) {
//        console.log('error2 == ',error);
//        return;
//    }
//    console.log('result2 = ',result.array[1]);
//
//})

//var temp = '';
//console.log(temp.length);
// 0.-------
//var array = [{'key1' : 'value1'},{'key2' : 'value2'},{'key3' : 'value3'}];
app.get(kShareWifi,function(req,res) {

    console.log(kShareWifi);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    res.send({kStatusCode : kHttpsSuccess});

    //res.send({'lll' : array});
})





//wifi_share ---- 登陆接口
//kStatusCode=0表征是第一次登陆，kStatusCode=1表征是已经注册了，不是第一次登陆



//1.---------用户注册
var kLoginAPI = kShareWifi + 'login';
app.post(kLoginAPI,function(req,res) {
    console.log(kLoginAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    console.log(phoneNumber);

    if(!phoneNumber) {
        res.send({kStatusCode : kInputError});
        return;
    }
    client.hgetall(phoneNumber,function(error,result) {
        if(error) {
            console.log('1.----',error);
            res.send({kStatusCode : kRedisGetError});
            return;
        }
        if(!result) {
            var info = {};
            info.nickName = util.randomNickName();
            info.headImageUrl = 'http://baidu.com';
            info.gender = 'unknown';
            info.email = 'liao.zhongru@qq.com';
            info.linkTime = '-1';

            info.sharewifiIDArray = util.getEmptyArray();
            info.password = '123456';
            client.hmset(phoneNumber,info,function(error1) {
                if(error1) {
                    console.log('2.-----',error1);
                    res.send({kStatusCode : kRedisSetError});
                    return;
                }
                res.send( {
                    kStatusCode : kFirstLogin,
                    kResult : {
                        kNickName : info.nickName,
                        kHeadImageUrl : info.headImageUrl,
                        kGender : info.gender,
                        kEmail : info.email,
                        kSharewifiIDArray : util.strArrayConvertTrueArray(info.sharewifiIDArray)
                    }
                });
            }) ;
            return;
        }
        res.send({
            kStatusCode : kHttpsSuccess,
            kResult : {
                kNickName : result.nickName,
                kHeadImageUrl : result.headImageUrl,
                kGender : result.gender,
                kEmail : result.email,
                kSharewifiIDArray : util.strArrayConvertTrueArray(result.sharewifiIDArray)
            }
        });
    });
});

//kStatusCode -1 表征走的是http
//2.----------用户上传wifi信息

var kUploadWifiAPI = kShareWifi + 'uploadWifi';

app.post(kUploadWifiAPI,function(req,res) {
    console.log(kUploadWifiAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var wifiID = req.body.wifiID;

    var info = {};
    info.phoneNumber = req.body.phoneNumber;
    info.wifiName = req.body.wifiName;
    info.wifiPassword = req.body.wifiPassword;
    //info.longitude = req.body.longitude ? req.body.longitude : '30';
    //info.latitude = req.body.latitude ? req.body.latitude : '30';
    info.bandWidth = req.body.bandWidth ? req.body.bandWidth : '2';
    info.chargePerSecond = req.body.chargePerSecond ? req.body.chargePerSecond : '2';
    info.wifiOnlinePeopleArray = util.getEmptyArray();
    info.totalMoney = '0';
    if(!(info.phoneNumber && wifiID && info.wifiName && info.wifiPassword)) {
        res.send({kStatusCode : kInputError});
        return;
    }
    client.hmset(wifiID,info,function(error) {
        if(error) {
            console.log('3---------',error);
            res.send({kStatusCode : kRedisSetError});
            return;
        }

        client.hgetall(info.phoneNumber,function(error1,result1) {
            if(error1) {
                console.log('4-------',error1);
                res.send({kStatusCode : kRedisGetError});
                return;
            }
            if(!result1) {
                res.send({kStatusCode : kPostFail});
                return;
            }
            console.log(result1);
            //result1.sharewifiIDArray = result1.sharewifiIDArray + arraySeperator + wifiID;
            result1.sharewifiIDArray = util.addObj(result1.sharewifiIDArray,wifiID);
            client.hmset(info.phoneNumber,result1,function(error2) {
                if(error2) {
                    res.send({kStatusCode : kRedisSetError});
                    return;
                }
                res.send({kStatusCode : kPostSuccess});
                return;
            })
        })
    })
});

var kCompareWifiAPI = kShareWifi + 'compareWifi';

//3.----这个暂时还没法验证，因为无法post一个数组
app.post(kCompareWifiAPI,function(req,res) {
    console.log(kCompareWifiAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var wifiIDArray = req.body.wifiIDArray;
    //console.log(wifiIDArray[0]);

    wifiIDArray = ['liaozhongru2001','liaozhongru2002','liaozhongru2005'];
    //return;
    var wifiIDArrayCount = wifiIDArray.length;
    //console.log(wifiIDArrayCount);
    if(!(phoneNumber && wifiIDArrayCount > 0)) {
        res.send({kStatusCode : kInputError});
        return;
    }
    //var longtitude = req.body.longitude;
    //var latitude = req.body.latitude;
    //这里完全写错了
    var newwifiIDArray = [];
    getWifiArray(wifiIDArray,0,newwifiIDArray,res);
    //for(var i=0;i<wifiIDArrayCount;++i) {
    //    var index = i;
    //    client.hgetall(wifiIDArray[index],function(error,result) {
    //        if(error) {
    //            res.send({kStatusCode : kRedisGetError});
    //            return;
    //        }
    //
    //        if(result) {
    //            newwifiIDArray.push({
    //                kwifiID : wifiIDArray[index],
    //                kWifiOnlinePeopleCount : util.getArrayCount(result.wifiOnlinePeopleArray) - 1
    //            });
    //        }
    //        console.log('i === ',index);
    //        if(i == wifiIDArrayCount -1) {
    //            if(newwifiIDArray.length < 1) {
    //                res.send({kStatusCode : kGetFail});
    //                return;
    //            }
    //            res.send({
    //                kStatusCode : kGetSuccess,
    //                kResult : {
    //                    kwifiIDArray : newwifiIDArray
    //                }});
    //        }
    //    })
    //}

})
 function getWifiArray(wifiIDArray,index,newWifiIDArray,res) {
     if(index >= wifiIDArray.length) {
         res.send({
             kStatusCode : kGetSuccess,
             kResult : {
                 kwifiIDArray : newWifiIDArray
             }});
         return;
     }
     client.hgetall(wifiIDArray[index],function(error,result) {
         if(error) {
             //index = index + 1;
             //getWifiArray(wifiIDArray,index,newWifiIDArray,res);
             //return;
             console.log(error);
         }
         if(result) {
             newWifiIDArray.push(wifiIDArray[index]);
         }
         index = index + 1;
         getWifiArray(wifiIDArray,index,newWifiIDArray,res);
     })

 }
//function getWifiIDArray(wifiIDArray,index,newWifiIDArray) {
//    if(index < wifiIDArray.length) {
//        client.hgetall(wifiIDArray[i],function(error,result) {
//            if(error) {
//                return;
//            }
//            if(result) {
//                newWifiIDArray.push({kwifiID : wifiIDArray[i]});
//            }
//            getWifiIDArray(wifiIDArray,++index,newWifiIDArray);
//        })
//    } else {
//        return newWifiIDArray;
//    }
//}
//function getWifiIDArray(array,wifiID) {
//    client.hgetall(wifiID,function(error,result) {
//        if(error) {
//            return;
//        }
//        if(result) {
//            array.push({kwifiID : })
//        }
//    })

//
//}
var kWifiPasswordAPI = kShareWifi + 'wifiPassword';
//4.----获取wifi密码
app.post(kWifiPasswordAPI,function(req,res) {
    console.log(kWifiPasswordAPI);

    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var wifiID = req.body.wifiID;
    if(!(phoneNumber && wifiID)) {
        res.send({kStatusCode : kInputError});
        return;
    }


    client.hgetall(wifiID,function(error,result) {
        if(error) {
            res.send({kStatusCode : kRedisGetError});
            return;
        }
        if(!result) {
            res.send({kStatusCode : kGetFail});
            return;
        }
        var wifiPassword = result.wifiPassword;
        res.send({
            kStatusCode : kGetSuccess,
            kResult : {
                kWifiPassword : wifiPassword
            }
        });
    })
})
//5.---连接上wifi后，通知服务端连上的时间,只要返回的信息是失败信息，那么，就要停掉客户端的wifi。
//所有的send都要放到最底层去做，不然极有可能导致多次调用send方法，导致报错
var kSendLinkTime = kShareWifi + 'sendLinkTime';
app.post(kSendLinkTime,function(req,res) {
    console.log(kSendLinkTime);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var wifiID = req.body.wifiID;
    var linkTime = req.body.linkTime;
    if(!(phoneNumber && wifiID && linkTime)) {
        res.send({kStatusCode : kInputError});
        return;
    }
    client.hgetall(phoneNumber,function(error0,result0) {
        if(error0) {
            res.send({kStatusCode :kRedisGetError});
            return;
        }
        if(!result0) {
            res.send({kStatusCode : kPostFail});
            return;
        }
        result0.linkTime = linkTime;
        client.hmset(phoneNumber,result0,function(error) {
            if(error) {
                res.send({kStatusCode : kRedisSetError});
                return;
            }
            client.hgetall(wifiID,function(error1,result1) {
                if(error1) {
                    console.log(error1);
                    return;
                }
                if(!result1) {
                    res.send({kStatusCode : kPostFail});
                    return;
                }
                //result1.wifi
                result1.wifiOnlinePeopleArray = util.addObj(result1.wifiOnlinePeopleArray,phoneNumber);
                    //= result1.wifiOnlinePeopleArray + arraySeperator + phoneNumber;

                //result1.wifiOnlinePeopleArray.push({
                //    kPhoneNumber : phoneNumber,
                //    kNickName : result0.nickName,
                //    kLinkTime : linkTime
                //});
                client.hmset(wifiID,result1);
                res.send({kStatusCode : kPostSuccess});
            })

        })
    })
})


//如果断开连接失败了，那么，要多次试验。不然就一直扣费了。
var kSendUnlinkTimeAPI = kShareWifi + 'sendUnlinkTime';
app.post(kSendUnlinkTimeAPI,function(req,res) {
    console.log(kSendUnlinkTimeAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var wifiID =req.body.wifiID;
    var unLinkTime = req.body.unLinkTime;

    console.log(phoneNumber,wifiID,unLinkTime);
    if(!(phoneNumber && wifiID && unLinkTime)) {
        res.send({kStatusCode : kInputError});
        return;
    }
    client.hgetall(phoneNumber,function(error,result) {
        if(error) {
            res.send({kStatusCode : kRedisGetError});
            return;
        }
        if(!result) {
            res.send({kStatusCode : kPostFail});
            return;
        }
        console.log(unLinkTime,result.linkTime);
        if(result.linkTime === '-1') {
            res.send({kStatusCode : kPostFail});
            return;
        }
        var totalTime = unLinkTime - result.linkTime;
        result.linkTime = '-1';
        client.hmset(phoneNumber,result,function(error1) {
            if(error1) {
                res.send({kStatusCode : kRedisSetError});
                return;
            }


            client.hgetall(wifiID,function(error2,result2) {
                if(error2) {
                    console.log(error2);
                    return;
                }
                if(!result2) {
                    res.send({kStatusCode : kPostFail});
                    return;
                }
                console.log(totalTime,result2.chargePerSecond,userSpentMoney);
                var userSpentMoney = totalTime * result2.chargePerSecond;
                result2.totalMoney = result2.totalMoney + userSpentMoney;

                //var index = -1;
                //var count = util.getArrayCount();
                //var realArray = util.strConvertArray(result2.wifiOnlinePeopleArray);
                //for(var i=1;i<count;++i) {
                //
                //    //if(result2.wifiOnlinePeopleArray[i].phoneNumber === phoneNumber) {
                //    //    index = i;
                //    //    break;
                //    //}
                //    if(realArray[i] == phoneNumber) {
                //        index = i;
                //        break;
                //    }
                //}
                //if(index != -1) {
                //    //result2.wifiOnlinePeopleArray.splice(index,1);
                //    result2.wifiOnlinePeopleArray = util.removeObj(result2.wifiOnlinePeopleArray,realArray[i]);
                //
                //}
                result2.wifiOnlinePeopleArray = util.removeObj(result2.wifiOnlinePeopleArray,phoneNumber);

                client.hmset(wifiID,result2,function(error3) {
                    if(error3) {
                        res.send({kStatusCode : kPostFail});
                        return;
                    }
                    res.send({
                        kStatusCode : kPostSuccess,
                        kResult : {
                            kTotalTime : totalTime,
                            kUserSpentMoney : userSpentMoney
                        }
                    });
                });
            });

        });
    })
})

var kWifiOnlinePeopleCountAPI = kShareWifi + 'wifiOnlinePeopleCount';

app.post(kWifiOnlinePeopleCountAPI,function(req,res) {
    console.log(kWifiOnlinePeopleCountAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var wifiID = req.body.wifiID;
    var currentTime = req.body.currentTime;
    if(!(phoneNumber && wifiID && currentTime)) {
        res.send({kStatusCode : kInputError});
        return;
    }
    client.hgetall(wifiID,function(error,result) {
        if(error) {
            res.send({kStatusCode : kRedisGetError});
            return;
        }
        if(!result) {
            res.send({kStatusCode : kPostFail});
            return;
        }
        console.log(result.wifiOnlinePeopleArray);
        console.log(util.getArrayCount(result.wifiOnlinePeopleArray) - 1);
        res.send({
            kStatusCode : kGetSuccess,
            kResult : {
                kWifiOnlinePeopleCount : util.getArrayCount(result.wifiOnlinePeopleArray) - 1
            }
        });
    })
})


//var kTemp = kShareWifi + 'temp';
//app.get(kTemp,function(req,res) {
//    console.log('whare you');
//    res.send(kTemp);
//    console.log(kTemp);
//
//})

var kChangeWifiPasswordAPI = kShareWifi + 'changeWifiPassword';
app.post(kChangeWifiPasswordAPI,function(req,res) {
    console.log(kChangeWifiPasswordAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var wifiID = req.body.wifiID;
    var oldPassword = req.body.oldPassword;
    var newPassword = req.body.newPassword;
    if(!(phoneNumber && oldPassword && newPassword && wifiID)) {
        res.send({kStatusCode : kInputError});
        return;
    }
    //client.hgetall(phoneNumber,function(error,result) {
    //    if(error) {
    //        res.send({kStatusCode : kRedisGetError});
    //        return;
    //    }
    //    if(!result) {
    //        res.send({kStatusCode : kPostFail});
    //        return;
    //    }
        //var wifiID = result.sharewifiIDArray.split(arraySeperator)[1];

        //var wifiID = result.sharewifiIDArray[0];
        client.hgetall(wifiID,function(error1,result1) {
            if(error1) {
                res.send({kStatusCode : kRedisGetError});
                return;
            }
            if(!result1) {
                res.send({kStatusCode : kPostFail});
                return;
            }
            if(oldPassword !== result1.wifiPassword) {
                res.send({kStatusCode : kPostFail});
                return;
            }
            result1.wifiPassword = newPassword;
            client.hmset(wifiID,result1,function(error2) {
                if(error2) {
                    res.send({kStatusCode : kPostFail});
                    return;
                }
                res.send({kStatusCode : kPostSuccess});
            })
        })
    //})
})

var kChangeWifiNameAPI = kShareWifi + 'changeWifiName';
//var kChangeWifiPasswordAPI = kShareWifi + 'changeWifiPassword';
app.post(kChangeWifiNameAPI,function(req,res) {
    console.log(kChangeWifiNameAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var wifiID = req.body.wifiID;
    var oldWifiName = req.body.oldWifiName;
    var newWifiName = req.body.newWifiName;
    if(!(phoneNumber && oldWifiName && newWifiName && wifiID)) {
        res.send({kStatusCode : kInputError});
        return;
    }
    //client.hgetall(phoneNumber,function(error,result) {
    //    if(error) {
    //        res.send({kStatusCode : kRedisGetError});
    //        return;
    //    }
    //    if(!result) {
    //        res.send({kStatusCode : kPostFail});
    //        return;
    //    }
        //var wifiID = result.sharewifiIDArray[0];
        client.hgetall(wifiID,function(error1,result1) {
            if(error1) {
                res.send({kStatusCode : kRedisGetError});
                return;
            }
            if(!result1) {
                res.send({kStatusCode : kPostFail});
                return;
            }
            if(oldWifiName !== result1.wifiName) {
                res.send({kStatusCode : kPostFail});
                return;
            }
            result1.wifiName = newWifiName;
            client.hmset(wifiID,result1,function(error2) {
                if(error2) {
                    res.send({kStatusCode : kPostFail});
                    return;
                }
                res.send({kStatusCode : kPostSuccess});
            })
        })
    //})
})

var kChangeNickNameAPI = kShareWifi + 'changeNickName';

app.post(kChangeNickNameAPI,function(req,res) {
    console.log(kChangeNickNameAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var oldNickName = req.body.oldNickName;
    var newNickName = req.body.newNickName;
    if(!(phoneNumber && oldNickName && newNickName)) {
        res.send({kStatusCode : kPostFail});
        return;
    }
    client.hgetall(phoneNumber,function(error,result) {
        if(error) {
            res.send({kStatusCode : kRedisGetError});
            return;
        }
        if(!result) {
            res.send({kStatusCode : kPostFail});
            return;
        }
        if(oldNickName !== result.nickName) {
            res.send({kStatusCode : kPostFail});
            return;
        }
        result.nickName = newNickName;
        client.hmset(phoneNumber,result,function(error1) {
            if(error1) {
                res.send({kStatusCode : kRedisSetError});
                return;
            }
            res.send({kStatusCode : kPostSuccess});
        })
    })
})

var kChangeGenderAPI = kShareWifi + 'changeGender';

app.post(kChangeGenderAPI,function(req,res) {
    console.log(kChangeGenderAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var newGender = req.body.newGender;
    if(!(phoneNumber && newGender)) {
        res.send({kStatusCode : kInputError});
        return;
    }
    client.hgetall(phoneNumber,function(error,result) {
        if(error) {
            res.send({kStatusCode : kRedisGetError});
            return;
        }
        if(!result) {
            res.send({kStatusCode : kPostFail});
            return;
        }
        result.gender = newGender;
        client.hmset(phoneNumber,result,function(error1) {
            if(error1) {
                res.send({kStatusCode : kRedisSetError});
                return;
            }
            res.send({kStatusCode : kPostSuccess});
        })
    })
})

var kChangeEmailAPI = kShareWifi + 'changeEmail';

app.post(kChangeEmailAPI,function(req,res) {
    console.log(kChangeEmailAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var newEmail = req.body.newEmail;
    if(!(phoneNumber && newEmail)) {
        res.send({kStatusCode : kInputError});
        return;
    }
    client.hgetall(phoneNumber,function(error,result) {
        if(error) {
            res.send({kStatusCode : kRedisGetError});
            return;
        }
        if(!result) {
            res.send({kStatusCode : kPostFail});
            return;
        }
        result.email = newEmail;
        client.hmset(phoneNumber,result,function(error1) {
            if(error1) {
                res.send({kStatusCode : kRedisSetError});
                return;
            }
            res.send({kStatusCode : kPostSuccess});

        })
    })
})

//这个可以查指定的wifiID当前账号下的钱数。
var kProfitAPI = kShareWifi + 'profit';

app.post(kProfitAPI,function(req,res) {
    console.log(kProfitAPI);
    if(!req.secure) {
        res.send({kStatusCode : kHttpSuccess});
        return;
    }
    var phoneNumber = req.body.phoneNumber;
    var wifiID = req.body.wifiID;

    if(!(phoneNumber && wifiID)) {
        res.send({kStatusCode :kInputError});
        return;
    }

    client.hgetall(wifiID,function(error,result) {
        if(error) {
            res.send({kStatusCode : kRedisGetError});
            return;
        }
        if(!result) {
            res.send({kStatusCode : kGetFail});
            return;
        }
        res.send({
            kStatusCode : kGetSuccess,
            kResult : {
                kWifiTotalMoney : result.totalMoney
            }
        })
    })
})






//JSPatch的项目实现10 --- 创建用户目录
app.post('/patch/addUserDirName',function(request,response) {
    if(!request.secure) {
        response.send('请使用https');
        return;
    }

    var userDirName = request.body.user_dir_name;
    console.log('dirname = ',userDirName);
    if(userDirName) {
        var userDirPath = __dirname + '/source/' + userDirName;
        fs.mkdir(userDirPath,0777,function(error) {
            if(error) {
                response.send('创建用户目录失败,或者用户目录已经存在');
            } else {
                response.send('用户目录创建成功');
            }
        })
    } else {
        response.send('user_dir_name为空，不能创建用户目录');
    }
});



//JSPatch的项目实现11 --- 添加App名字
app.post('/patch/addAppDirName',function(request,response) {
    if(!request.secure) {
        response.send('请使用https');
        return;
    }

    var userDirName = request.body.user_dir_name;
    var appDirName = request.body.bundle_id;
    console.log(userDirName,appDirName);
    if(userDirName && appDirName) {
        var appDirPath = __dirname + '/source/' + userDirName + '/' + appDirName;
        fs.mkdir(appDirPath,0777,function(error) {
            if(error) {
                response.send('创建用户目录失败，或者用户目录已经存在');
            } else {
                response.send('创建用户目录成功');
            }
        })
    } else {
        response.send('缺少user_dir_name，或者缺少bundle_id');
    }

});
//JSPatch的项目实现12 --- 添加App版本号
app.post('/patch/addVerDirName',function(request,response) {
    if(!request.secure) {
        response.send('请使用https');
        return;
    }
    var userDirName = request.body.user_dir_name;
    var appDirName = request.body.bundle_id;
    var verDirName = request.body.app_ver;
    console.log(userDirName,appDirName,verDirName);
    if(userDirName && appDirName && verDirName) {
        var verDirPath = __dirname + '/source/' + userDirName + '/' + appDirName + '/' + verDirName;
        fs.mkdir(verDirPath,0777,function(error) {
            if(error) {
                console.log(error);
                response.send('创建用户目录失败，或者用户目录已经存在');
            } else {

                var verTempDirName = verDirPath + '_tmp';
                fs.mkdir(verTempDirName,0777,function(error) {
                    if(error) {
                        console.log(error);
                        response.send('创建用户目录失败，或者用户目录已经存在1');
                    } else {
                        response.send('创建用户目录成功');
                    }
                });
            }
        })
    } else {
        response.send('缺少user_dir_name或者bundle_id或者app_ver');
    }
})

//JSPatch的项目实现13 -- 文件上传
app.set('views',__dirname+'/views');
app.set('view engine','html');
app.engine('.html',require('ejs').__express);
//先通过get请求，我们把html发到浏览器
//http://localhost:8080/patch/upload
//然后让浏览器发起post的https请求
app.get('/installCA',function(request,response) {
    if(!request.secure) {
        console.log('请使用https');
        response.send('请使用https');
        return;
    }

    response.send({'key' : 'value'});
})
app.get('/patch/upload',function(request,response) {
    console.log('hello,world');
    response.render('iOSHotPatch1');
});


app.post('/patch/upload',function(request,response) {
    if(!request.secure) {
        response.send('请使用https');
        return;
    }



    console.log('hello,wrold');
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = 'source';
    form.maxFieldsSize = 1 * 1024 * 1024;
    //form.size
    //form.file.size = 1024 *1024;


    form.parse(request,function(error,fields,files) {
        if(error || !files.files) {

            //response.writeHead(200,{'content-type' : 'text/plain'});
            //response.end();
            response.send('数据太大了，不要了');
            response.end();
            form.error = true;
            return;

            //response.end(util2.inspect{msg:error});

            //response.send('上传数据失败');
        } else {
            var userDirName = fields.user_dir_name;
            var appDirName = fields.bundle_id;
            var verDirName = fields.app_ver;
            console.log('message == ',userDirName,appDirName,verDirName,files.files.name);

            //var isRelease = fields.isRelease;
            if(userDirName && appDirName && verDirName) {
                var verDirPath = __dirname + '/source/' + userDirName + '/' + appDirName + '/' + verDirName;
                var verTempDirPath = verDirPath + '_tmp';
                var fileName = Date.now() + '_' + userDirName + '_' + appDirName + '_' + verDirName + '_' + files.files.name;
                var newFilePath = verTempDirPath + '/' + fileName;


                    //files.files.name;
                fs.rename(files.files.path,newFilePath,function(error) {
                    if(error) {
                        fs.unlink(files.files.path);
                        response.send('找不到上传目录');
                    } else {
                        var fileMD5 = util.md5Digest(newFilePath);
                        var key = userDirName + '/' + appDirName + '/' + verDirName;
                        client.hgetall(key,function(error,result) {
                            console.log('error and result',error,result);
                            var keyFilePath = verDirPath + '/key';
                            if(error || !result) {

                                util.cryptStr(fileMD5,keyFilePath);
                                //util.archiveData(verDirPath,'key',files.files.name);
                                util.archiveData(verDirPath+'/patch.zip',newFilePath,keyFilePath,files.files.name,'key');

                                var info = {};
                                info.md5 = fileMD5;
                                info.errorCount = '0';
                                info.updateCount = '0';
                                info.updateTime = Date.now();
                                info.patchRelease = 'no';//先默认是yes
                                info.scriptName = 'patch.zip';
                                client.hmset(key,info,function(error,result) {
                                    if(error) {
                                        console.log('文件信息保存在redis失败');
                                    } else {
                                        console.log('文件信息成功保存在redis上');
                                    }
                                })
                                response.send('首次上传到指定的目录');
                            } else {
                                if(result.md5 !== fileMD5) {
                                    util.cryptStr(fileMD5,keyFilePath);
                                    //util.archiveData(verDirPath,'key',files.files.name);
                                    util.archiveData(verDirPath+'/patch.zip',newFilePath,keyFilePath,files.files.name,'key');
                                    result.md5 = fileMD5;
                                    result.errorCount = '0';
                                    ++result.updateCount;
                                    result.updateTime = Date.now();
                                    result.patchRelease = 'no';//先默认是yes
                                    result.scriptName = 'patch.zip';
                                    console.log('result ==',result);

                                    console.log('2目录下有',util.file(verTempDirPath));

                                    var fileArray = util.file(verTempDirPath);
                                    if(fileArray.length > 30) {

                                        var earlierFile = util.earlierFile(fileArray);
                                        console.log('earlierFile = ',earlierFile);
                                        var earlierFilePath = verTempDirPath + '/' + earlierFile;
                                        console.log('准备删除文件2');
                                        fs.unlink(earlierFilePath,function(error) {
                                            if(error) {
                                                console.log('删除早期文件错误');
                                            }
                                        })
                                    }

                                    client.hmset(key,result,function(error,result) {
                                        if(error) {
                                            console.log('文件保存在redis失败');
                                        } else {
                                            console.log('文件信息成功保存在redis上');
                                        }
                                    })
                                    response.send('再次上传文件到指定的目录');
                                } else {
                                    fs.unlink(newFilePath,function(error) {
                                        if(error) {
                                            console.log('error ==',error);
                                        }
                                    });
                                    response.send('redis错误了，或者不要上传一样的数据');
                                }
                            }
                        });

                    }
                })
            } else {
                response.send('user_dir_name，bundle_id，app_ver给的参数不全');
            }
        }
    })




    //var i = 0;
    form.on('progress',function(received,expected) {
        console.log(received,expected);
        if(received>1024 * 1024) {
            //response.end();
            console.log('数据超出一兆了，不要这些数据了');
            form.emit('error','file is too large');
            //return;
        }
    })

    form.on('error',function(error) {
        console.log('出错了，错误是 ',error);
    })

    form.on('aborted',function() {
        console.log('aborted ====== ');
    })
    form.on('end',function() {
        console.log('end =======');
    })


})

//JSPatch的项目实现14 -- 发布补丁
app.post('/patch/release',function(request,response) {
    console.log('html的信息发过来了');
    if(!request.secure) {
        response.send('请使用https');
        return;
    }
    //console.log('hello,world');

    var userDirName = request.body.user_dir_name;
    var appDirName = request.body.bundle_id;
    var verDirName = request.body.app_ver;
    var patchRelease = request.body.patch_release;
    console.log(userDirName,appDirName,verDirName,patchRelease);
    if(userDirName && appDirName && verDirName && patchRelease) {
        var key = userDirName + '/' + appDirName + '/' + verDirName;
        client.hgetall(key,function(error,result) {
            if(error || !result) {
                response.send('给的路径不对，或者redis中没有这个信息');
            } else {
                console.log(result);
                result.patchRelease = patchRelease;
                console.log(result);
                client.hmset(key,result,function(error,result) {
                    if(error) {
                        response.send('发布补丁失败');
                    } else {
                        response.send('发布补丁成功');
                    }
                })
            }
        })
    } else {
        response.send('user_dir_name&& bundle_id && app_ver && patch_release 有没给全的');
    }
})

//JSPatch的项目实现15 -- 删除补丁

app.post('/patch/delete',function(request,response) {
    console.log('delete');
    if(!request.secure) {
        response.send('请使用https');
        return;
    }
    var userDirName = request.body.user_dir_name;
    var appDirName = request.body.bundle_id;
    var verDirName = request.body.app_ver;
    var scriptName = request.body.script_url;
    console.log(userDirName,appDirName,verDirName,scriptName);
    if(userDirName && appDirName && verDirName) {
        //var verDirPath = __dirname
        var verDirPath = __dirname + '/source/' + userDirName + '/' + appDirName + '/' + verDirName;
        fs.unlink(verDirPath+'/'+'patch.zip',function(error) {
            if(error) {
                console.log('删除失败');
                response.send('路径不对，删除失败');
            } else {
                console.log('删除成功');
                var key = userDirName + '/' + appDirName + '/' + verDirName ;
                client.hgetall(key,function(error,result) {
                    if(error) {
                        console.log('redis错误 ：',error);
                    } else {
                        if(result) {
                            console.log('已经删除这些数据：',result);
                            client.del(key);
                        } else {
                            console.log('没有数据');
                        }
                    }
                });
                response.send('删除成功');
            }
        })


    } else {
        response.send('user_dir_name,bundle_id,app_ver信息没给全');
    }
})

//JSPatch的项目实现16 -- 和客户端同步
app.post('/patch/updinfo',function(request,response) {

    console.log('updinfo');
    if(!request.secure) {
        response.send('请使用https');
        return;
    }

    var userDirName = request.body.user_dir_name;
    var appDirName = request.body.bundle_id;
    var verDirName = request.body.app_ver;
    var scriptName = request.body.script_url;
    var scriptMD5 = request.body.script_md5;
    var is_js_ok = request.body.is_js_ok;


    console.log(userDirName,appDirName,verDirName,scriptName,scriptMD5,is_js_ok);
    if(userDirName && appDirName && verDirName) {
        var key = userDirName + '/' + appDirName + '/' + verDirName;
        client.hgetall(key,function(error,result) {
            if(error) {
                response.send('redis数据库出错了');
            } else {
                if(result) {
                    console.log('result = ',result);
                    if (result.patchRelease === 'no') {
                        console.log(('has_update = false,need_clean = false'));
                        response.send({'has_update' : false,'need_clean' : true,'script_md5' : scriptMD5,'script_url' : scriptName});
                        return;
                    } else if(result.patchRelease === 'yes') {
                        if(scriptName && scriptMD5) {
                            if(result.md5 === scriptMD5) {
                                if(is_js_ok === 'no') { //这里要看一下
                                    ++result.errorCount;
                                    console.log(result.errorCount);
                                    client.hmset(key,result,function(error,result) {
                                        if(error) {
                                            console.log('统计错误次数失败');
                                        } else {
                                            console.log('统计错误次数成功');
                                        }
                                    });
                                }
                                response.send({'has_update' : false,'need_clean' : false,'script_md5' : scriptMD5,'script_url' : scriptName});
                            } else {
                                response.send({'has_update' : true,'need_clean' : true,'script_md5' :result.md5,'script_url' : result.scriptName});
                            }
                        } else {
                            response.send({'has_update' : true,'need_clean' : true,'script_md5' : result.md5,'script_url' : result.scriptName});
                        }
                    }

                } else {
                    response.send({'has_update' : false,'need_clean' : true,'script_md5' : '','script_url' : ''});
                }
            }
        })
    } else {
        response.send('user_dir_name && bundle_id && app_ver && script_url && script_md5信息没给全');
    }
})

app.get('/patch/download_app_js',function(request,response) {
    console.log('download_app_js');
    if(!request.secure) {
	response.send('请使用https');
	return;
    }
    var options = {
    	root:__dirname,
	dotfiles:'deny',
	headers:{
	   'x-timestamp' : Date.now(),
  	   'x-sent' : true
	}
    };
    response.sendFile('app.js',options,function(error) {
	if(error) {
	   console.log(error);	
	}
    });
});

app.get('/patch/download_server_file',function(request,response) {
    console.log('download_server_file');
    if(!request.secure) {
        response.send('请使用https');
        return;
    }
    var options = {
        root : '/etc/nginx',
        dotfiles:'deny',
        headers:{
            'x-timestamp' : Date.now(),
            'x-sent' : true
        }
    };
    response.sendFile('server.crt',options,function(error) {
        if(error) {
            console.log(error);
        }
    })
})

app.get('/patch/download_server_file1',function(request,response) {
    console.log('download_server_file');
    if(!request.secure) {
        response.send('请使用https');
        return;
    }
    var options = {
        root : '/etc/nginx',
        dotfiles:'deny',
        headers:{
            'x-timestamp' : Date.now(),
            'x-sent' : true
        }
    };
    response.sendFile('server_nopwd.key',options,function(error) {
        if(error) {
            console.log(error);
        }
    })
})

//JSPatch的项目实现17 -- 下载补丁
app.post('/patch/download',function(request,response) {
    console.log('download');

    if(!request.secure) {
        response.send('请使用https');
        return;
    }

    var userDirName = request.body.user_dir_name;
    var appDirName = request.body.bundle_id;
    var verDirName = request.body.app_ver;
    var scriptName = request.body.script_url;
    console.log(userDirName,appDirName,verDirName,scriptName);
    //var userDirName = 'liaozhongru';
    //var appDirName = 'xuexibao';
    //var verDirName = 'v3.4';
    //var scriptName = 'patch.zip';
    var key = userDirName + '/' + appDirName + '/' + verDirName;
    client.hgetall(key,function(error,result) {
        if(error || !result) {
            response.send('找不到指定的文件');
        } else {
            //console.log(result.scriptName);
            console.log(result);
            if(result.scriptName === scriptName) {
                var options = {
                    root : __dirname + '/source/' + userDirName + '/' + appDirName + '/' + verDirName,
                    dotfiles:'deny',
                    headers:{
                        'x-timestamp' : Date.now(),
                        'x-sent' : true
                    }
                };
                response.sendFile(scriptName,options,function(error) {
                    if(error) {
                        console.log(error);
                    }
                    console.log('发送文件成功');
                })
            } else {
                response.send('没有找到指定的文件');
            }
        }
    })
})
