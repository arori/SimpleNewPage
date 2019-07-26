(function () {
    var colors = [{
        id: 'white',
        hex: '#FFFFFF',
    }, {
        id: 'black-theme',
        hex: '#323639',
    }, {
        id: 'black-theme-darker',
        hex: '#202124',
    }, {
        id: 'black',
        hex: '#000000',
    }];

    function saveOptions(event) {
        var input = event.target;
        if (input) {
            var current = colors.find(function (item) {
                return item.id === input.id;
            });
            chrome.storage.sync.set({ color: current });
        }
    }

    function renderOptions() {
        var colorListElem = document.querySelector('.color-list');

        for (var i = 0; i < colors.length; i++) {
            var html = '';
            html += '<li class="color-item ' + colors[i].id + '">'
            html += '<span class="color-thumb" style="background:' + colors[i].hex + '"></span>';
            html += '<input type="radio" id="' + colors[i].id + '" name="background" />'
            html += '<label for="' + colors[i].id + '"> [' + colors[i].hex + ']' + '</label>';
            html += '</li>';

            colorListElem.insertAdjacentHTML('beforeend', html);
        }

        chrome.storage.sync.get({ color: colors[0] }, function (items) {
            document.getElementById(items.color.id).checked = true;
        });
    }

    document.addEventListener('DOMContentLoaded', renderOptions);
    document.querySelector('.color-list').addEventListener('change', saveOptions);
})();