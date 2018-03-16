import addressPinyin from './addressPinyin';
import addressHanzi from './addressHanzi';
const getChina = (str) => {
    str = str.toLocaleLowerCase();
    for (var i = 0; i < addressPinyin.length; i++){
        if (str == addressPinyin[i].name) {
            return addressHanzi[i].name;
        }
        for (var u=0; u < addressPinyin[i].cities.length; u++){
            if (str == addressPinyin[i].cities[u]){
                    return addressHanzi[i].cities[u];
            }
        }
    }
    return "银河系";
};
function formatterDateTime() {
    var date=new Date()
    var month=date.getMonth() + 1
    var datetime = date.getFullYear()
            + ""// "年"
            + (month >= 10 ? month : "0"+ month)
            + ""// "月"
            + (date.getDate() < 10 ? "0" + date.getDate() : date
                    .getDate())
            + ""
            + (date.getHours() < 10 ? "0" + date.getHours() : date
                    .getHours())
            + ""
            + (date.getMinutes() < 10 ? "0" + date.getMinutes() : date
                    .getMinutes())
            + ""
            + (date.getSeconds() < 10 ? "0" + date.getSeconds() : date
                    .getSeconds());
    return datetime;
}
module.exports = {
    getChina,
    formatterDateTime
};