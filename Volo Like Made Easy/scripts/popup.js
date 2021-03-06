// popup.js

window.onload = function() {
    init();
};

function init() {
    // Set up onclick for select_all.
    var select_all_checkbox = document.getElementById("VLME-all");
    select_all_checkbox.onclick = function() {
        toggle_select_all(select_all_checkbox.checked);
    }

    // Set up onclick for like.
    var like_button = document.getElementById("VLME-like-button");
    like_button.onclick = function() {
        like_button_pressed(true);
    }

    // Set up onclick for unlike.
    var unlike_button = document.getElementById("VLME-unlike-button");
    unlike_button.onclick = function() {
        like_button_pressed(false);
    }
}

function toggle_select_all(previous_value) {
    var filters = document.getElementsByClassName("VLME-filter");
    [].forEach.call(filters, function (filter) {
        filter.checked = previous_value;
    });
}

function like_button_pressed(is_like) {
    var selected_celltypes = get_selected_celltypes();

    chrome.tabs.executeScript({
            code: 'var selected_celltypes = "' + selected_celltypes.toString() + 
                    '"; var is_like = ' + is_like + ';'
        }, function() {
            chrome.tabs.executeScript({file: 'scripts/like.js'});
    }); 
}

function get_selected_celltypes() {
    var selected_types = [];

    var filters = document.getElementsByClassName("VLME-filter");
    [].forEach.call(filters, function (filter) {
        if (filter.checked) {
            var trimmed_id = (filter.id).replace('VLME-','');
            selected_types.push(trimmed_id);
        }
    });

    return selected_types;
}
