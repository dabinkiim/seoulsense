// SPREADSHEET 
const box = document.querySelector("#sheet");
      
fetch('https://opensheet.vercel.app/1_B_4amyQcUFOG9G1Gi7_LX02fdnyGXFtPYg_sYsei-E/archive')
  .then((res) => res.json())
  .then((data) => {
    data.forEach((row) => {

  
      var name = `${row.Name}`;
      var keyword = `${row.Keyword}`;
      var key_arr = keyword.split(' ');



      box.innerHTML += `
        <li id="${name}" class="work"></li>
        `;

        
      var keytext = $('.word').text().split(' ');
      var ran_key = key_arr[Math.floor(Math.random() * key_arr.length)]
      var work_name = document.getElementById(name);

      for ( var i in key_arr ) {
        work_name.innerHTML += `
          <div class="word" title="${key_arr[i]}">${key_arr[i]}</div>
      `;
      }
      console.log('first import sucessed!');


      // 랜덤 키워드만 보이게 
      
      ($('.word').each(function(){
            if ($(this).attr('title') === `${ran_key}`) {
            $(this).addClass('key');
            $(this).css('display', 'block');
          }
          }))
      console.log('main keyword search sucessed!');
      
    })

    // 위치 뿌리기
    $('.work').each(function() {
      $(this).draggable();
      $(this).css({
      'top' : Math.random() * ($(window).height() - 100),
      'left' : Math.random() * ($(window).width() - 100),
      'font-size' : Math.random() * (30-10) + 10
      });
    });

    $('button').on('click', function() {
        $('.work').each(function(i) {
          console.log(i);
          var delay = function() {
            $(this).css({
              'top' : Math.random() * ($(window).height() - 100),
              'left' : Math.random() * ($(window).width() - 100),
              'font-size' : Math.random() * (70-20) + 20
              });
          }
        setTimeout(delay, 1000 * i);
      });       
    })



    $('.key').each(function(){
      if ($(this).attr('title') === '재개발'){
        let i = Math.random() * 200;
        $(this).parent('.work').css({
          'top' : 50 + i,
          'left' : 50 + i
        });
      } else if ($(this).attr('title') === '노동'){
        let i = Math.random() * 200;
        $(this).parent('.work').css({
          'top' : 500 + i,
          'left' : 500 + i
        });
      }
    })


    // 클릭 시 전체 키워드 보이게
    $('.work').click(function(){
       $(this).toggleClass('word_show');
      console.log('click');
      $(this).children('.word').toggle();




   

  });

})







   
   