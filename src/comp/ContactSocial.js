function ContactSocial()
{
  const Linkdin="https://www.linkedin.com/in/anjali-patil-181715288/"
  const GitHub="https://github.com/anjalihash"
    return(
        <div class="contact-social col-md-6">
          <ul class="list-titles mb-0">
            <li>LinkdIn</li>
            <li>GitHub</li>
          </ul>
          <ul class="list-content mb-0">
            <li><a target="_blank" href={Linkdin}>anjali-patil</a></li>
            <li><a target="_blank" href={GitHub}>anjalihash</a></li>
          </ul>
        </div>
    )
}
export default ContactSocial;