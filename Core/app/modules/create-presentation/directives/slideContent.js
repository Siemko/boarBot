app.directive('slideContent', ['$rootScope', function ($rootScope) {
    return {
        link: function (scope, element, attrs) {
            $rootScope.$on('add', function (e, val) {
                var domElement = element[0];
                if (document.selection) {
                    domElement.focus();
                    var sel = document.selection.createRange();
                    sel.text = val;
                    domElement.focus();
                } else if (domElement.selectionStart || domElement.selectionStart === 0) {
                    var startPos = domElement.selectionStart;
                    var endPos = domElement.selectionEnd;
                    var scrollTop = domElement.scrollTop;
                    
                    if(startPos - endPos != 0) {
                        var text = domElement.value.substring(startPos, endPos);
                        var splitedVal = val.split(']');
                        val = splitedVal[0] + ']' + text + splitedVal[1] + ']';
                    }
                    
                    domElement.value = domElement.value.substring(0, startPos) + val + domElement.value.substring(endPos, domElement.value.length);
                    domElement.focus();
                    domElement.selectionStart = startPos + val.length;
                    domElement.selectionEnd = startPos + val.length;
                    domElement.scrollTop = scrollTop;
                } else {
                    domElement.value += val;
                    domElement.focus();
                }
                $rootScope.selectedSlide.Content = domElement.value;
            });
        }
    }
}])