// ******************************************
const pageUrlId = document.getElementById('sel');
const arc = document.getElementById('acr');
const metal = document.getElementById('metal');
var selectedValue;
console.log("i am working")

function getVal(val){
  selectedValue = val;
  if(selectedValue == 'metalic'){
    metal.classList.add("metal");
    arc.classList.remove('arc');
  }
  if(selectedValue == 'acrylic'){
    arc.classList.add('arc');
    metal.classList.remove('metal');
  }
}
function mySelection(){
  if(selectedValue == 'metalic'){
    console.log('metalic');
    pageUrlId.href = "metalic.html";
  }
  else if (selectedValue == 'acrylic'){
    console.log("acrylic");
    pageUrlId.href = "arcylic.html"
  }
  else{
    alert('Please choose option');
  }
}


$('.clk a').click(function(){
    $(this).find('i').toggleClass('fa fa-bars fa fa-close')
});

//  const btn = document.querySelector('#btn');
//         const sb = document.querySelector('#framework')
//         btn.onclick = (event) => {
//             if event.preventDefault()="";
//             alert(sb.value);
//         };

// if($('#g-1:selected'){
//     function myfunction(){
//         window.location="slide.html"
//     }
// })


// $('#colorSelect').change(function(){
//   var colorSelection = $('#colorSelect').val();
//   $('.js-'+colorSelection+'-btn').trigger('click');
// })

// $('.js-red-btn').on('click', function(){
//   $('#box').removeClass();
//   $('#box').addClass('red');
// })
// $('.js-green-btn').on('click', function(){
//   $('#box').removeClass();
//   $('#box').addClass('green');
// })
// $('.js-blue-btn').on('click', function(){
//   $('#box').removeClass();
//   $('#box').addClass('blue');
// })


// ************************************change img dynamically
ImgPathList =[
"images/li1.webp",
"images/li2.webp",
"images/li3.webp",
"images/li4.webp",
"images/li5.webp",
"images/li6.webp",
"images/li7.webp",
"images/li8.webp",
"images/li9.webp",
"images/li10.webp",
"images/li11.webp",
"images/li12.webp",
"images/li13.webp",
"images/li14.webp",
"images/li15.webp",
"images/li16.webp",
"images/li17.webp",
"images/li18.webp",
"images/li19.webp",
"images/li20.webp",
"images/li21.webp",
"images/li22.webp",
"images/li23.webp",
"images/li24.webp",
"images/li25.webp",
"images/li26.webp",
"images/li27.webp",
"images/li28.webp",
"images/li29.webp",
"images/li30.webp",
"images/li31.webp",
"images/li32.webp",
"images/li33.webp",
"images/li34.webp",
"images/li35.webp",
"images/li36.webp",
"images/li37.webp",
"images/li38.webp",
"images/li39.webp",
"images/li40.webp",
"images/li41.webp",
"images/li42.webp",
"images/li43.webp",
"images/li44.webp",
"images/li45.webp",
"images/li46.webp",
"images/li47.webp",
"images/li48.webp",
"images/li49.webp",
"images/li50.webp",
"images/li51.webp",
"images/li52.webp",
"images/li53.webp",
"images/li54.webp",
"images/li55.webp",
"images/li56.webp",
"images/li57.webp",
"images/li58.webp",
"images/li59.webp",
"images/li60.webp",
"images/li61.webp",
"images/li62.webp",
"images/li63.webp",
"images/li64.webp",
"images/li65.webp",
"images/li66.webp",
"images/li67.webp",
"images/li68.webp",
"images/li69.webp",
"images/li70.webp",
"images/li71.webp",
"images/li72.webp",
"images/li73.webp",
"images/li74.webp",
"images/li75.webp",

]
ul_li = document.getElementById('show_0').children;
floorImg = document.getElementById('floorShow');

function changeImg(count){
var index;
for (i of ul_li){
  count = count +1;
  i.setAttribute("id",count)
  i.addEventListener('click', function() { 
    index =this.id;
    console.log(ImgPathList[index])

    floorImg.src = ImgPathList[index];
    })
}
}
$('a[data-slide]').click(function(e) {
   e.preventDefault();
   var slideno = $(this).data('slide');
   $('.one-time').slick('slickGoTo', slideno - 1);
 });

