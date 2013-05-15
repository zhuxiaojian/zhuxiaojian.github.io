<h3><a href="javascript:;">代码段解释</a></h3>
<div>
<pre>
<xmp>
/**
 * Lottery Utility
 * 
 */

(function(W, j) {
    /**
     * [format]
     */
    j.format = function(str, typeData) {
        var m = /\{([\w\.]+)\}/g;
        var is_not_Object = true,
            b = false,
            len, Data = typeData === b ? null : j.isPlainObject(typeData) ? (is_not_Object = false, typeData) : j.isArray(typeData) ? typeData : Array.prototype.slice.call(arguments, 1);
        if (Data === null) {
            return str;
        }
        len = is_not_Object ? Data.length : 0;
        return String(str).replace(m, function(fixString, fixReplaceString) {
            var w, x;
            w = fixReplaceString.split(".");
            x = Data;
            for (var i = 0; i < w.length; i++) {
                x = x[w[i]];
            }
            return x;
        });
    };
    if(!W.console){
        W.console= {};
        W.console.log = function(){
            return W.alert(arguments[0]);
        };
    }
})(window, jQuery);

_showBox.find(".pickOk2").find(".totalball_note").html(tmpTotal + total);
            // 胆码
            _tmpStr = '<div class="picknum"><em class="cr">[胆]</em>';
            for(var i = 0; i < _red_dan_Arr.length; i++){
                _tmpStr += '<em class="_tmp_redball_dan_">' + _red_dan_Arr[i] + '</em>';
            }
            _tmpStr += '</div>';
            // 拖码
            _tmpStr += '<div class="picknum"><em>[拖]</em>';
            for(var i = 0; i < _red_tuo_Arr.length; i++){
                _tmpStr += '<em class="_tmp_redball_tuo_">' + _red_tuo_Arr[i] + '</em>';
            }
            _tmpStr += '</div>';

</xmp>
</pre>
</div>