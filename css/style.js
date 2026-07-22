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
