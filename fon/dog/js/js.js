function x1(event){
   this.querySelectorAll('.layer-bg').forEach(layer => {
       let speed = layer.getAttribute('data-speed');

       layer.style.transform = `translateX(${event.clientX*speed/1000}px)`
     
   });
}

 function y1(event){
    this.querySelectorAll('.layer-1').forEach(layer => {
        let speed = layer.getAttribute('data-speed');
 
 
       layer.style.transform = `translateY(${event.clientY*speed/1000}px)`;
    });
 }

 $(window).on('load', function () {
   var $preloader = $('#page-preloader'),
       $spinner   = $preloader.find('.spinner');
   $spinner.fadeOut();
   $preloader.delay(350).fadeOut('slow');
});

let frank = document.getElementById('frank');



document.addEventListener('mousemove',x1);
document.addEventListener('mousemove',y1);



