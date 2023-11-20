const elItemMenu = document.getElementById("itemMenu")
const elItemChild = document.getElementById("itemPostNew")
const elPostTrend = document.getElementById("postTrend")
const elPostNew = document.getElementById("postNew")

axios.get('https://apiforlearning.zendvn.com/api/v2/categories_news').then((response) => {
  const data = response.data.data;

  let htmlMenu = '';
  let htmlParent = '';

  data.forEach((item, index) => {
    if(index < 3){
        htmlMenu += `<li class="menu-item"><a href="contact.html" class="echo-dropdown-main-element">${item.name}</a></li>`
    } else {
        htmlParent += `<li class="nav-item"><a href="post-style-1.html">${item.name}</a></li>`
    }
  });
  elItemMenu.innerHTML = 
  htmlMenu + 
  `
      <li class="menu-item echo-has-dropdown">
      <a href="#" class="echo-dropdown-main-element"><span>Danh Muc Khac</span>
      </a>
      <ul class="echo-submenu list-unstyled menu-pages">
          ${htmlParent}
          
      </ul>
      </li>
  `
});

axios.get('https://apiforlearning.zendvn.com/api/v2/articles?limit=3&page=1').then((response) => {
  const dataArticles = response.data.data;

  let html = '';

  dataArticles.forEach((item) => {
    let categoryName =  item.category.name;
    html +=`
    <div class="col-lg-4 col-md-6">
                            <div class="echo-latest-news-main-content">
                                <div class="echo-latest-news-img img-transition-scale">
                                    <a href="post-details.html">
                                        <img src="${item.thumb}" alt="Echo" class="img-hover">
                                    </a>
                                    <span class="content-catagory-tag">${categoryName}</span>   
                                </div>
                                <div class="echo-latest-news-single-title">
                                    <h5><a href="post-details.html" class="text-capitalize title-hover">${item.title}</a></h5>
                                </div>
                                <div class="echo-latest-news-time-views">
                                    <a href="#" class="pe-none"><i class="fa-light fa-clock"></i> 06 minute read</a>
                                    <a href="#" class="pe-none"><i class="fa-light fa-eye"></i> 3.5k Views</a>
                                </div>
                            </div>
                        </div>
    
    `
  });
  elItemChild.innerHTML = html;
});

axios.get('https://apiforlearning.zendvn.com/api/v2/articles/popular?limit=6').then((response) => {
  const dataPostTrend = response.data.data;

  let html = '';
  let htmlnew = '';

  
  dataPostTrend.forEach((item, index) => {

    if(index <= 1){
        html +=`
        <div class="echo-trending-right-site-post">
            <div class="echo-trending-right-site-post-img img-transition-scale">
                <a href="post-details.html">
                    <img src="${item.thumb}" alt="Echo" class="img-hover">
                </a>
            </div>
            <div class="echo-trending-right-site-post-title">
                <h4 class="text-capitalize"><a href="post-details.html" class="title-hover">${item.title}</a></h4>
            </div>
            <div class="echo-trending-right-site-like-comment-share-icons">
                <div class="echo-trending-right-like-comment-content">
                    <a href="#" class="pe-none"><i class="fa-light fa-clock"></i> 06 minute read</a>
                </div>
                <div class="echo-trending-right-like-comment-content">
                    <a href="#" class="pe-none"><i class="fa-light fa-eye"></i> 3.5k Views</a>
                </div>
                <div class="echo-trending-right-like-comment-content">
                    <a href="#" class="pe-none"><i class="fa-light fa-arrow-up-from-bracket"></i>
                        1.5k Share</a>
                </div>
            </div>
        </div>

        
        `
    } else  {
        htmlnew +=`
                            <div class="echo-trending-left-site-post">
                                <div class="echo-trending-left-site-post-img img-transition-scale">
                                    <a href="post-details.html">
                                        <img src="${item.thumb}" alt="Echo" class="img-hover">
                                    </a>
                                </div>
                                <div class="echo-trending-right-site-post-title">
                                    <a href="catagory-details2.html" class="content-catagory-tag">Gadget</a>
                                    <h5><a href="post-details.html" class="text-capitalize title-hover">${item.title}</a></h5>
                                    <div class="echo-trending-post-bottom-icons">
                                        <a href="#" class="pe-none"><i class="fa-light fa-clock"></i> 06 minute read</a>
                                        <a href="#" class="pe-none"><i class="fa-light fa-eye"></i> 3.5k Views</a>
                                    </div>
                                </div>
                            </div>
                            
                            


        `
    }

    
  });
  elPostTrend.innerHTML = `
  <div class="col-xl-6">
  ${html}
  </div>
  <div class="col-xl-6">
  ${htmlnew}
  </div>
  
  
  
  `;
     
});


axios.get('https://apiforlearning.zendvn.com/api/v2/categories_news/articles?limit_cate=3&limit=3').then((response) => {
  const newPost = response.data.data;



  let html = '';

  newPost.forEach((item) => {
  let htmlNew = '';

    item.articles.forEach(itemArt => {
        htmlNew += `
    
                                <div class="echo-trending-left-site-post">
                                    <div class="echo-trending-left-site-post-img img-transition-scale">
                                        <a href="post-details.html">
                                            <img src="${itemArt.thumb}" alt="Echo" class="img-hover">
                                        </a>
                                    </div>
                                    <div class="echo-trending-right-site-post-title">
                                        <a href="catagory-details2.html" class="content-catagory-tag">Tech News</a>
                                        <h5><a href="post-details.html" class="text-capitalize title-hover">${itemArt.title}</a></h5>
                                    </div>
                                </div>
                                
                            
    `
    });
    html +=`
    <div class="col-lg-4">
                            <div class="wrapper">
                                <h5 class="title">${item.name}</h5>

                                ${htmlNew}
                                </div>
                                </div>
    
    `



  });
  elPostNew.innerHTML = html;
});
