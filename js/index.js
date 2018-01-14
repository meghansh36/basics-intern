$(document).ready(function(){
    var mainwidth = $(".offer-row1").width();
    mainwidth = (mainwidth-20)/3;
    $('.blogs img, .magazine img, .video img, .ebook img, .event img, .mask, .title').width(mainwidth);
    $('.blogs img, .magazine img, .video img, .ebook img, .event img, .mask').height(mainwidth+30);

    $(window).resize(function(){
        var mainwidth = $(".offer-row1").width();
        mainwidth = (mainwidth-20)/3;
        $('.blogs img, .magazine img, .video img, .ebook img, .event img, .mask, .title').width(mainwidth);
        $('.blogs img, .magazine img, .video img, .ebook img, .event img, .mask').height(mainwidth+30);
        if(window.innerWidth <= 767)
    {
        $('.grid').eq(0).empty();
        $('.grid').append('<div class="item col-md-8 col-sm-8 col-xs-12" style="position:absolute; display:block;"><div class="item-content"><ul class="link-elements"><li class="link"><a href="#">About Us</a></li><li class="link"><a href="#">Policies</a></li><li class="link"><a href="#">Programs</a></li></ul></div></div><div class="item col-md-8 col-sm-8 col-xs-12" style="position:absolute; display:block;"><div class="item-content"><ul class="link-elements"><li class="link"><a href="#">Contact Us</a></li><li class="link"><a href="#">Privacy</a></li><li class="link"><a href="#">We Are Hiring</a></li></ul></div></div><div class="item col-md-8 col-sm-8 col-xs-12" style="position:absolute; display:block;"><div class="item-content"><ul class="link-elements"><li class="link"><a href="#">Our Team</a></li><li class="link"><a href="#">Terms and Conditions</a></li><li class="link"><a href="#">FAQ\'S</a></li></ul></div></div><div class="item col-md-4 col-sm-4 col-xs-12 contact-footer"><div class="item-content"><h3>Get In Touch</h3><form action="" ><div class="form-group"><label for="">Email</label><input type="email" name="email" class="email form-control" placeholder="Email"></div><div class="form-group"><label for="suggestion">Suggestions</label><textarea name="" id="suggestion" cols="" rows="3" class="form-control" placeholder="Type Here"></textarea></div><button class="btn-success btn" type="submit">Submit</button></form></div></div>');
        var grid = new Muuri('.grid');
        $('.footer-bottom').css('padding-top', 150);
    } else if(window.innerWidth <=560)
    {
        //$('.footer-bottom').css('padding-top', 200);
    }


    else{
        $('.grid').empty();
        $('.grid').append('<div class="item col-md-8 col-sm-8 col-xs-12" style="position:absolute; display:block;"><div class="item-content"><ul class="link-elements"><li class="link"><a href="#">About Us</a></li><li class="link"><a href="#">Policies</a></li><li class="link"><a href="#">Programs</a></li></ul></div></div><div class="item col-md-4 col-sm-4 col-xs-12 contact-footer"><div class="item-content"><h3>Get In Touch</h3><form action="" ><div class="form-group"><label for="">Email</label><input type="email" name="email" class="email form-control" placeholder="Email"></div><div class="form-group"><label for="suggestion">Suggestions</label><textarea name="" id="suggestion" cols="" rows="3" class="form-control" placeholder="Type Here"></textarea></div><button class="btn-success btn" type="submit">Submit</button></form></div></div><div class="item col-md-8 col-sm-8 col-xs-12" style="position:absolute; display:block;"><div class="item-content"><ul class="link-elements"><li class="link"><a href="#">Contact Us</a></li><li class="link"><a href="#">Privacy</a></li><li class="link"><a href="#">We Are Hiring</a></li></ul>		</div></div><div class="item col-md-8 col-sm-8 col-xs-12" style="position:absolute; display:block;"><div class="item-content">            <ul class="link-elements"><li class="link"><a href="#">Our Team</a></li><li class="link"><a href="#">Terms and Conditions</a></li><li class="link"><a href="#">FAQ\'S</a></li></ul></div></div>');
        var grid = new Muuri('.grid');
        $('.footer-bottom').css('padding-top', 20);
    }

    // $('.footer-bottom').empty();
    //     $('.footer-bottom').append('<div class="copyright"><p> Copyright &copy; Basics Eduventures 2017</p><div class="wthree-icon footer"><a href="#" class="social-button facebook"><i class="fa fa-facebook"></i></a> <a href="#" class="social-button twitter"><i class="fa fa-twitter"></i></a><a href="#" class="social-button instagram"><i class="fa fa-instagram"></i></a> <a href="#" class="social-button youtube"><i class="fa fa-youtube"></i></a><a href="#" class="social-button pinterest"><i class="fa fa-pinterest"></i></a><a href="#" class="social-button linkedin"><i class="fa fa-linkedin"></i></a></div></div><div class="clearfix"></div></div>')
    })

    if(window.innerWidth <= 767)
    {
        $('.grid').empty();
        $('.grid').append('<div class="item col-md-8 col-sm-8 col-xs-12" style="position:absolute; display:block;"><div class="item-content"><ul class="link-elements"><li class="link"><a href="#">About Us</a></li><li class="link"><a href="#">Policies</a></li><li class="link"><a href="#">Programs</a></li></ul></div></div><div class="item col-md-8 col-sm-8 col-xs-12" style="position:absolute; display:block;"><div class="item-content"><ul class="link-elements"><li class="link"><a href="#">Contact Us</a></li><li class="link"><a href="#">Privacy</a></li><li class="link"><a href="#">We Are Hiring</a></li></ul></div></div><div class="item col-md-8 col-sm-8 col-xs-12" style="position:absolute; display:block;"><div class="item-content"><ul class="link-elements"><li class="link"><a href="#">Our Team</a></li><li class="link"><a href="#">Terms and Conditions</a></li><li class="link"><a href="#">FAQ\'S</a></li></ul></div></div><div class="item col-md-4 col-sm-4 col-xs-12 contact-footer"><div class="item-content"><h3>Get In Touch</h3><form action="" ><div class="form-group"><label for="">Email</label><input type="email" name="email" class="email form-control" placeholder="Email"></div><div class="form-group"><label for="suggestion">Suggestions</label><textarea name="" id="suggestion" cols="" rows="3" class="form-control" placeholder="Type Here"></textarea></div><button class="btn-success btn" type="submit">Submit</button></form></div></div>');
        var grid = new Muuri('.grid');

        // $('.footer-bottom').empty();
        // $('.footer-bottom').append('<div class="copyright"><p> Copyright &copy; Basics Eduventures 2017</p><div class="wthree-icon footer"><a href="#" class="social-button facebook"><i class="fa fa-facebook"></i></a> <a href="#" class="social-button twitter"><i class="fa fa-twitter"></i></a><a href="#" class="social-button instagram"><i class="fa fa-instagram"></i></a> <a href="#" class="social-button youtube"><i class="fa fa-youtube"></i></a><a href="#" class="social-button pinterest"><i class="fa fa-pinterest"></i></a><a href="#" class="social-button linkedin"><i class="fa fa-linkedin"></i></a></div></div><div class="clearfix"></div></div>')
    }
    var rowwidth = $('.offer-row1').width() + $('.offer-row2').width();

    rowwidth = (window.innerWidth-rowwidth)/2;
    console.log(rowwidth)
})