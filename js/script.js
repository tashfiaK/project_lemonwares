// slider section
function showHosting(){
    document.getElementById('hosting').style.display = "block";
    document.getElementById('domain').style.display = "none";
    document.getElementById('seo').style.display = "none";
    document.getElementById('email').style.display = "none";

    // const triggerEl = document.querySelector(".s_top_btn[href=",#hosting"]")
    // bootstrap.group.getInstance(triggerEl).show() // Select tab by name
}
function showDomain(){
    document.getElementById('domain').style.display = "block";
    document.getElementById('hosting').style.display = "none";
    document.getElementById('seo').style.display = "none";
    document.getElementById('email').style.display = "none";
}
function showSeo(){
    document.getElementById('seo').style.display = "block";
    document.getElementById('hosting').style.display = "none";
    document.getElementById('domain').style.display = "none";
    document.getElementById('email').style.display = "none";

}
function showEmail(){
    document.getElementById('email').style.display = "block";
    document.getElementById('hosting').style.display = "none";
    document.getElementById('domain').style.display = "none";
    document.getElementById('seo').style.display = "none";
}
// monthly-yearly button
function toggleOn(){
    document.getElementsByClassName("cus_toggle")[0].src = 'images/icons8-toggle-on-90.png';
}
function toggleOff(){
    document.getElementsByClassName("cus_toggle")[0].src = 'images/icons8-toggle-off-96.png';
}
// package option -basic
function showBasic() {
    document.getElementsByClassName("starter")[0].style.display = "block";
    document.getElementsByClassName("starter")[1].style.display = "block";
    document.getElementsByClassName("starter")[2].style.display = "block";
    document.getElementsByClassName("starter")[3].style.display = "none";
    document.getElementsByClassName("starter")[4].style.display = "none";
    document.getElementsByClassName("starter")[5].style.display = "none";
    // document.getElementById('m_premium').style.display = "none";
}
// package option - premium
function showPremium() {
    document.getElementsByClassName("starter")[0].style.display = "none";
    document.getElementsByClassName("starter")[1].style.display = "none";
    document.getElementsByClassName("starter")[2].style.display = "none";
    document.getElementsByClassName("starter")[3].style.display = "block";
    document.getElementsByClassName("starter")[4].style.display = "block";
    document.getElementsByClassName("starter")[5].style.display = "block";
    // document.getElementById('m_basic').style.display = "none";
}