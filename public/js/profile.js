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




// //************************ Styling and other behavior *************************//





(function(global) {

    //Code snippets
    let postSnippet = '../snippets/approval.html';


    //Buttons : like - comment - star
    // let like = document.getElementById('like_button');
    // let star = document.getElementById('star_button');
    // let comment = document.getElementById('comment_button')

    //Images : Like - Star - Comment
    let likeImage = document.querySelector("#like_button img")
    let starImage = document.querySelector("#star_button img")

    //Boleans to control the clicks of like and star
    let likeButtonclicked = false;
    let starButtonclicked = false;


    //Buttons: Post - Upload

    let postButton = document.getElementById('post_button');
    // let uploadButton = document.getElementById('upload_button');



    //Turn on/off the like button

    //ajax
    $(document).on('click', '#like_button', function() {
        if (likeButtonclicked === false) {
            likeImage.src = '../images/like_after.png'
            likeButtonclicked = true;
        } else {
            likeImage.src = '../images/like_before.png'
            likeButtonclicked = false;
        }
    });


    //NO ajax
    // like.onclick = function() {
    //     if (likeButtonclicked === false) {
    //         likeImage.src = '../images/like_after.png'
    //         likeButtonclicked = true;
    //     } else {
    //         likeImage.src = '../images/like_before.png'
    //         likeButtonclicked = false;
    //     }
    // }

    //Turn on/off the star button

    //ajax
    $(document).on('click', '#star_button', function() {
        if (starButtonclicked === false) {
            starImage.src = '../images/star_after.png'
            starButtonclicked = true;
        } else {
            starImage.src = '../images/star_before.png'
            starButtonclicked = false;
        }
    });


    //no ajax
    // star.onclick = function() {
    //     if (starButtonclicked === false) {
    //         starImage.src = '../images/star_after.png'
    //         starButtonclicked = true;
    //     } else {
    //         starImage.src = '../images/star_before.png'
    //         starButtonclicked = false;
    //     }
    // }

    //Display the comment section
    // comment.onclick = function() {

    // }


    //Loading spinner
    var insertHtml = function(selector, html) {
        var targetElem = document.querySelector(selector);
        targetElem.innerHTML = html;
    };
    var showLoading = function(selector) {
        var html = "<div id='spinner' class='text-center'>";
        html += "<img src='../images/ajax-loader.gif'></div>";
        insertHtml(selector, html);
    };
    let removeLoading = function(selector) {

    }

    //Click action to show post 

    postButton.onclick = function() {
        console.log("it's working!");
        showLoading("#loading_placeholder");
        $ajaxUtils.sendGetRequest(postSnippet, function(responseText) { document.querySelector("#loading_placeholder").innerHTML = responseText; }, false);
    };






})(window);