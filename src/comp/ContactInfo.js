function ContactInfo()
{
  const PhoneNumber ="+91 9511600279"
  const EmailId="anjalispatil2006@gmail.com"
  const Location="Panvel, Navi Mumbai"

    return(
        <div class="contact-info col-md-6">
          <ul class="list-titles mb-0">
            <li>Call</li>
            <li>Mail</li>
            <li>Location</li>
          </ul>
          <ul class="list-content mb-0">
            <li>{PhoneNumber}</li>
            <li>{EmailId}</li>
            <li>{Location}</li>
          </ul>
        </div>
    )
}
export default ContactInfo;