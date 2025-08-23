import ContactInfo from './ContactInfo';
import ContactPresentation from './ContactPresentation';
import ContactSocial from './ContactSocial';
import PictureAndName from './PictureAndName';

function Intro() {
  return (
    <section class="profile section-padding w-100">
      <div class="row">
      <div class="col-xl-6 align-items-stretch">
      <PictureAndName />
      </div>
      <div class="col-xl-6 d-flex align-items-center justify-content-center">
        <div class="w-100 d-flex flex-column flex-md-row align-self-center justify-content-center pt-5 pt-md-0">
      <ContactInfo />
      <ContactSocial />
        </div>
      </div>
      <ContactPresentation />


       
       
      </div>
    </section>
  )
}

export default Intro;
