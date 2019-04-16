

$(document).ready(function() {
    $("a").click(function () {
        $('audio').remove();
        console.log(this.id)

        let id = this.id;

        switch (id) {
            case 'MaisRomain':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1y0lXVf3jpugcmqAyPPQ0m76oe8JeUK-b"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                break;
            case 'RoohLucie':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=158ZT4c8PHfDTp2jPc1mMQGhwdb9Hv-5H"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;
            case 'DropBasse':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1jH0w09gZcxp7MDIJAEYNM7AbsXEz5ZaF"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                // expected output: "Mangoes and papayas are $2.79 a pound."
                break;
            default:
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1jH0w09gZcxp7MDIJAEYNM7AbsXEz5ZaF"  type="audio/mpeg"> </audio>').appendTo('.buttons');

        }

          });
});
