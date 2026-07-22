/* =================================
   TERASS ECO TECHNOLOGY
   Layout 2 Column Blog + Sidebar
================================= */


/* ===== CONTENT WRAPPER ===== */

#content-wrapper{
  display:grid;
  grid-template-columns:2.3fr 1fr;
  gap:30px;
  max-width:1200px;
  margin:35px auto;
  padding:0 20px;
}

/* ===== FEATURED POST FULL WIDTH ===== */

#featured-post{
  grid-column:1 / -1;
}

/* ===== MAIN BLOG ===== */

#main-content{
  min-width:0;
}


.blog-section{
  background:#ffffff;
  border-radius:16px;
  padding:25px;
  box-shadow:0 10px 25px rgba(0,0,0,.08);
}


/* ===== SIDEBAR ===== */

#sidebar{
  position:relative;
}


.sidebar-section{
  background:#ffffff;
  border-radius:16px;
  padding:20px;
  box-shadow:0 10px 25px rgba(0,0,0,.08);
}


.sidebar-section h2{
  font-size:20px;
  font-weight:700;
  border-bottom:3px solid #FF6D00;
  padding-bottom:10px;
}


/* ===== RESPONSIVE MOBILE ===== */

@media(max-width:768px){

  #content-wrapper{
    grid-template-columns:1fr;
    padding:0 15px;
  }


  #sidebar{
    margin-top:25px;
  }

  }


/* =========================
 FEATURED POST
========================= */


#featured-post{
margin-bottom:35px;
}


.featured-card{

display:grid;
grid-template-columns:1.5fr 1fr;
background:#fff;
border-radius:18px;
overflow:hidden;
box-shadow:0 10px 30px rgba(0,0,0,.12);

}


.featured-image img{

width:100%;
height:350px;
object-fit:cover;

}


.featured-content{

padding:30px;

}


.featured-content h2{

font-size:30px;
font-weight:800;

}


.featured-content a{

color:#101820;
text-decoration:none;

}


.read-more{

display:inline-block;
margin-top:20px;
background:#FF6D00;
color:#fff!important;
padding:12px 20px;
border-radius:30px;

}



@media(max-width:768px){

.featured-card{

grid-template-columns:1fr;

}


.featured-image img{

height:230px;

}

}


/* =================================
   TERASS ECO TECHNOLOGY
   PREMIUM POST GRID
================================= */


/* GRID CONTAINER */

.blog-grid{

display:grid;
grid-template-columns:repeat(2,1fr);
gap:25px;

}



/* POST CARD */

.post-card{

background:#ffffff;
border-radius:18px;
overflow:hidden;
box-shadow:0 10px 25px rgba(0,0,0,.08);

transition:.35s ease;

opacity:0;
transform:translateY(40px);

}



.post-card.show{

opacity:1;
transform:translateY(0);

}



.post-card:hover{

transform:translateY(-8px);

}



/* IMAGE */

.post-thumb{

height:220px;
overflow:hidden;

}


.post-thumb img{

width:100%;
height:100%;
object-fit:cover;
transition:.5s;

}



.post-card:hover img{

transform:scale(1.08);

}



/* CONTENT */

.post-info{

padding:20px;

}



.post-title{

font-size:22px;
font-weight:800;
line-height:1.3;

}



.post-title a{

color:#101820;
text-decoration:none;

}



.post-desc{

color:#666;
font-size:14px;
line-height:1.6;

}



/* BUTTON */

.post-button{

display:inline-block;
margin-top:15px;
padding:10px 18px;
border-radius:30px;

background:#FF6D00;
color:white!important;

font-size:14px;
font-weight:600;

}


/* MOBILE */

@media(max-width:768px){

.blog-grid{

grid-template-columns:1fr;

}

     }

/* =================================
   SIDEBAR PREMIUM
================================= */


#sidebar{

display:flex;
flex-direction:column;
gap:25px;

}



.sidebar-section .widget{

background:#fff;
border-radius:18px;
padding:20px;

box-shadow:
0 10px 25px rgba(0,0,0,.08);

}



/* TITLE */

.sidebar-section .title{

font-size:20px;
font-weight:800;

border-left:5px solid #FF6D00;

padding-left:12px;

margin-bottom:18px;

}



/* SEARCH BOX */

.search-box input{

width:100%;
padding:14px;

border-radius:30px;
border:1px solid #ddd;

}



/* POPULAR POST */

.PopularPosts ul{

padding:0;
margin:0;

}


.PopularPosts li{

display:flex;
gap:12px;

margin-bottom:15px;

}



.PopularPosts img{

width:80px;
height:60px;

object-fit:cover;

border-radius:10px;

}



/* LABEL */

.Label a{

display:inline-block;

background:#f3f4f6;

padding:8px 14px;

border-radius:20px;

margin:4px;

font-size:13px;

}



/* AFFILIATE CARD */

.affiliate-card{

background:
linear-gradient(135deg,#111827,#374151);

color:white;

padding:20px;

border-radius:18px;

}



.affiliate-card a{

background:#FF6D00;

color:#fff;

padding:10px 18px;

border-radius:30px;

display:inline-block;

margin-top:15px;

}

/* =================================
   SIDEBAR STICKY
================================= */

@media(min-width:769px){

#sidebar{

position:sticky;
top:90px;
height:max-content;

}

   }

/* =================================
   PREMIUM FOOTER
================================= */


#footer-premium{

background:#111827;
color:#fff;

margin-top:50px;
padding:50px 20px 20px;

}



.footer-container{

max-width:1200px;
margin:auto;

display:grid;

grid-template-columns:
repeat(3,1fr);

gap:35px;

}



.footer-box h3{

font-size:22px;
font-weight:800;

margin-bottom:15px;

}



.footer-box p{

color:#d1d5db;
line-height:1.7;

}



.footer-box a{

color:#d1d5db;
text-decoration:none;

line-height:2;

}



.footer-box a:hover{

color:#FF6D00;

}



.copyright{

text-align:center;

border-top:1px solid rgba(255,255,255,.15);

margin-top:35px;

padding-top:20px;

color:#9ca3af;

}




/* MOBILE */

@media(max-width:768px){


.footer-container{

grid-template-columns:1fr;

}


}

/* =================================
   backtop
================================= */

#backTop{

position:fixed;

right:25px;
bottom:25px;

width:45px;
height:45px;

border-radius:50%;

border:none;

background:#FF6D00;

color:#fff;

font-size:22px;

cursor:pointer;

display:none;

z-index:9999;

}

/* =================================
   SINGLE POST PREMIUM
================================= */


.post-outer{

background:#fff;

border-radius:20px;

padding:30px;

box-shadow:
0 10px 30px rgba(0,0,0,.08);

}



.post-title{

font-size:38px;

font-weight:900;

line-height:1.2;

margin-bottom:20px;

}



.post-header{

color:#6b7280;

font-size:14px;

margin-bottom:25px;

}



/* GAMBAR UTAMA */

.post-body img{

width:100%;

height:auto;

border-radius:18px;

margin:20px 0;

}



/* ISI ARTIKEL */

.post-body{

font-size:18px;

line-height:1.8;

color:#374151;

}



/* PARAGRAF */

.post-body p{

margin-bottom:20px;

}



/* SHARE BUTTON */

.share-box{

display:flex;

gap:12px;

margin-top:35px;

}



.share-box a{

padding:10px 18px;

border-radius:30px;

background:#FF6D00;

color:#fff;

text-decoration:none;

font-weight:600;

}



/* =================================
   READING PROGRESS BAR
================================= */

#reading-progress{

position:fixed;

top:0;
left:0;

height:4px;

width:0%;

background:#FF6D00;

z-index:99999;

}


/* =================================
   RELATED POST PREMIUM
================================= */


#related-post{

margin-top:50px;

padding-top:30px;

border-top:1px solid #eee;

}



#related-post h3{

font-size:26px;

font-weight:800;

margin-bottom:25px;

}



.related-grid{

display:grid;

grid-template-columns:repeat(3,1fr);

gap:20px;

}



.related-card{

background:#fff;

border-radius:15px;

overflow:hidden;

box-shadow:
0 8px 20px rgba(0,0,0,.08);

}



.related-card img{

width:100%;

height:140px;

object-fit:cover;

}



.related-card h4{

padding:15px;

font-size:16px;

}



.related-card a{

color:#111827;

text-decoration:none;

}



@media(max-width:768px){

.related-grid{

grid-template-columns:1fr;

}

   }


/* =================================
   SEARCH OVERLAY PREMIUM
================================= */


#search-overlay{

position:fixed;

top:0;
left:0;

width:100%;
height:100%;

background:rgba(0,0,0,.75);

display:none;

z-index:99999;

}



#search-overlay.active{

display:block;

}



.search-container{

max-width:700px;

margin:100px auto;

background:#fff;

padding:30px;

border-radius:20px;

position:relative;

}



#search-close{

position:absolute;

right:20px;
top:15px;

border:none;

background:none;

font-size:25px;

cursor:pointer;

}



#search-input{

width:100%;

padding:16px 20px;

border-radius:30px;

border:1px solid #ddd;

font-size:17px;

}



#search-result{

margin-top:20px;

}



.search-item{

display:block;

padding:15px;

border-bottom:1px solid #eee;

color:#111827;

text-decoration:none;

}


.search-item:hover{

background:#f3f4f6;

}
