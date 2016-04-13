
function popUp(popLayer,close,dragSelector,moveSelector) {
    var dragWrap = poplayer.querySelector(".poplayer-main");
    addEvent(popLayer, "click", function(ev) {
        if ((typeof close) === "string" && hasClass(ev.target, close)) {
            popLayer.style.display = "none";
        } else if (Array.isArray(close)) {
            for (var i = 0, len = close.length; i < len; i++) {
                if (hasClass(ev.target, close[i])) {
                    popLayer.style.display = "none";
                    break;
                }
            }
        }
    });
    setDrag(dragWrap, ".poplayer-move", function() {
        boundary(dragWrap, 20);
    });
    return popLayer;
}

window.onload = function() {
    (function() {
        var oBtn = document.getElementById("btn");
        addEvent(oBtn, "click", function() {
            var popLayer = document.getElementById("popLayer");
            poplayer.style.display = "block";
        });
    })();

    var wer = document.querySelector("#poplayer");
    popUp(wer, ["poplayer-mask", "close-poplayer","xxx"],".poplayer-main",".poplayer-move");

};
