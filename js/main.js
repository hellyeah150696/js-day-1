/**
 * 1-lương 1 ngày :100.000
 *   số ngày đi làm
 * 
 * 2-số ngày đi làm * lương 1 ngày
 * 
 * 3-lương nhân viên
 * 
 */

document.getElementById("tongLuong").onclick = function(){
    var luong1Ngay = document.getElementById("luong1Ngay").value;
    var ngayLam = document.getElementById("ngayLam").value;

    var luong = parseInt (luong1Ngay) * parseInt (ngayLam);
    document.getElementById("divShowInfo").innerHTML = "Số tiền Lương là : " + luong + " VND";
};




/**
 * 1- 5 số thực numb1 numb2 numb3 numb4 numb5
 *  
 * 2- tính giá trị trung bình (numb1 + numb2 + numb3 + numb4 + numb5)/5
 * 
 * 3- xuất ra màn hình giá trị trung bình của 5 so
 */

document.getElementById("trungBinh").onclick = function(){
    var numb1 = document.getElementById("number1").value;
    var numb2 = document.getElementById("number2").value;
    var numb3 = document.getElementById("number3").value;
    var numb4 = document.getElementById("number4").value;
    var numb5 = document.getElementById("number5").value;

    var trungBinhCong = (parseInt(numb1) + parseInt(numb2) + parseInt(numb3) + parseInt(numb4) +parseInt(numb5))/5;

    document.getElementById("divTrungBinh").innerHTML = "Trung Bình Là : " + trungBinhCong;
};






/**
 * 1-giá USD : 23500
 * 
 * 2-quy đổi usd sang vnd theo công thức : usd * 23500;
 * 
 * 3-xuất ra số tiền quy đổi usd ra vnd
 *
 * 
 */

document.getElementById("exchange").onclick = function(){
    var usd = document.getElementById("USD").value;
    var exChange = usd * 23500;

    document.getElementById("divExchange").innerHTML = "Số tiền quy đổi là : " + exChange + " VND";
};


/**
 * 1-Đầu vào
 *   chiều dài hình chữ nhật
 *   chiều rộng hình chữ nhật
 * 
 * 2-xử lý
 *   chu vi = (chiều dà + chiều rộng)*2
 *   diện tích = chiều dài * chiều rộng
 * 
 * 3-xuất ra diện tích, chu vi
 * 
 */
document.getElementById("chuVi").onclick = function(){
    var dai = document.getElementById("chieuDai").value;
    var rong = document.getElementById("chieuRong").value;
    var chuViHcn = (parseInt(dai) + parseInt(rong))*2;
    document.getElementById("showChuVi").innerHTML = "chu vi là : " + chuViHcn;
};
document.getElementById("dienTich").onclick = function(){
    var dai = document.getElementById("chieuDai").value;
    var rong = document.getElementById("chieuRong").value;
    var dienTichHcn = dai * rong;
    document.getElementById("showDienTich").innerHTML = "Diện Tích Là : " + dienTichHcn;
};


/**
 * -đầu vào
 *  1 số có 2 chữ số
 * 
 * -xử lý
 *  int = so % 10
 *  int = so /10
 * 
 * -đầu ra
 *  ký số
 */


document.getElementById("kyso").onclick = function(){
    var n = document.getElementById("inputNumber").value;
    var hangChuc = Math.floor (n % 10);
    var hangDonVi = Math.floor (n / 10)
    var soKy = hangChuc + hangDonVi;  
    document.getElementById("showKySo").innerHTML = "Số Ký là: "+ soKy;
};