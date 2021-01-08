var data;

$.ajax({
    type: 'GET',
    url: 'data_filtered.json',
    dataType: 'json',
    success: function(d) { data = d; },
    async: false
});