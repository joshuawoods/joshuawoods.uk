$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        
        //get the name field value
        var Image1 = $('#Img1Position').val();
        var Image2 = $('#Img2Position').val();
        var Image3 = $('#Img3Position').val();
        var Image4 = $('#Img4Position').val();
        var Image5 = $('#Img5Position').val();
        var Image6 = $('#Img6Position').val();
        var Image7 = $('#Img7Position').val();
        var Image8 = $('#Img8Position').val();
        var Image9 = $('#Img9Position').val();
        var Image10 = $('#Img10Position').val();
        var Image11 = $('#Img11Position').val();
        var Image12 = $('#Img12Position').val();
        var Image13 = $('#Img13Position').val();
        var Image14 = $('#Img14Position').val();
        var Image15 = $('#Img15Position').val();
        var Image16 = $('#Img16Position').val();
        var Image17 = $('#Img17Position').val();
        var Image18 = $('#Img18Position').val();
        var Image19 = $('#Img19Position').val();
        var Image20 = $('#Img20Position').val();
        var Image21 = $('#Img21Position').val();
        var Image22 = $('#Img22Position').val();
        var Image23 = $('#Img23Position').val();
        var Image24 = $('#Img24Position').val();
        var Image25 = $('#Img25Position').val();
        var Image26 = $('#Img26Position').val();
        var Image27 = $('#Img27Position').val();
        var Image28 = $('#Img28Position').val();
        var Image29 = $('#Img29Position').val();
        var Image30 = $('#Img30Position').val();
        var Image31 = $('#Img31Position').val();
        var Image32 = $('#Img32Position').val();
        var Image33 = $('#Img33Position').val();
        var Image34 = $('#Img34Position').val();
        var Image35 = $('#Img35Position').val();
        var Image36 = $('#Img36Position').val();
                    
        //pretend we don't need validation
        
        //send to formspree
        $.ajax({
            url:'https://formspree.io/info@joshuawoods.uk',
            method:'POST',
            data:{
                Statement1Position:Image1,
		Statement2Position:Image2,
		Statement3Position:Image3,
		Statement4Position:Image4,
		Statement5Position:Image5,
		Statement6Position:Image6,
		Statement7Position:Image7,
		Statement8Position:Image8,
		Statement9Position:Image9,
		Statement10Position:Image10,
		Statement11Position:Image11,
		Statement12Position:Image12,
		Statement13Position:Image13,
		Statement14Position:Image14,
		Statement15Position:Image15,
		Statement16Position:Image16,
		Statement17Position:Image17,
		Statement18Position:Image18,
		Statement19Position:Image19,
		Statement20Position:Image20,
		Statement21Position:Image21,
		Statement22Position:Image22,
		Statement23Position:Image23,
		Statement24Position:Image24,
		Statement25Position:Image25,
		Statement26Position:Image26,
		Statement27Position:Image27,
		Statement28Position:Image28,
		Statement29Position:Image29,
		Statement30Position:Image30,
		Statement31Position:Image31,
		Statement32Position:Image32,
		Statement33Position:Image33,
		Statement34Position:Image34,
		Statement35Position:Image35,
		Statement36Position:Image36,
                _subject:'qSort Submission',
            },
            dataType:"json",
            success:function() {
                console.log('success'); 
                $('#contactform').hide();
                $('#thankyouBlock').show();
            }   
        });     
        
    });
}); 