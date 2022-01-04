/* Written by Sooin Lee during the class of Himedia Academy */

$(document).ready(function(){
  var $pd_img = ["product1.jpg", "product2.jpg"];

  $(".pd_img img").attr("src", `./img/${$pd_img[0]}`);
  $(".thumb_img ul li").each(function(index){
    $(this).css("background-image", `url(./img/${$pd_img[index]})`);
  });

  $(".thumb_img ul li").click(function(){
    var $index = $(this).index();
    $(".pd_img img").attr("src", `./img/${$pd_img[$index]}`);
    $(".thumb_img ul li").removeClass("active");
    $(this).addClass("active");
  });

  var $price = $(".origin_price span").text();
  console.log("price : " + $price);  
  var $num_price = Number($price.replace(/,/g, ""));
  console.log($num_price);
  var $num = Number($(".control_num input").val());  
  var $total_price = 0;  
  var $total_price_result = ""; 
  var $opt_val = 0;  


  function calc_price(){
    $(".control_num input").val($num);
    $total_price = ($num_price + $opt_val) * $num;
    console.log($total_price);

    $total_price_result = $total_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    console.log($total_price_result); 
    $(".total_price span").text($total_price_result);

    var $detail_img = $(".pd_img img").attr("src");
    $(".cart_img img").attr("src", `./img/${$pd_img[0]}`);

    var $detail_title = $(".main .title").text();
    $(".cart_info h4").text($detail_title);
    $(".cart_info .buy_price span").text($total_price_result);

    var $sel_opt_text = $("#opt option:selected").text();
    console.log($sel_opt_text);
    $(".bottom_list p span").text($sel_opt_text);

    var $sel_opt_val = $("#opt").val();
    console.log($sel_opt_val);  
    if($sel_opt_val == 0){
      $(".bottom_list").hide();
    }else{
      $(".bottom_list").show();
    }
  }


  $(".minus").click(function(){
    if($num < 2){
    }else{
      $num--;
      calc_price();
    }
    return false;
  });

  $(".plus").click(function(){
    $num++;
    calc_price();
    return false;
  });

  $("#opt").change(function(){
    $opt_val = Number($(this).val());  
    console.log($opt_val);
    calc_price();
  });


  $("header nav ul li:last").click(function(){
    $(".dark").addClass("active");
    $(".mycart").addClass("active");

    calc_price();
    return false;
  });
  $(".detail_btn li:last").click(function(){
    $(".dark").addClass("active");
    $(".mycart").addClass("active");

    calc_price();
    return false;
  });

  $(".dark, .cart_close, .cart_btn li:last").click(function(){
    $(".dark").removeClass("active");
    $(".mycart").removeClass("active");
  });


});
