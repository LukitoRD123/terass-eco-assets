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

