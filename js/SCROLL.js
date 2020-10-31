            $(window).scroll(function() 
            {
                var hei = $(window).scrollTop();
                if(hei > 250)
                {
                    document.getElementById("scrolled-nav").style.backgroundColor = "#0f0f0a";
                    //document.getElementById("scrolled-nav").style.color = "white";
                }
                else 
                    document.getElementById("scrolled-nav").style.backgroundColor = "transparent";
            });