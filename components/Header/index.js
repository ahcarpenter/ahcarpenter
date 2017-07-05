import SocialLink from '../SocialLink'

const Header = () => {
  const socialLinks = [
    {href: "https://github.com/ahcarpenter", title: "", class: "github", iconClass:"fa fa-github-alt"},
    {href: "https://www.linkedin.com/in/andrew-h-carpenter-a5051815/", title: "", class:"linkedin", iconClass: "fa fa-linkedin"},
    {href: "https://twitter.com/hefleycarpenter", title: "", class:"twitter", iconClass: "fa fa-twitter"},
    {href: "https://facebook.com/DrewCarpenter", title: "", class:"facebook", iconClass: "fa fa-facebook"}
  ]

  return (
    <header>
      <p class="social social--outline">
        {socialLinks.map(socialLink => <SocialLink {...socialLink} />)}
      </p>
    </header>
  )
};

export default Header;
