import dp from '../dp.jpeg';
function PictureAndName() {

    const FirstName = "Anjali";
    const LastName = "Patil";

    return(
        <div class="row d-felx felx-column align-items-center justify-content-center">
        <div class="col-sm-4 d-flex align-items-center justify-content-center align-self-stretch">
          <div class="picture-resume">
            <span><img src={dp} alt="" /></span>
            <svg version="1.1" viewBox="0 0 350 350">

              <defs>
                <filter id="goo">
                  <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                  <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 21 -9" result="cm" />
                </filter>
              </defs>

              <g filter="url(#goo)" >

                <circle id="main_circle" class="st0" cx="171.5" cy="175.6" r="130" />

                <circle id="circle" class="bubble0 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble1 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble2 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble3 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble4 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble5 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble6 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble7 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble8 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble9 st1" cx="171.5" cy="175.6" r="122.7" />
                <circle id="circle" class="bubble10 st1" cx="171.5" cy="175.6" r="122.7" />

              </g>
            </svg>
          </div>
      
        </div>
        <div class="col-sm-8 d-flex align-items-center justify-content-sm-start justify-content-center align-self-stretch">
          <h1>{FirstName} {LastName}</h1>
        </div>
       
        </div>
    )
}

export default PictureAndName;