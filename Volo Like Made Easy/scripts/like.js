// like.js

function like_selected() {
    selected_celltypes_array = selected_celltypes.split(',');

    for (i = 0; i < selected_celltypes_array.length; i++) {
        like_class(selected_celltypes_array[i]);
    }
}

function like_class(cell_class) {
    var cells_to_like = document.getElementsByClassName(cell_class);

    var toggle_mode = is_like ? "like" : "like on";  
    
    for (j = 0; j < cells_to_like.length; j++) {
        var cell_info = get_child_with_class(cells_to_like[j], "c-info");

        if (cell_info != null) {
            var heart_button = get_child_with_class(cell_info, toggle_mode);
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

like_selected();