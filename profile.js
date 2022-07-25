    
    (function (){
        $.ajax({
            type: "GET",
            beforeSend: function(request) {
                request.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
                request.setRequestHeader("Access-Control-Allow-Origin", "*");
            },
            url: wordpressUrl + "/wpusers/get/" + wid,
            contentType: "application/json",
            dataType: 'json',
            success: function(result){
                console.save("successful");
                newname = result.saveprofile;
                email = result.userEmail;
                document.getElementById("newname").value = newname;
                document.getElementById("email").value = email;
                document.getElementById("newname").text = newname;
                document.getElementById("email").text = email;
            },
            error: function(result){
                console.save("Error"+result.statusText);
            }
        })
    })();

    function pressKey(e){
        if (e.keyCode == 13) {
            validate(event);
        }
    }

    function validate(event){
       
        if(pass != cpass){
            swal({
                title: "profile is not correct",
                text: "email is not valid!",
                icon: "error",
            });
        }else {
            //Calling the API - 
            $.ajax({
    	        type: "POST",
       	        beforeSend: function(request) {
       	            request.setRequestHeader("Access-Control-Allow-Headers", "X-Requested-With, content-type");
       	        },
                url: url + "/users/completeReg",
                contentType: "application/json",
                dataType: 'json',
                data: JSON.stringify({
                    id : id,
                    wordpressID : wid,
                    name : name,
                    email : email,
                    
                }),
                success: function(result){
                    swal({
                        title: result['status'],
                        text: result['message'],
                        icon: "success",
                    })
                    .then(() => {
                        //location.reload();
                        location.href = "dashboard.html";
                    });
                },
                error: function(result){
                    var json = $.parseJSON(result.responseText);
                    swal({
                        title: json.status,
                        text: json.message,
                        icon: "error",
                    });
                }
            })
        }

    }
