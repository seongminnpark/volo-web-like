// popup.js

window.onload = function() {
    init();

};

function init() {
    var select_all_checkbox = document.getElementById("select-all-checkbox");
    select_all_checkbox.onclick = function() {
        toggle_select_all(select_all_checkbox.checked);
    }
}

function toggle_select_all(previous_value) {
    var filters = document.getElementsByClassName("filter-checkbox");
    [].forEach.call(filters, function (filter) {
        filter.checked = previous_value;
    });
}

