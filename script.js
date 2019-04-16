

$(document).ready(function() {
    $("a").click(function () {
        $('audio').remove();
        console.log(this.id)

        let id = this.id;

        switch (id) {
            case 'virageNord':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1aZiJhEJ4ggJIeJoI3hm8n0gTeW9Dg-xo"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                break;
            case 'romainArreteSida':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1z_7OcfIuagQNkNKVtn-GLIIoJXPpj2a5"  type="audio/mpeg"> </audio>').appendTo('.buttons');
                break;
            case 'ohLesSalopes':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1En_ZEBOZ7WyHPUD5CctsnqktQo4YJElZ"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                break;
            case 'rohhLucie':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=19Qo5tcXdIwXYt50yNqLQDnNPMhmg0e-z"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                break;
            case 'rireLena':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=11RnvY7pzEzKU2Oa2J4nxw41v6S7vuBRK"  type="audio/mpeg"> </audio>').appendTo('.buttons');
                break;
            case 'ilAUnCouteau':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1vYsAtlOHJP-nJTAMXJyOAeLAReqV2O7V"  type="audio/mpeg"> </audio>').appendTo('.buttons');
                 break;
            case 'goal':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1kw2r3Xe5Su_SYaS34a4oEtEnF9PSEqP-"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                break;
            case 'kazri':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1ev-3fbKUsZ8v53MqNO9GE9-xIGXeW3Uj"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                break;
            case 'droplesbasse':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1ac6-PfQ0n9QqFrKTS3mP3Ab_R2VaNddk"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                break;
            case 'maisRomain':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1XVoi1JA2PKfw3ERGSgeDPmMum-CyMzWq"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                 break;
            case 'cb67':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1Iwcv6vwhXWmXgjKAT0YTJNxq35FYRVyD"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                 break;
            case 'giletJaune':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1H5_f3Iz1h8tzsKgEyh2bRLthe9F4GlM5"  type="audio/mpeg"> </audio>').appendTo('.buttons');

                break;
            case 'assassin':
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1qDPDMjlp3F-Zhs2rkhB9vphjEP4Hr6po"  type="audio/mpeg"> </audio>').appendTo('.buttons');
                break;
            default:
                $('<audio controls="controls" autobuffer="autobuffer" autoplay="autoplay"> <source src="https://docs.google.com/uc?export=download&id=1jH0w09gZcxp7MDIJAEYNM7AbsXEz5ZaF"  type="audio/mpeg"> </audio>').appendTo('.buttons');

        }

          });
});
