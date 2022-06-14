var subject = [
  '버려진개는',
  '이주민은',
  '너는',
  '빈곤층은',
  '자본은',
  '우리는',
  '노동계급은',
  '이웃은',
  '이방인은',
  '부랑자는', 
  '군중은',
  '유목민은', 
  '곰팡이는',
  '이주노동자는',
  '개천용은'

], adjective = [
  '매끈한',
  '평평한',
  '연결된',
  '다이나믹',
  '쓰레기',
  '마비된', 
  '흙으로 덮힌',
  '구시대의 산물', 
  '은폐된',
  '한복판의',
  '민낯의',
  '모더니즘'
 
], object = [
  '구글지도를',
  '미군기지를',
  '틈새를',
  '폐허를',
  '아파트를',
  '지하세계를',
  '혐오시설을',
  '가난을',
  '난지도를', 
  '종합쇼핑몰을',
  '광장을',
  '그린벨트를'

], adverb = [
  '증강현실게임으로',
  '구조적으로',
  '환상적으로',
  '경쟁적으로',
  '연대하며',
  '트라우마로', 
  '아방가르드로', 
  '허울좋게',
  '유동적으로', 
  '기생하며',
  '착취하며',
  '청소하며'

], verb = [
  '관음했다.',
  '욕망했다.',
  '개발했다.', 
  '재생산했다.',
  '포위했다.',
  '위장했다.',
  '철거했다.',
  '거세했다.',
  '국민단합했다.',
  '포장했다.',
  '저항했다.',
  '지배했다.'


], image = [
  'source/seoul-1.gif',
  'source/seoul-2.gif',
  'source/seoul-3.gif',
]
  

function shuffle(db) {
  return db[Math.floor(Math.random() * db.length)];
}

$('body').on('click', function() {
   /* $(this).css({
    'background-image': 'url("' + shuffle(image) + '")',
    'background-size' : 'cover'
  }); */

  $('.subject').hide().delay(250).text(shuffle(subject)).fadeIn();
  $('.adjective').hide().delay(500).text(shuffle(adjective)).fadeIn();
  $('.object').hide().delay(750).text(shuffle(object)).fadeIn();
  $('.adverb').hide().delay(1000).text(shuffle(adverb)).fadeIn();
  $('.verb').hide().delay(1250).text(shuffle(verb)).fadeIn();
})
