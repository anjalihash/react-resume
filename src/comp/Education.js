function Education() {
  let Education_data = [
    {
      Education: "Secondary School (10th)",
      Time: "2016 – 2017",
      Location: "Shirpur, India",
      CollegeName: "H.R. Patel Secondary School"
    },
    {
      Education: "Higher Secondary (12th)",
      Time: "2018 – 2019",
      Location: "Shirpur, India",
      CollegeName: "H.R. Patel Junior College"
    },
    {
      Education: "Bachelor of Computer Applications",
      Time: "07/2019 – 08/2022",
      Location: "Shirpur, India",
      CollegeName: "R. C. Patel Arts, Commerce & Science College"
    },
    {
      Education: "Master of Computer Applications",
      Time: "11/2022 – 08/2024",
      Location: "Shirpur, India",
      CollegeName: "RCPET's Institute of Management Research and Development"
    },
    

  ]

  return (
    <div class="col-md-6">
      <h3 class="experience-title">Education</h3>

      <div class="experience-wrapper">
        {
          Education_data.map(
            edu=>(
              <div>
            <div class="company-wrapper clearfix">
              <div class="experience-title">{edu.Time}</div>
              <div class="time">{edu.Location}</div>
              
            </div>

            <div class="job-wrapper clearfix">
              <div class="experience-title">{edu.Education} </div>
              <div class="company-description">
                <p>{edu.CollegeName}</p>
              </div>
            </div>
          </div>
            ) 
        )
        }

      </div>
    </div>
  )
}
export default Education;