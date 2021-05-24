(function(global) {

    // Set up a namespace for our utility
    var ajaxUtils = {};


    // Returns an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest) {
            return (new XMLHttpRequest());
        } else if (window.ActiveXObject) {
            // For very old IE browsers (optional)
            return (new ActiveXObject("Microsoft.XMLHTTP"));
        } else {
            global.alert("Ajax is not supported!");
            return (null);
        }
    }


    // Makes an Ajax GET request to 'requestUrl'
    ajaxUtils.sendGetRequest =
        function(requestUrl, responseHandler, isJsonResponse) {
            var request = getRequestObject();
            request.onreadystatechange =
                function() {
                    handleResponse(request,
                        responseHandler,
                        isJsonResponse);
                };
            request.open("GET", requestUrl, true);
            request.send(null); // for POST only
        };


    // Only calls user provided 'responseHandler'
    // function if response is ready
    // and not an error
    function handleResponse(request,
        responseHandler,
        isJsonResponse) {
        if ((request.readyState == 4) &&
            (request.status == 200)) {

            // Default to isJsonResponse = true
            if (isJsonResponse == undefined) {
                isJsonResponse = true;
            }

            if (isJsonResponse) {
                responseHandler(JSON.parse(request.responseText));
            } else {
                responseHandler(request.responseText);
            }
        }
    }


    // Expose utility to the global object
    global.$ajaxUtils = ajaxUtils;


})(window);




//************************ Styling and other behavior *************************//

//*********************************************************//


(function(global) {

    //********** Code snippets ************ */
    let homesnippet = 'snippets/home.html'
    let loginsnippet = 'snippets/loginEtudiant.html'
    let signupsnippet = 'snippets/signup.html'



    let dc = {};
    // Convenience function for inserting innerHTML for 'select'
    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };

    // Show loading icon inside element identified by 'selector'.
    var showLoading = function(selector) {
        var html = "<div id='spinner' class='text-center'>";
        html += "<img src='images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };


    //Injecting the main content (home page)
    document.addEventListener("DOMContentLoaded", function(event) {
        showLoading("#place_holder");
        $ajaxUtils.sendGetRequest(homesnippet, function(responseText) { document.querySelector("#place_holder").innerHTML = responseText; }, false);
    });
    global.$dc = dc;


    //Injecting the home page
    $("#home_button").on("click", function() {
        showLoading("#place_holder");
        $ajaxUtils.sendGetRequest(homesnippet, function(responseText) { document.querySelector("#place_holder").innerHTML = responseText; }, false);
    });
    //Injecting the login form
    $(document).on('click', '#login', function() {
        $ajaxUtils.sendGetRequest(loginsnippet, function(responseText) { document.querySelector("#place_holder").innerHTML = responseText; }, false);
        console.log("hhhhhhh");
    });

    //Injecting the registration form
    $(document).on('click', '#sign_up', function() {
        $ajaxUtils.sendGetRequest(signupsnippet, function(responseText) { document.querySelector("#place_holder").innerHTML = responseText; }, false);
        console.log('hhh');
    });





    /*   */
    // $(document).on('mouseover', '#login', function() {
    //     this.onmouseover = function() {
    //         this.style.backgroundColor = '#ad1515';
    //     }
    //     this.onmouseout = function() {
    //         this.style.backgroundColor = 'transparent';
    //     }
    // });


    //add comment
    let commentSnippet = '../snippets/comment.html'
    let commentPlaceholder = document.querySelector("#comment_placeholder")
    let commentInput = document.querySelector('#comment_input')
    let comment = commentInput.value;



    $("#post_comment_button").on("click", function() {
        // showLoading("#comment_placeholder");
        let userImage = document.createElement('img');
        let userImagePath;
        let userName;

        userImage.setAttribute('src', userImagePath)
        userImage.setAttribute('height', '20px')

        let commentContent = document.createElement('p');
        let commentNode = document.createTextNode(comment)
        commentContent.appendChild(commentNode);
        commentPlaceholder.appendChild(commentContent);

    });

})(window);