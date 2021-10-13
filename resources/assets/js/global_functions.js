
/*chat*/
var socket = io.connect('https://chat-server.edupowerpublishing.com/');
var _token = $('meta[name="csrf-token"]').attr('content');
var uid = $('meta[name="uid"]').attr('content');
var cache = {};



socket.emit('set-userid', uid);

function ajaxCall(url, data, type) {
    return $.ajax({
        url: url,
        data: data,
        type: type
    });
}

function sendSocketEvent(name, data, receivers) {
    socket.emit('event-send', {
        receivers: receivers,
        name: name,
        data: data
    });
}

function getTime() {
    date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    hours = hours < 10 ? '0'+hours : hours;
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes;
    return strTime;
}

function getDate() {
    let date = new Date();
    return `${date.getFullYear()}-${(date.getMonth() < 10 ? "0" + date.getMonth() : date.getMonth())}-${(date.getDate() < 10 ? "0" + date.getDate() : date.getDate())}`;
}

function findObjectBySubKey(array, key1, key2, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key1][key2] == value) {
            return i;
        }
    }
    return null;
} 

function multiArraySort(array, key) {
    array.sort(function (a,b) {
        const dateA = a[key];
        const dateB = b[key];

        let sorted = 0;
        if (dateA > dateB) {
            sorted = -1;
        } else if (dateA < dateB) {
            sorted = 1;
        }
        return sorted;
    });
}



function ajaxCall2(url, data, type) {
    return $.ajax({
        url: url,
        data: data,
        type: type,
        cache: false,
        contentType: false,
        processData: false,
    });
}


function generateTableRow(tableId, rowClass, numColumns)
{
    var table = document.getElementById(tableId);
    var row = table.insertRow(-1); // -1 means append
    row.className = rowClass;

    var columns = [];
    for (var i = 0; i < numColumns; ++i) {
        columns[i] = row.insertCell(i);
    }
    return columns;
}


//generate combine function for table
function combine(id, index)
{
    return id + '_' + index;
}


function initAutocomplete(labelId, hiddenId, list, minLength, onChange, onSelect) {
    if (! minLength) minLength = 0;

    if (labelId && labelId[0] !== '#') 
        labelId = '#' + labelId;
    if (hiddenId && hiddenId[0] !== '#') 
        hiddenId = '#' + hiddenId;

    $(labelId).autocomplete({
        minLength: minLength,
        maxShowItems: 5,
        source: list,
        focus: function(event, ui) {
            event.preventDefault();
        },
        select: function(event, ui) {
            $(this).val(ui.item.label);
            $(hiddenId).val(ui.item.value);

            if (onSelect != undefined) onSelect(ui.item);

            event.preventDefault();
        },
        change: function(event, ui) {           
            var selection = $(this).val();

            var matches = list.filter(function(val) {
                return val.label == selection;
            });

            var isValid = matches.length != 0;

            if (isValid) {
                if (ui.item == null) ui.item = matches[0];

                $(this).val(ui.item.label);
                $(hiddenId).val(ui.item.value);
            }
            else {
                $(this).val(null);
                $(hiddenId).val(null);
            }

            if (onChange != undefined) onChange(ui.item, isValid);
        }
    })
    .focus(function() {
        $(this).data("ui-autocomplete").menu.bindings = $();
        $(this).autocomplete('search', $(this).val())
    });
}

function initUnrestrictedAutocomplete(t, e, n, l, a, i) {
    l || (l = 0),
        t && "#" !== t[0] && (t = "#" + t),
        e && "#" !== e[0] && (e = "#" + e),
        $(t)
            .autocomplete({
                minLength: l,
                maxShowItems: 5,
                source: n,
                focus: function (t, e) {
                    t.preventDefault();
                },
                select: function (t, n) {
                    $(this).val(n.item.label), $(e).val(n.item.value), i && i(n.item), t.preventDefault();
                },
                change: function (t, l) {
                    var i = $(this).val(),
                        u = n.filter(function (t) {
                            return t.label == i;
                        }),
                        o = 0 != u.length;
                    o ? (null == l.item && (l.item = u[0]), $(this).val(l.item.label), $(e).val(l.item.value)) : $(e).val(0), a && a(l.item, o);
                },
            })
            .focus(function () {
                $(this).autocomplete("search", $(this).val());
            });
}
$(function () {
    $('[data-toggle="tooltip"]').tooltip();
});
