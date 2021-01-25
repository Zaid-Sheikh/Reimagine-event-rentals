window.addEventListener("DOMContentLoaded", function() {

    var form = document.getElementById("form");

    function success() {
      form.reset();
      $(".handler").append('<div> <code>Submittion was sent.</code> </div>')
    }

    function error() {
        $(".handler").append('<div> <code>There was an error. Please try again later</code> </div>')
    }

    form.addEventListener("submit", function(ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
}