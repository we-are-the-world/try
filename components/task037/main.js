function popUp(id) {
    var popLayer = document.getElementById(id);
    addEvent(popLayer, "click", function(ev) {
        if (hasClass(ev.target, "poplayer-mask") || hasClass(ev.target, "close-poplayer")) {
            popLayer.style.display = "none";
        }
    });
}



window.onload = function() {
    (function() {
        var oBtn = document.getElementById("btn");
        addEvent(oBtn, "click", function() {
            var popLayer = document.getElementById("popLayer");
            poplayer.style.display = "block";
        });
    })();
    popUp("poplayer");
    var dragWrap = document.getElementsByClassName("poplayer-main")[0];
    setDrag(dragWrap, function() {
        boundary(dragWrap, 20);
    });
};
