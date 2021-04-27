var num =1;
                var q={
                    1:{'step':'step1','title':'','type':'EI','A':'E','B':'I'},
                    2:{'step':'step2','title':'문제 2번','type':'EI','A':'E','B':'I'},
                    3:{'step':'step3','title':'문제 3번','type':'EI','A':'E','B':'I'},
                    4:{'step':'step4','title':'문제 4번','type':'SN','A':'S','B':'N'},
                    5:{'step':'step5','title':'문제 5번','type':'SN','A':'S','B':'N'},
                    6:{'step':'step6','title':'새로운 도전보다는 안정적인 삶을 선호한다.'
                    ,'type':'SN','A':'S','B':'N'},
                    7:{'step':'step','title':'힘든일이나 고민이 있을때 나는 어떤 친구에게 조언을 구하는가?','type':'TF','내가 가진 고민거리에 대해 해박한 친구':'T','공감과 위로를 잘해주는 친구':'F'},
                    8:{'step':'step8','title':'나는 슬럼프가 오면 오래가는 편이다.','type':'TF','그렇지않다':'T','그렇다':'F'},
                    9:{'step':'step9','title':'문제 9번','type':'TF','A':'T','B':'F'},
                    10:{'step':'step10','title':'나는 실해하기 전에 계획하는데 많은 시간이 드는 편이다.','type':'JP','그렇다':'J','그렇지 않다':'P'},
                    11:{'step':'step11','title':'매달 지출과 수입을 가계부를 작성해서 관리하는 편이다.','type':'JP','그렇다':'J','그렇지않다':'P'},
                    12:{'title':'문제 12번','type':'JP','A':'J','B':'P'}
                }

                var result = {
                    'ISTJ': {'people':'거지력 0%', 'explain':'완벽한 논리주의자인 당신은 투자의 귀재가 되실 수 있습니다.', 'img':'images/dog-2810484_1280.jpg'},
                    'ISFJ': {'people':'', 'explain':'so cute', 'img':'images/iceland-1979445_1280.jpg'},
                    'INFJ': {'people':'개', 'explain':'so cute', 'img':'images/iceland-1979445_1280.jpg'},
                    'INTJ': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ISTP': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ISFP': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'INFP': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'INTP': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ESTP': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ESFP': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ENFP': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ENTP': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ESTJ': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ESFJ': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ENFJ': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},
                    'ENTJ': {'people':'개', 'explain':'so cute', 'img':'images/dog-2810484_1280.jpg'},


                }



                function start(){
                    $(".start").hide();
                    $(".question").show();
                    next();
                }


                $('#A').click(function(){
                    var type = $('#type').val();
                    var preValue = $('#'+type).val();
                    $('#'+type).val(parseInt(preValue)+1);
                    next();
                })

                $('#B').click(function(){
                    next();
                })

                function next(){
                    if(num===13){
                        $('.question').hide();
                        $('.result').show();
                        var mbti="";
                        ($('#EI').val() < 2 ? mbti+='I': mbti+='E');
                        ($('#SN').val() < 2 ? mbti+='N': mbti+='S');
                        ($('#TF').val() < 2 ? mbti+='F': mbti+='T');
                        ($('#JP').val() < 2 ? mbti+='P': mbti+='J');
                        alert(mbti);
                        $('#img'),attr('src',result[mbti]['img']);
                        $('#animal').html(result[mbti]['animal']);
                        $('#explain').html(result[mbti]['explain']);
                        
                        
                            
                    }else{
                        $('.progress-bar').attr('style','width: calc( 100/12*'+num+'%)');
                        $('#step').html(q[num]['step']);
                        $('#title').html(q[num]['title']);
                        $('#type').val(q[num]['type']);
                        $('#A').html(q[num]['A']);
                        $('#B').html(q[num]['B']);
                        num++;
                    }
                   
                }
