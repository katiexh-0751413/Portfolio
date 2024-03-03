document.addEventListener('DOMContentLoaded', function () {
    var safechatnavbar = document.getElementById('safechatnavbar');
    var contentDiv = document.getElementById('content');
  
    if (safechatnavbar && contentDiv) {
      var safechatnavbarHeight = safechatnavbar.clientHeight;
      contentDiv.style.marginTop = safechatnavbarHeight + 'px';
    }
  });
  