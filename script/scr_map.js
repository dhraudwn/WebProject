var map = null;

function initMap() {
    map = new naver.maps.Map('map', {
        center: new naver.maps.LatLng(35.888836,128.608111),
        zoom: 17
    });
    
    var infoWindow = new naver.maps.InfoWindow({
        anchorSkew: true
    });

    var address = document.getElementById('f_add').innerText;
    naver.maps.Service.geocode({
        query: address
    }, function(status, response) {
        if (status === naver.maps.Service.Status.ERROR) {
            if (!address) {
                return alert('Geocode Error, Please check address');
            }
            return alert('Geocode Error, address:' + address);
        }

        if (response.v2.meta.totalCount === 0) {
            return alert('No result.');
        }
        
        var htmlAddresses = [],
            item = response.v2.addresses[0],
            point = new naver.maps.Point(item.x, item.y);

        map.setCenter(point);
        var marker = new naver.maps.Marker({
            position: new naver.maps.LatLng(point),
            map: map
        });
        //infoWindow.open(map, point);
    });
}