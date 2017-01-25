var exps = {

  memo: {},

  generate: function(linkName){
    var navBar = "";
    
    if(exps.memo[linkName] === undefined){
      let links = {
        home: "",
        skills: "",
        portfolio: "",
        about: "",
        contact: "",
      }

      links[linkName] = "class='active'";

      navBar =
              '<li' + links["home"] +'><a href="/">Home</a></li>'
              +'<li' + links["skills"] +'><a href="/skills">Skills</a></li>'
              +'<li' + links["portfolio"] +'><a href="/portfolio">Portfolio</a></li>'
              +'<li' + links["about"] +'><a href="/about">About</a></li>'
              +'<li' + links["contact"] +'><a href="/contact">Contact</a></li>'

      exps.memo[linkName] = navBar;
    }

    return exps.memo[linkName]; 
  }
}

module.exports = exps;