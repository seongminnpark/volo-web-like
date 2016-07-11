// unlike.js

function unlike() {
    var cells_to_like = document.getElementsByClassName(cell_class);

    for (i = 0; i < cells_to_like.length; i++) {
        var cell_info = get_child_with_class(cells_to_like[i], "c_info");
        
        if (cell_info != null) {
            var heart_button = get_child_with_class(cell_info, "like on");
            if (heart_button != null) {
                heart_button.click();
            }
        }
    }
}

function get_child_with_class(element, classname) {
    NodeList.prototype.forEach = Array.prototype.forEach

    var children = element.childNodes;
    var found = null;

    children.forEach(function(child){
        if (child.className == classname) {
            found = child;
        }
    });    
    
    return found;      
}

unlike();